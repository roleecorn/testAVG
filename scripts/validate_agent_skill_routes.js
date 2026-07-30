"use strict";

const crypto = require("crypto");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const skillRoot = path.join(root, ".codex", "skills");
const referenceRoot = path.join(skillRoot, "mota-avg-editor", "references");
const questionRoot = path.join(root, ".codex", "task-questions");
const migrationPath = path.join(root, ".codex", "agent-reference-migration.md");
const requiredHeadings = [
  "Inputs",
  "Outputs",
  "Dependencies",
  "Blocking Conditions",
  "Non-blocking Questions",
  "Handoff",
  "Validation",
];
const errors = [];
const warnings = [];

function relative(file) {
  return path.relative(root, file).replaceAll("\\", "/");
}

function listFiles(directory, predicate = () => true) {
  if (!fs.existsSync(directory)) return [];
  const result = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...listFiles(fullPath, predicate));
    else if (predicate(fullPath)) result.push(fullPath);
  }
  return result.sort();
}

function read(file) {
  return fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "");
}

function addError(message) {
  errors.push(message);
}

function addWarning(message) {
  warnings.push(message);
}

function checkSkillInterfaces(skillFiles) {
  for (const file of skillFiles) {
    const content = read(file);
    for (const heading of requiredHeadings) {
      const pattern = new RegExp(`^## ${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "m");
      if (!pattern.test(content)) {
        addError(`${relative(file)} is missing required heading "## ${heading}"`);
      }
    }
  }
}

function getProjectSkills(skillFiles) {
  const skills = new Map();
  for (const file of skillFiles) {
    const content = read(file);
    const match = content.match(/^name:\s*([a-z0-9-]+)\s*$/m);
    if (!match) {
      addError(`${relative(file)} has no parseable frontmatter name`);
      continue;
    }
    if (skills.has(match[1])) addError(`duplicate project Skill name: ${match[1]}`);
    skills.set(match[1], { file, content });
  }
  return skills;
}

function checkDependencyTree(skills) {
  const graph = new Map([...skills.keys()].map((name) => [name, []]));
  for (const [name, skill] of skills) {
    const dependencyPattern = /Project Skill:\s*`([^`]+)`/g;
    for (const match of skill.content.matchAll(dependencyPattern)) {
      const dependency = match[1];
      if (!skills.has(dependency)) {
        addError(`${relative(skill.file)} references missing Project Skill "${dependency}"`);
        continue;
      }
      graph.get(name).push(dependency);
    }
  }

  const state = new Map();
  const stack = [];
  function visit(name) {
    if (state.get(name) === "done") return;
    if (state.get(name) === "visiting") {
      const start = stack.indexOf(name);
      addError(`project Skill dependency cycle: ${[...stack.slice(start), name].join(" -> ")}`);
      return;
    }
    state.set(name, "visiting");
    stack.push(name);
    for (const dependency of graph.get(name) || []) visit(dependency);
    stack.pop();
    state.set(name, "done");
  }
  for (const name of graph.keys()) visit(name);
}

function resolveMarkdownTarget(sourceFile, rawTarget) {
  let target = rawTarget.trim();
  if (target.startsWith("<") && target.endsWith(">")) target = target.slice(1, -1);
  target = target.split(/\s+["']/)[0];
  if (
    !target ||
    target.startsWith("#") ||
    /^(?:https?:|mailto:|data:|app:)/i.test(target)
  ) {
    return null;
  }
  target = target.split("#")[0].split("?")[0];
  try {
    target = decodeURIComponent(target);
  } catch {
    addError(`${relative(sourceFile)} contains invalid encoded link target "${rawTarget}"`);
    return null;
  }
  if (/^[A-Za-z]:[\\/]/.test(target)) return path.normalize(target);
  if (target.startsWith("/")) return path.join(root, target.slice(1));
  return path.resolve(path.dirname(sourceFile), target);
}

function checkMarkdownLinks(markdownFiles) {
  const linkPattern = /\[[^\]]*]\(([^)\r\n]+)\)/g;
  for (const file of markdownFiles) {
    const content = read(file).replace(/```[\s\S]*?```/g, "");
    for (const match of content.matchAll(linkPattern)) {
      const target = resolveMarkdownTarget(file, match[1]);
      if (target && !fs.existsSync(target)) {
        addError(`${relative(file)} has broken link "${match[1]}"`);
      }
    }
  }
}

function checkDuplicateReferences() {
  const hashes = new Map();
  for (const file of listFiles(referenceRoot, (item) => item.endsWith(".md"))) {
    if (path.dirname(file) !== referenceRoot) {
      addError(`canonical references must remain flat: ${relative(file)}`);
    }
    const hash = crypto.createHash("sha256").update(read(file).trim()).digest("hex");
    const existing = hashes.get(hash);
    if (existing) {
      addError(`duplicate canonical references: ${relative(existing)} and ${relative(file)}`);
    } else {
      hashes.set(hash, file);
    }
  }
}

function runGit(args) {
  const result = spawnSync("git", ["-c", "core.quotepath=false", ...args], {
    cwd: root,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    addError(`git ${args.join(" ")} failed: ${(result.stderr || result.stdout).trim()}`);
    return "";
  }
  return result.stdout;
}

function checkMigrationAndLegacyDocs() {
  const legacyFiles = listFiles(path.join(root, "agent"), (file) => file.endsWith(".md"));
  for (const file of legacyFiles) addError(`residual duplicate Agent document: ${relative(file)}`);

  if (!fs.existsSync(migrationPath)) {
    addError("missing .codex/agent-reference-migration.md");
    return;
  }

  const mappings = new Map();
  const rowPattern = /^\|\s*`(agent\/[^`]+\.md)`\s*\|\s*`([^`]+)`\s*\|/gm;
  for (const match of read(migrationPath).matchAll(rowPattern)) {
    const oldPath = match[1].replaceAll("\\", "/");
    const targetPath = match[2].replaceAll("\\", "/");
    mappings.set(oldPath, targetPath);
    if (fs.existsSync(path.join(root, oldPath))) {
      addError(`migration source still exists: ${oldPath}`);
    }
    if (!fs.existsSync(path.join(root, targetPath))) {
      addError(`migration target does not exist: ${targetPath}`);
    }
  }
  if (mappings.size === 0) addError("migration table contains no agent/*.md mappings");

  const deleted = new Set();
  const outputs = [
    runGit(["log", "--format=", "--diff-filter=D", "--name-only", "--", "agent"]),
    runGit(["diff", "--name-status", "--", "agent"]),
    runGit(["diff", "--cached", "--name-status", "--", "agent"]),
  ];
  for (const output of outputs) {
    for (const line of output.split(/\r?\n/)) {
      const match = line.trim().match(/^(?:D\s+)?(agent\/.+\.md)$/);
      if (match) deleted.add(match[1].replaceAll("\\", "/"));
    }
  }
  for (const oldPath of deleted) {
    if (!mappings.has(oldPath)) addError(`deleted Agent document has no migration mapping: ${oldPath}`);
  }
}

function checkQuestionsAndTodos() {
  const questionFiles = listFiles(questionRoot, (file) => file.endsWith(".md"));
  for (const file of questionFiles) {
    if (path.basename(file) === "TEMPLATE.md") continue;
    if (!/^\d{8}-\d{6}-[a-z0-9-]+\.md$/.test(path.basename(file))) {
      addError(`invalid task question filename: ${relative(file)}`);
    }
    const content = read(file);
    if (/Overall status:\s*`?open`?/i.test(content) || /Status:\s*`?open`?/i.test(content)) {
      addWarning(`unresolved task question: ${relative(file)}`);
    }
    if (/Resolution:\s*`?pending`?/i.test(content)) {
      addWarning(`pending task question resolution: ${relative(file)}`);
    }
  }

  const todoFiles = [
    ...listFiles(path.join(root, ".codex"), (item) => /TODO\.md$/i.test(item)),
    ...listFiles(path.join(root, "project"), (item) => /TODO\.md$/i.test(item)),
    ...listFiles(path.join(root, "extensions"), (item) => /TODO\.md$/i.test(item)),
  ];
  for (const file of todoFiles) {
    if (/^\s*-\s*\[\s]\s+/m.test(read(file))) {
      addWarning(`open long-term TODO item: ${relative(file)}`);
    }
  }
}

function runQuickValidate(skillFiles) {
  const quickValidate = path.join(
    os.homedir(),
    ".codex",
    "skills",
    ".system",
    "skill-creator",
    "scripts",
    "quick_validate.py"
  );
  if (!fs.existsSync(quickValidate)) {
    addError(`Skill quick validator not found: ${quickValidate}`);
    return;
  }
  for (const skillFile of skillFiles) {
    const skillDirectory = path.dirname(skillFile);
    const result = spawnSync("python", [quickValidate, skillDirectory], {
      cwd: root,
      encoding: "utf8",
      env: { ...process.env, PYTHONUTF8: "1" },
    });
    if (result.status !== 0) {
      addError(
        `quick_validate.py failed for ${relative(skillDirectory)}: ${(result.stderr || result.stdout).trim()}`
      );
    }
  }
}

function main() {
  const skillFiles = listFiles(skillRoot, (file) => path.basename(file) === "SKILL.md");
  if (skillFiles.length === 0) addError("no project Skills found");

  checkSkillInterfaces(skillFiles);
  const skills = getProjectSkills(skillFiles);
  checkDependencyTree(skills);

  const markdownFiles = [
    path.join(root, "AGENTS.md"),
    path.join(root, "AI_AVG_EDITOR_GUIDE.md"),
    migrationPath,
    path.join(root, ".codex", "TODO.md"),
    ...listFiles(skillRoot, (file) => file.endsWith(".md")),
    ...listFiles(questionRoot, (file) => file.endsWith(".md")),
  ].filter((file, index, all) => fs.existsSync(file) && all.indexOf(file) === index);
  checkMarkdownLinks(markdownFiles);
  checkDuplicateReferences();
  checkMigrationAndLegacyDocs();
  checkQuestionsAndTodos();
  runQuickValidate(skillFiles);

  for (const warning of warnings) console.warn(`WARN: ${warning}`);
  for (const error of errors) console.error(`ERROR: ${error}`);
  console.log(
    `Agent/Skill route validation: ${errors.length} error(s), ${warnings.length} warning(s), ${skillFiles.length} Skill(s).`
  );
  if (errors.length > 0) process.exitCode = 1;
}

main();
