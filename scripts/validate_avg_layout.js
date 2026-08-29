const fs = require("fs");
const path = require("path");
const { bundleToFloors, readBundle, validateGlobalAvgLayout } = require("./story_ir");
const { readMainStoryBundles } = require("./main_story_ir");

const root = path.resolve(__dirname, "..");
const characterIrDir = path.join(root, "project", "story-ir", "character");

function readAllCharacterStoryBundles() {
  return fs.readdirSync(characterIrDir)
    .filter((name) => name.endsWith(".json"))
    .sort((left, right) => left.localeCompare(right, "en", { numeric: true }))
    .map((name) => readBundle(path.join(characterIrDir, name), { allowLegacyLifecycle: true }));
}

function main() {
  const bundles = [
    ...readMainStoryBundles(),
    ...readAllCharacterStoryBundles(),
  ];
  const floors = bundles.flatMap((bundle) => bundleToFloors(bundle, { allowLegacyLifecycle: true }));
  validateGlobalAvgLayout(root, floors);
  console.log(`Validated global AVG layout and preloaded entry backgrounds for ${floors.length} generated floors.`);
}

if (require.main === module) main();

module.exports = { main };
