const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const { isDeepStrictEqual } = require("util");
const { bundleToFloors, readBundle, validateBundle, validateProjectReferences } = require("./story_ir");
const { characterStories, irFile } = require("./manage_story_ir");
const { mainStoryIrFiles, mergeMainStoryBundles, readMainStoryBundles, stripCommonFields } = require("./main_story_ir");

const root = path.resolve(__dirname, "..");
const ownershipFile = path.join(root, "project", "story-ownership.json");

function slash(file) {
  return file.replace(/\\/g, "/");
}

function globRegex(pattern) {
  const source = pattern
    .replace(/[.+^${}()|[\]\\]/g, "\\$&")
    .replace(/\*\*/g, "::DOUBLE_STAR::")
    .replace(/\*/g, "[^/]*")
    .replace(/::DOUBLE_STAR::/g, ".*")
    .replace(/\?/g, "[^/]");
  return new RegExp(`^${source}$`);
}

function matchesAny(file, patterns) {
  return patterns.some((pattern) => globRegex(pattern).test(slash(file)));
}

function gitLines(args) {
  const output = execFileSync("git", ["-c", `safe.directory=${slash(root)}`, "-c", "core.autocrlf=false", "-c", "core.safecrlf=false", ...args], { cwd: root, encoding: "utf8" }).trim();
  return output ? output.split(/\r?\n/).map(slash) : [];
}

