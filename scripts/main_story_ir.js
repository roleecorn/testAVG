const fs = require("fs");
const path = require("path");
const { readBundle, validateBundle } = require("./story_ir");

const root = path.resolve(__dirname, "..");
const mainStoryIrDir = path.join(root, "project", "story-ir", "main");
const mainStoryBonusIrDir = path.join(mainStoryIrDir, "bonus");
const MAIN_CHAPTERS = Object.freeze([1, 2, 3, 4, 5, 6, 7]);

function mainStoryIrFile(chapter) {
  if (!MAIN_CHAPTERS.includes(chapter)) throw new Error(`Unknown main-story chapter: ${chapter}`);
  return path.join(mainStoryIrDir, `CH${chapter}.json`);
}

function mainStoryIrFiles() {
  const expected = MAIN_CHAPTERS.map(mainStoryIrFile);
  const actual = fs.readdirSync(mainStoryIrDir)
    .filter((name) => name.endsWith(".json"))
    .map((name) => path.join(mainStoryIrDir, name))
    .sort((left, right) => left.localeCompare(right, "en", { numeric: true }));
  if (actual.length !== expected.length || actual.some((file, index) => file !== expected[index])) {
    throw new Error("Main-story Story IR must contain exactly CH1.json through CH7.json");
  }
  return expected;
}

function mainStoryBonusIrFiles() {
  if (!fs.existsSync(mainStoryBonusIrDir)) return [];
  const actual = fs.readdirSync(mainStoryBonusIrDir)
    .filter((name) => name.endsWith(".json"))
    .map((name) => path.join(mainStoryBonusIrDir, name))
    .sort((left, right) => left.localeCompare(right, "en", { numeric: true }));
  if (actual.some((file) => path.basename(file) !== "CH8.json")) {
    throw new Error("Main-story bonus Story IR may only contain CH8.json");
  }
  return actual;
}

function mergeMainStoryBundles(bundles) {
  if (!Array.isArray(bundles) || !bundles.length) throw new Error("Main-story Story IR requires at least one chapter bundle");
  const first = stripCommonFields(bundles[0]);
  const scenes = [];
  const sceneIds = new Set();
  for (const [bundleIndex, bundle] of bundles.entries()) {
    validateBundle(bundle);
    if (bundle.source.kind !== "main") throw new Error(`Main-story bundle ${bundleIndex} must have source.kind main`);
    for (const scene of stripCommonFields(bundle).scenes) {
      if (sceneIds.has(scene.id)) throw new Error(`Duplicate main-story scene id: ${scene.id}`);
      sceneIds.add(scene.id);
      scenes.push(scene);
    }
  }
  return validateBundle({
    ...first,
    source: {
      ...first.source,
      files: bundles.flatMap((bundle) => bundle.source.files),
    },
    scenes,
  });
}

function stripCommonFields(bundle) {
  const { presentation, ...withoutPresentation } = bundle;
  return {
    ...withoutPresentation,
    scenes: withoutPresentation.scenes.map((scene) => {
      const { map, ...floor } = scene.floor;
      return { ...scene, floor };
    }),
  };
}

function readMainStoryBundles() {
  return mainStoryIrFiles().map((file) => readBundle(file));
}

function readMainStoryBundle() {
  return mergeMainStoryBundles(readMainStoryBundles());
}

function readMainStoryBonusBundles() {
  return mainStoryBonusIrFiles().map((file) => readBundle(file));
}

module.exports = {
  MAIN_CHAPTERS,
  mainStoryIrDir,
  mainStoryBonusIrDir,
  mainStoryIrFile,
  mainStoryIrFiles,
  mainStoryBonusIrFiles,
  mergeMainStoryBundles,
  readMainStoryBundle,
  readMainStoryBundles,
  readMainStoryBonusBundles,
  stripCommonFields,
};
