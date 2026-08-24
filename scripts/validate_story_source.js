const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { readBundle } = require("./story_ir");
const { readMainStoryBundle } = require("./main_story_ir");

const root = path.resolve(__dirname, "..");
const irRoot = path.join(root, "project", "story-ir");
const lineAssetPattern = /^CH([1-7])_L(\d+)\.png$/;

function jsonFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return jsonFiles(file);
    return entry.isFile() && entry.name.endsWith(".json") ? [file] : [];
  });
}

function verifySources(bundle) {
  for (const source of bundle.source.files) {
    const file = path.join(root, ...source.path.split("/"));
    if (!fs.existsSync(file)) throw new Error(`Story IR source is missing: ${source.path}`);
    const actual = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
    if (actual !== source.sha256) throw new Error(`Story IR is stale for ${source.path}; the Agent must update semantic IR before emission`);
  }
}

function normalizeDirective(line) {
  return line.trim().replace(/^【背景\s*[：:]\s*/, "【背景：").replace(/^【CG\s*[：:]\s*/, "【CG：");
}

function sourceDirective(line) {
  const text = normalizeDirective(line);
  if (text.startsWith("【背景：") && text.endsWith("】")) {
    return { kind: "background", name: text.slice("【背景：".length, -1).trim() };
  }
  if (text.startsWith("【CG：") && text.endsWith("】")) {
    const body = text.slice("【CG：".length, -1).trim();
    const match = body.match(/^(.*?)[\s　_]+(出現|消失)$/);
    if (!match || match[2] !== "出現") return null;
    return { kind: "cg", name: match[1].trim() };
  }
  return null;
}

function visitNodes(nodes, visitor) {
  for (const node of nodes || []) {
    visitor(node);
    if (node.kind === "choice") {
      for (const option of node.options || []) visitNodes(option.events, visitor);
    }
  }
}

function validateMainStoryLineAssets(bundle) {
  const chapters = new Map();
  const firstAppearances = new Map();
  for (let chapter = 1; chapter <= 7; chapter += 1) {
    const lines = fs.readFileSync(path.join(root, "project", "mainStory", `CH${chapter}`), "utf8").split(/\r?\n/);
    chapters.set(chapter, lines);
    lines.forEach((line, index) => {
      const directive = sourceDirective(line);
      if (!directive) return;
      const key = `${directive.kind}:${directive.name}`;
      if (!firstAppearances.has(key)) firstAppearances.set(key, `CH${chapter}_L${index + 1}.png`);
    });
  }

  const used = new Set();
  for (const scene of bundle.scenes) {
    for (const image of scene.floor.images || []) used.add(image.name);
    visitNodes(scene.events, (node) => {
      if ((node.kind === "background.show" || node.kind === "image.show") && node.image) used.add(node.image);
    });
  }

  const images = fs.readdirSync(path.join(root, "project", "images")).filter((name) => lineAssetPattern.test(name)).sort();
  for (const image of images) {
    const match = image.match(lineAssetPattern);
    const chapter = Number(match[1]);
    const lineNumber = Number(match[2]);
    const directive = sourceDirective(chapters.get(chapter)[lineNumber - 1] || "");
    if (!directive) throw new Error(`${image} does not address a CG appearance or background directive`);
    const expected = firstAppearances.get(`${directive.kind}:${directive.name}`);
    if (expected !== image) throw new Error(`${image} is not the first authoritative appearance of ${directive.name}; use ${expected}`);
    if (!used.has(image)) throw new Error(`${image} is not referenced by main-story Story IR`);
  }
  for (const image of used) {
    if (lineAssetPattern.test(image) && !images.includes(image)) throw new Error(`Story IR references missing line-addressed asset ${image}`);
  }
  return images.length;
}

function main() {
  const files = jsonFiles(irRoot).sort();
  let sourceCount = 0;
  for (const file of files) {
    // Historical, intentionally disabled character bundles remain source/hash
    // traceable without being promoted into the active runtime contract.
    const bundle = readBundle(file, { allowLegacyLifecycle: true });
    verifySources(bundle);
    sourceCount += bundle.source.files.length;
  }
  const lineAssets = validateMainStoryLineAssets(readMainStoryBundle());
  console.log(`Validated ${files.length} Story IR bundles against ${sourceCount} source records and ${lineAssets} line-addressed assets.`);
}

if (require.main === module) main();

module.exports = { jsonFiles };