function changedPaths() {
  return new Set([
    ...gitLines(["diff", "--name-only", "HEAD", "--"]),
    ...gitLines(["ls-files", "--others", "--exclude-standard"]),
  ]);
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function validateSourceAuthority(changed, ownership) {
  const changedSources = [...changed].filter((file) => matchesAny(file, ownership.authoritativeSource.paths));
  if (!changedSources.length) return;

  const flag = process.argv.indexOf("--source-import-manifest");
  if (flag < 0 || !process.argv[flag + 1]) {
    throw new Error(`Authoritative source changed without --source-import-manifest: ${changedSources.join(", ")}`);
  }
  const manifestPath = path.resolve(root, process.argv[flag + 1]);
  if (!manifestPath.startsWith(root + path.sep)) throw new Error("Source import manifest must be inside the repository");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  if (manifest.version !== ownership.validation.sourceImportManifestVersion || !Array.isArray(manifest.sources)) {
    throw new Error("Invalid source import manifest");
  }
  const records = new Map(manifest.sources.map((record) => [slash(record.path), record.sha256]));
  for (const file of changedSources) {
    const absolute = path.join(root, ...file.split("/"));
    if (!fs.existsSync(absolute) || records.get(file) !== sha256(absolute)) {
      throw new Error(`Source import manifest does not match complete file: ${file}`);
    }
  }
}

function renderFloor(floor) {
  return `main.floors.${floor.floorId}=\n${JSON.stringify(floor, null, 4)}\n`;
}

function managedIrFiles() {
  return [
    ...mainStoryIrFiles(),
    ...characterStories.map((story) => irFile(story)),
  ];
}

function managedBundles() {
  return managedIrFiles().map((file) => readBundle(file));
}

function currentFloorMap() {
  const floors = new Map();
  for (const bundle of managedBundles()) {
    validateProjectReferences(root, bundle);
    for (const floor of bundleToFloors(bundle)) floors.set(floor.floorId, floor);
  }
  return floors;
}

function visitNodes(nodes, visitor) {
  for (const node of nodes || []) {
    visitor(node);
    if (node.kind === "choice") {
      for (const option of node.options || []) visitNodes(option.events, visitor);
    }
  }
}

function validateRuntimeReachability() {
  const bundles = managedBundles();
  const sceneIds = new Set(bundles.flatMap((bundle) => bundle.scenes.map((scene) => scene.id)));
  const edges = new Map([...sceneIds].map((id) => [id, new Set()]));
  for (const bundle of bundles) {
    for (const scene of bundle.scenes) {
      visitNodes(scene.events, (node) => {
        if (node.kind === "goto" && sceneIds.has(node.floorId)) edges.get(scene.id).add(node.floorId);
        if (node.kind === "function.call" && typeof node.function === "string") {
          for (const target of sceneIds) {
            if (node.function.includes(`'${target}'`) || node.function.includes(`"${target}"`)) edges.get(scene.id).add(target);
          }
        }
      });
    }
  }

  const timeline = JSON.parse(fs.readFileSync(path.join(root, "project", "timeline.json"), "utf8"));
  const akiba = JSON.parse(fs.readFileSync(path.join(root, "project", "akiba-event-meta.json"), "utf8"));
  const roots = new Set([
    ...(timeline.chapters || []).flatMap((chapter) => (chapter.nodes || []).map((node) => node.floorId)),
    ...(akiba.activeEvents || []).map((event) => event.floorId),
  ].filter((id) => sceneIds.has(id)));
  const reachable = new Set(roots);
  const queue = [...roots];
  while (queue.length) {
    const id = queue.shift();
    for (const target of edges.get(id) || []) {
      if (reachable.has(target)) continue;
      reachable.add(target);
      queue.push(target);
    }
  }
  const missing = [...sceneIds].filter((id) => !reachable.has(id));
  if (missing.length) throw new Error(`Story scenes have no validated runtime entry path: ${missing.join(", ")}`);
}

function headFloorMap() {
  const floors = new Map();
  const files = [
    ...gitLines(["ls-tree", "-r", "--name-only", "HEAD", "--", "project/story-ir/main"])
      .filter((file) => file.endsWith(".json")),
    ...characterStories.map((story) => slash(path.relative(root, irFile(story)))),
  ];
  for (const file of files) {
    let text;
    try {
      text = execFileSync("git", ["-c", `safe.directory=${slash(root)}`, "-c", "core.autocrlf=false", "-c", "core.safecrlf=false", "show", `HEAD:${file}`], {
        cwd: root,
        encoding: "utf8",
        maxBuffer: 32 * 1024 * 1024,
      });
    } catch (error) {
      // A newly added Story IR bundle has no HEAD baseline yet. Treat its
      // previous floor set as empty; transaction validation below still
      // requires every generated floor to be present and reproducible.
      if (error && error.status === 128 && String(error.stderr || "").includes("not in 'HEAD'")) continue;
      throw error;
    }
    const bundle = validateBundle(JSON.parse(text));
    for (const floor of bundleToFloors(bundle)) floors.set(floor.floorId, floor);
  }
  return floors;
}

function headMainStoryBundle() {
  const files = gitLines(["ls-tree", "-r", "--name-only", "HEAD", "--", "project/story-ir/main"])
    .filter((file) => file.endsWith(".json"));
  if (!files.length) return null;
  const bundles = files.map((file) => {
    const text = execFileSync("git", ["-c", `safe.directory=${slash(root)}`, "-c", "core.autocrlf=false", "-c", "core.safecrlf=false", "show", `HEAD:${file}`], {
      cwd: root,
      encoding: "utf8",
      maxBuffer: 32 * 1024 * 1024,
    });
    return validateBundle(JSON.parse(text));
  });
  return mergeMainStoryBundles(bundles);
}

function currentMainStoryBundle() {
  return mergeMainStoryBundles(readMainStoryBundles());
}

function headStoryIrCanonical() {
  const characters = {};
  for (const story of characterStories) {
    const file = slash(path.relative(root, irFile(story)));
    const text = execFileSync("git", ["-c", `safe.directory=${slash(root)}`, "-c", "core.autocrlf=false", "-c", "core.safecrlf=false", "show", `HEAD:${file}`], {
      cwd: root,
      encoding: "utf8",
      maxBuffer: 32 * 1024 * 1024,
    });
    characters[story.slug] = stripCommonFields(validateBundle(JSON.parse(text)));
  }
  return { main: headMainStoryBundle(), characters };
}

function currentStoryIrCanonical() {
  const characters = {};
  for (const story of characterStories) characters[story.slug] = stripCommonFields(readBundle(irFile(story)));
  return { main: currentMainStoryBundle(), characters };
}

function isStoryIrOnlyCommonFieldReorganization(changedIr, previousCanonical) {
  if (!previousCanonical || !changedIr.length) return false;
  return isDeepStrictEqual(previousCanonical, currentStoryIrCanonical());
}

function validateTransactions(changed, ownership) {
  const current = currentFloorMap();
  const previous = headFloorMap();
  const generatedIds = new Set([...current.keys(), ...previous.keys()]);
  const expected = new Set([...generatedIds]
    .filter((id) => !isDeepStrictEqual(previous.get(id), current.get(id)))
    .map((id) => `project/floors/${id}.js`));
  const changedFloors = new Set([...changed].filter((file) => (
    matchesAny(file, ownership.derivedStoryData.paths) && generatedIds.has(path.basename(file, ".js"))
  )));
  const changedIr = [...changed].filter((file) => matchesAny(file, ownership.storyIr.paths));

  const storyIrOnlyCommonFieldReorganization = isStoryIrOnlyCommonFieldReorganization(changedIr, headStoryIrCanonical());
  if (changedIr.length && !expected.size && !storyIrOnlyCommonFieldReorganization) {
    throw new Error(`Story IR changed without a derived floor change: ${changedIr.join(", ")}`);
  }
  for (const file of expected) {
    if (!changed.has(file)) throw new Error(`Story IR output changed but derived floor is missing from the transaction: ${file}`);
  }
  for (const file of changedFloors) {
    if (!expected.has(file)) throw new Error(`Generated floor changed outside the Story IR transaction: ${file}`);
  }
  for (const [id, floor] of current) {
    const file = path.join(root, "project", "floors", `${id}.js`);
    if (!fs.existsSync(file) || fs.readFileSync(file, "utf8") !== renderFloor(floor)) {
      throw new Error(`Generated floor is not reproducible from Story IR: project/floors/${id}.js`);
    }
  }
}

function validateEmitterBoundaries(ownership) {
  const forbidden = [
    /project[\\/]mainStory/,
    /project[\\/]story[\\/]/,
    /main_story_portrait_decisions/,
    /(?:text|event)ToIr\s*\(/,
    /--(?:refresh-ir|bootstrap-character)/,
  ];
  for (const file of ownership.derivedStoryData.emitters) {
    const text = fs.readFileSync(path.join(root, ...file.split("/")), "utf8");
    for (const pattern of forbidden) {
      if (pattern.test(text)) throw new Error(`${file}: emitter crosses the Story IR ownership boundary (${pattern})`);
    }
  }
}

function main() {
  const ownership = JSON.parse(fs.readFileSync(ownershipFile, "utf8"));
  if (ownership.version !== 1) throw new Error("Unsupported story ownership version");
  if (ownership.authoritativeSource.owner !== "human" || ownership.storyIr.owner !== "agent" ||
      ownership.derivedStoryData.owner !== "generator" || ownership.runtimeWiring.owner !== "generator-or-explicit-integration") {
    throw new Error("Story ownership roles do not match the repository contract");
  }
  const changed = changedPaths();
  validateEmitterBoundaries(ownership);
  validateSourceAuthority(changed, ownership);
  validateTransactions(changed, ownership);
  validateRuntimeReachability();
  console.log(`Validated story ownership and ${changed.size} changed repository paths.`);
}

if (require.main === module) main();

module.exports = { globRegex, matchesAny };
