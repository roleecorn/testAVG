const assert = require("assert/strict");
const { normalizePortraitLifecycle, validateBundle } = require("./story_ir");

const map = Array.from({ length: 13 }, () => Array(17).fill(0));

function bundle(events) {
  return {
    storyIrVersion: 1,
    source: { kind: "character", files: [{ path: "project/story/example.txt", sha256: "test" }] },
    scenes: [{ id: "example_1", floor: { floorId: "example_1", width: 17, height: 13, map }, events }],
  };
}

assert.doesNotThrow(() => validateBundle(bundle([
  { kind: "akiba.event.complete", eventId: "example_1" },
  { kind: "akiba.return" },
])));

assert.doesNotThrow(() => validateBundle(bundle([
  { kind: "function.call", function: "function () { core.plugin.completeAkibaEvent('example_1'); }" },
  { kind: "function.call", function: "function () { core.plugin.returnToAkiba(); }" },
])));

assert.throws(
  () => validateBundle(bundle([{ kind: "akiba.event.complete", eventId: "example_1" }])),
  /completeAkibaEvent must be followed by returnToAkiba/,
);
assert.throws(
  () => validateBundle(bundle([
    { kind: "akiba.event.complete", eventId: "wrong" },
    { kind: "akiba.return" },
  ])),
  /completion id wrong must match scene id example_1/,
);
assert.throws(
  () => validateBundle(bundle([{
    kind: "choice",
    prompt: "branch",
    options: [
      { text: "valid", events: [{ kind: "akiba.event.complete", eventId: "example_1" }, { kind: "akiba.return" }] },
      { text: "missing return", events: [{ kind: "akiba.event.complete", eventId: "example_1" }] },
    ],
  }])),
  /completeAkibaEvent must be followed by returnToAkiba/,
);

assert.deepEqual(normalizePortraitLifecycle([
  { kind: "image.hide", code: 20, time: 0 },
  { kind: "image.show", role: "portrait", code: 20, image: "dongshan_normal.png" },
  { kind: "dialogue", speaker: "東山", text: "測試" },
  { kind: "image.hide", code: 20, time: 0 },
]), [
  { kind: "image.show", role: "portrait", code: 20, image: "dongshan_normal.png" },
  { kind: "dialogue", speaker: "東山", text: "測試" },
  { kind: "image.hide", code: 20, time: 0 },
]);

assert.deepEqual(normalizePortraitLifecycle([{
  kind: "choice",
  prompt: "測試分歧",
  options: [
    {
      text: "有立繪",
      events: [
        { kind: "image.show", role: "portrait", code: 20, image: "dongshan_normal.png" },
        { kind: "dialogue", speaker: "東山", text: "分歧內" },
      ],
    },
    { text: "無立繪", events: [{ kind: "dialogue", speaker: "其他人", text: "另一分歧" }] },
  ],
}]), [{
  kind: "choice",
  prompt: "測試分歧",
  options: [
    {
      text: "有立繪",
      events: [
        { kind: "image.show", role: "portrait", code: 20, image: "dongshan_normal.png" },
        { kind: "dialogue", speaker: "東山", text: "分歧內" },
        { kind: "image.hide", code: 20, time: 0 },
      ],
    },
    { text: "無立繪", events: [{ kind: "dialogue", speaker: "其他人", text: "另一分歧" }] },
  ],
}]);

console.log("Story IR lifecycle tests passed.");
