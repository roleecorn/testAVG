const fs = require("fs");
const path = require("path");
const {
  readBundle,
  readImageDimensions,
} = require("./story_ir");
const { characterStories, irFile } = require("./manage_story_ir");

const root = path.resolve(__dirname, "..");
const CG_CODES = new Set([25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]);
const CG_PANEL = Object.freeze({ x: 112, y: 50, width: 320, height: 220 });
const CG_RUNTIME_SIZE = Object.freeze({ width: 416, height: 286 });
const CG_ASPECT_WIDTH = 16;
const CG_ASPECT_HEIGHT = 11;

function isCgNode(node) {
  return node && node.kind === "image.show" && (node.role === "cg" || CG_CODES.has(node.code));
}

function expectedCenteredCrop(width, height) {
  if (!Number.isInteger(width) || !Number.isInteger(height) || width <= 0 || height <= 0) return null;
  const sourceAspect = width / height;
  const targetAspect = CG_ASPECT_WIDTH / CG_ASPECT_HEIGHT;
  if (sourceAspect > targetAspect) {
    const cropWidth = Math.floor(height * targetAspect);
    return [Math.floor((width - cropWidth) / 2), 0, cropWidth, height];
  }
  const cropHeight = Math.floor(width / targetAspect);
  return [0, Math.floor((height - cropHeight) / 2), width, cropHeight];
}

function sameRect(left, right) {
  return Array.isArray(left) && Array.isArray(right) && left.length === right.length
    && left.every((value, index) => value === right[index]);
}

function formatRect(rect) {
  return `[${rect.join(", ")}]`;
}

function analyzeCgNode(node, dimensions, location) {
  const errors = [];
  const warnings = [];
  const image = node.image || "<missing image>";

  if (!dimensions) {
    errors.push(`${location}: ${image}: unable to read image dimensions`);
    return { errors, warnings };
  }

  if (dimensions.width !== CG_RUNTIME_SIZE.width || dimensions.height !== CG_RUNTIME_SIZE.height) {
    errors.push(`${location}: ${image}: runtime CG image must be ${CG_RUNTIME_SIZE.width}x${CG_RUNTIME_SIZE.height}, got ${dimensions.width}x${dimensions.height}`);
  }

  if (!Array.isArray(node.loc) || node.loc.length !== 4 || node.loc.some((value) => !Number.isFinite(value))) {
    errors.push(`${location}: ${image}: loc must be a numeric [x, y, width, height] array`);
  } else if (!sameRect(node.loc, [CG_PANEL.x, CG_PANEL.y, CG_PANEL.width, CG_PANEL.height])) {
    warnings.push(`${location}: ${image}: non-standard CG panel loc ${formatRect(node.loc)}; canonical panel is ${formatRect([CG_PANEL.x, CG_PANEL.y, CG_PANEL.width, CG_PANEL.height])}`);
  }

  if (node.sloc == null) {
    errors.push(`${location}: ${image}: sloc is required for every CG and must cover the runtime canvas`);
  }
  const sloc = node.sloc;
  if (!Array.isArray(sloc) || sloc.length !== 4 || sloc.some((value) => !Number.isFinite(value))) {
    errors.push(`${location}: ${image}: sloc must be a numeric [x, y, width, height] array`);
    return { errors, warnings };
  }

  const [sx, sy, sw, sh] = sloc;
  if (sw <= 0 || sh <= 0 || sx < 0 || sy < 0 || sx + sw > dimensions.width || sy + sh > dimensions.height) {
    errors.push(`${location}: ${image}: sloc ${formatRect(sloc)} is outside source ${dimensions.width}x${dimensions.height}`);
    return { errors, warnings };
  }
  if (!sameRect(sloc, [0, 0, CG_RUNTIME_SIZE.width, CG_RUNTIME_SIZE.height])) {
    errors.push(`${location}: ${image}: sloc must be the full ${CG_RUNTIME_SIZE.width}x${CG_RUNTIME_SIZE.height} runtime canvas, got ${formatRect(sloc)}`);
  }

  return { errors, warnings };
}

function bundleFiles() {
  const mainDir = path.join(root, "project", "story-ir", "main");
  const mainFiles = fs.readdirSync(mainDir)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .map((file) => path.join(mainDir, file));
  return mainFiles.concat(characterStories.map(irFile));
}

function walkEventTree(events, location, visit) {
  if (!Array.isArray(events)) return;
  events.forEach((node, nodeIndex) => {
    const nodeLocation = `${location}.events[${nodeIndex}]`;
    visit(node, nodeLocation);
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node.events)) {
      walkEventTree(node.events, nodeLocation, visit);
    }
    if (Array.isArray(node.options)) {
      node.options.forEach((option, optionIndex) => {
        if (option && Array.isArray(option.events)) {
          walkEventTree(option.events, `${nodeLocation}.options[${optionIndex}]`, visit);
        }
      });
    }
  });
}

function collectDiagnostics() {
  const errors = [];
  const warnings = [];
  let cgCount = 0;

  for (const file of bundleFiles()) {
    const relativeFile = path.relative(root, file).replaceAll(path.sep, "/");
    let bundle;
    try {
      bundle = readBundle(file);
    } catch (error) {
      errors.push(`${relativeFile}: unable to read Story IR: ${error.message}`);
      continue;
    }
    bundle.scenes.forEach((scene, sceneIndex) => {
      walkEventTree(scene.events, `${relativeFile}: scenes[${sceneIndex}](${scene.id})`, (node, location) => {
        if (!isCgNode(node)) return;
        cgCount += 1;
        const imageFile = path.join(root, "project", "images", node.image || "");
        if (!node.image || !fs.existsSync(imageFile)) {
          errors.push(`${location}: missing CG image ${node.image || "<missing image>"}`);
          return;
        }
        let dimensions;
        try {
          dimensions = readImageDimensions(imageFile);
        } catch (error) {
          errors.push(`${location}: ${node.image}: unable to read image: ${error.message}`);
          return;
        }
        const result = analyzeCgNode(node, dimensions, location);
        errors.push(...result.errors);
        warnings.push(...result.warnings);
      });
    });
  }

  return { cgCount, errors, warnings };
}

function main() {
  const result = collectDiagnostics();
  console.log(`CG layout diagnostic scanned ${result.cgCount} CG events.`);
  for (const message of result.errors) console.error(`ERROR ${message}`);
  for (const message of result.warnings) console.warn(`WARN ${message}`);
  console.log(`CG layout diagnostic found ${result.errors.length} errors and ${result.warnings.length} warnings.`);
  if (result.errors.length) process.exit(1);
}

if (require.main === module) main();

module.exports = {
  CG_PANEL,
  analyzeCgNode,
  collectDiagnostics,
  expectedCenteredCrop,
  isCgNode,
};
