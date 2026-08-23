const fs = require("fs");
const path = require("path");
const { bundleToFloors, readBundle, validateProjectReferences } = require("./story_ir");

const root = path.resolve(__dirname, "..");
const mainStoryIr = path.join(root, "project", "story-ir", "main", "main-story.json");

function floorFile(floorId) {
  return path.join(root, "project", "floors", `${floorId}.js`);
}

function renderFloor(floor) {
  return `main.floors.${floor.floorId}=\n${JSON.stringify(floor, null, 4)}\n`;
}

function main() {
  const checkOnly = process.argv.includes("--check");
  const unknown = process.argv.slice(2).filter((arg) => arg !== "--check");
  if (unknown.length) throw new Error(`Unknown main-story emitter option: ${unknown.join(", ")}`);
  const bundle = readBundle(mainStoryIr);
  validateProjectReferences(root, bundle);
  const floors = bundleToFloors(bundle);

  for (const floor of floors) {
    const file = floorFile(floor.floorId);
    const output = renderFloor(floor);
    if (checkOnly) {
      if (!fs.existsSync(file) || fs.readFileSync(file, "utf8") !== output) {
        throw new Error(`${floor.floorId}: engine floor is stale; run node scripts/generate_main_story.js`);
      }
    } else {
      fs.writeFileSync(file, output, "utf8");
    }
  }

  console.log(`${checkOnly ? "Validated" : "Emitted"} ${floors.length} main-story floors from Story IR.`);
}

if (require.main === module) main();

module.exports = { floorFile, renderFloor };
