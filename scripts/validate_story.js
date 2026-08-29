const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const steps = [
  [process.execPath, ["scripts/validate_story_source.js"]],
  [process.execPath, ["scripts/validate_story_alignment.js"]],
  [process.execPath, ["scripts/validate_avg_layout.js"]],
  [process.execPath, ["scripts/manage_story_ir.js"]],
  [process.execPath, ["scripts/generate_main_story.js", "--check"]],
  [process.execPath, ["scripts/validate_cg_layout.js"]],
  ["python", ["scripts/build_action_cgs.py", "--check"]],
  [process.execPath, ["scripts/test_story_ir_lifecycle.js"]],
  [process.execPath, ["scripts/validate_story_architecture.js", ...process.argv.slice(2)]],
];

for (const [command, args] of steps) {
  const result = spawnSync(command, args, { cwd: root, stdio: "inherit", shell: false });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}

console.log("Story validation passed.");
