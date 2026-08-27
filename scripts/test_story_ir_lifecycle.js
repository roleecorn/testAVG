const assert = require("assert/strict");
const { bundleToFloors, imageDimensionsFromBuffer, normalizePortraitLifecycle, validateBundle, validatePortraitOutputCompat } = require("./story_ir");

const map = Array.from({ length: 13 }, () => Array(17).fill(0));

const pngHeader = Buffer.alloc(24);
Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]).copy(pngHeader, 0);
pngHeader.writeUInt32BE(544, 16);
pngHeader.writeUInt32BE(416, 20);
assert.deepEqual(imageDimensionsFromBuffer(pngHeader), { width: 544, height: 416 });
assert.equal(imageDimensionsFromBuffer(Buffer.from("not an image")), null);

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
  () => validateBundle(bundle([
    { kind: "function.call", function: "function () { core.plugin.completeAkibaEvent('example_1'); }" },
    { kind: "function.call", function: "function () { core.plugin.returnToAkiba(); }" },
  ]), { allowLegacyLifecycle: false }),
  /legacy Akiba lifecycle function.call must use semantic nodes/,
);
assert.throws(
  () => validateBundle(bundle([{ kind: "character.exchange", destination: { floorId: "next", loc: [1, 1], direction: "up" } }]), { allowLegacyLifecycle: false }),
  /character\.exchange is main-story-only/,
);

assert.doesNotThrow(() => validatePortraitOutputCompat({ version: 1, omitCommonFieldsForScenes: ["example_1"] }, new Set(["example_1"])));
assert.throws(
  () => validatePortraitOutputCompat({ version: 1, omitCommonFieldsForScenes: ["example_1", "example_1"] }, new Set(["example_1"])),
  /duplicate scene IDs/,
);
assert.throws(
  () => validatePortraitOutputCompat({ version: 1, omitCommonFieldsForScenes: ["stale_scene"] }, new Set(["example_1"])),
  /unknown scene stale_scene/,
);

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

assert.deepEqual(normalizePortraitLifecycle([
  {
    kind: "dialogue",
    speaker: "東山",
    text: "情緒由 IR 保留",
    portrait: {
      code: 20,
      image: "dongshan_normal.png",
      expression: "normal",
    },
  },
]), [
  {
    kind: "image.show",
    role: "portrait",
    code: 20,
    image: "dongshan_normal.png",
    expression: "normal",
    opacity: 1,
    time: 0,
  },
  {
    kind: "dialogue",
    speaker: "東山",
    text: "情緒由 IR 保留",
    portrait: {
      code: 20,
      image: "dongshan_normal.png",
      expression: "normal",
    },
  },
  { kind: "image.hide", code: 20, time: 0 },
]);

const generatedPortraitFloor = bundleToFloors({
  ...bundle([{
  kind: "dialogue",
  speaker: "東山",
  text: "生成器共通屬性",
  portrait: { code: 20, image: "dongshan_normal.png", expression: "normal" },
  }]),
  source: { kind: "main", files: [{ path: "project/mainStory/example", sha256: "test" }] },
}).find((floor) => floor.floorId === "example_1");
assert.deepEqual(generatedPortraitFloor.eachArrive[1], {
  type: "showImage",
  code: 20,
  image: "dongshan_normal.png",
  expression: "normal",
  loc: ["portraitSpeakerX", "portraitSpeakerY"],
  opacity: 1,
  time: 0,
});

console.log("Story IR lifecycle tests passed.");
