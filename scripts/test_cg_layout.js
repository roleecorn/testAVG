const assert = require("assert/strict");
const {
  CG_PANEL,
  analyzeCgNode,
  expectedCenteredCrop,
} = require("./validate_cg_layout");

assert.deepEqual(expectedCenteredCrop(1248, 848), [7, 0, 1233, 848]);
assert.deepEqual(expectedCenteredCrop(416, 416), [0, 65, 416, 286]);

const validFullImage = analyzeCgNode(
  { kind: "image.show", code: 30, image: "example.png", sloc: [0, 0, 416, 286], loc: [CG_PANEL.x, CG_PANEL.y, CG_PANEL.width, CG_PANEL.height] },
  { width: 416, height: 286 },
  "valid",
);
assert.deepEqual(validFullImage.errors, []);
assert.deepEqual(validFullImage.warnings, []);

const missingSloc = analyzeCgNode(
  { kind: "image.show", code: 30, image: "example.png", loc: [112, 50, 320, 220] },
  { width: 416, height: 286 },
  "missing-sloc",
);
assert.equal(missingSloc.errors.length, 2);
assert.match(missingSloc.errors[0], /sloc is required/);

const wrongRuntimeSize = analyzeCgNode(
  { kind: "image.show", code: 30, image: "example.png", sloc: [0, 0, 416, 286], loc: [112, 50, 320, 220] },
  { width: 1248, height: 848 },
  "wrong-size",
);
assert.match(wrongRuntimeSize.errors[0], /runtime CG image must be 416x286/);

const invalidCrop = analyzeCgNode(
  { kind: "image.show", code: 30, image: "example.png", sloc: [0, 0, 417, 286], loc: [112, 50, 320, 220] },
  { width: 416, height: 286 },
  "invalid",
);
assert.equal(invalidCrop.errors.length, 1);
assert.match(invalidCrop.errors[0], /outside source 416x286/);

console.log("CG layout diagnostic tests passed.");
