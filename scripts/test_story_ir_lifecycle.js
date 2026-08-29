const assert = require("assert/strict");
const {
  AVG_LAYOUT_RUNTIME_DEFAULTS,
  bundleToFloors,
  imageDimensionsFromBuffer,
  normalizePortraitLifecycle,
  validateAvgLayoutConfig,
  validateBundle,
  validateGeneratedAvgLayout,
  validatePortraitOutputCompat,
} = require("./story_ir");

const map = Array.from({ length: 13 }, () => Array(17).fill(0));

const pngHeader = Buffer.alloc(24);
Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]).copy(pngHeader, 0);
pngHeader.writeUInt32BE(544, 16);
pngHeader.writeUInt32BE(416, 20);
assert.deepEqual(imageDimensionsFromBuffer(pngHeader), { width: 544, height: 416 });
assert.equal(imageDimensionsFromBuffer(Buffer.from("not an image")), null);

assert.doesNotThrow(() => validateAvgLayoutConfig({ ...AVG_LAYOUT_RUNTIME_DEFAULTS }));
assert.throws(
  () => validateAvgLayoutConfig({ ...AVG_LAYOUT_RUNTIME_DEFAULTS, dialogueWidth: 352 }),
  /dialogueWidth: expected 512, got 352/,
);

function bundle(events) {
  return {
    storyIrVersion: 1,
    source: { kind: "character", files: [{ path: "project/story/example.txt", sha256: "test" }] },
    scenes: [{
      id: "example_1",
      floor: {
        floorId: "example_1",
        width: 17,
        height: 13,
        map,
        images: [{ name: "example_bg.png", canvas: "bg", x: 0, y: 0 }],
      },
      events,
    }],
  };
}

assert.doesNotThrow(() => validateBundle(bundle([
  { kind: "akiba.event.complete", eventId: "example_1" },
  { kind: "akiba.return" },
])));
const missingInitialBackground = bundle([
  { kind: "akiba.event.complete", eventId: "example_1" },
  { kind: "akiba.return" },
]);
missingInitialBackground.scenes[0].floor.images = [];
assert.throws(
  () => validateBundle(missingInitialBackground),
  /requires a preloaded canvas:bg background at \(0,0\) before eachArrive/,
);
assert.doesNotThrow(() => validateBundle(missingInitialBackground, { allowMissingInitialBackground: true }));

const effectFloor = bundleToFloors(bundle([
  { kind: "screen.tint", color: [0, 0, 0, 1], time: 220 },
  { kind: "screen.shake", direction: "horizontal", time: 450, speed: 50, power: 8 },
  { kind: "screen.flash", color: [255, 255, 255, 1], time: 450, times: 1 },
  { kind: "screen.reset", time: 260 },
  { kind: "akiba.event.complete", eventId: "example_1" },
  { kind: "akiba.return" },
])).find((floor) => floor.floorId === "example_1");
assert.deepEqual(effectFloor.eachArrive.slice(1, 5), [
  { type: "setCurtain", color: [0, 0, 0, 1], time: 220 },
  { type: "avgShake", direction: "horizontal", time: 450, speed: 50, power: 8 },
  { type: "screenFlash", color: [255, 255, 255, 1], time: 450, times: 1 },
  { type: "setCurtain", time: 260 },
]);
assert.throws(
  () => validateBundle(bundle([
    { kind: "screen.flash", color: [255, 255, 255, 1], time: 451 },
    { kind: "akiba.event.complete", eventId: "example_1" },
    { kind: "akiba.return" },
  ])),
  /screen\.flash\.time must be a positive multiple of 3/,
);

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
assert.throws(
  () => validateBundle(bundle([
    { kind: "layout.set", value: { avg: true, dialogueWidth: 352 } },
    { kind: "akiba.event.complete", eventId: "example_1" },
    { kind: "akiba.return" },
  ])),
  /global AVG geometry is generator-owned and must not be stored in Story IR/,
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
assert.doesNotThrow(() => validateGeneratedAvgLayout([generatedPortraitFloor]));

const generatedWithoutEntryBackground = JSON.parse(JSON.stringify(generatedPortraitFloor));
generatedWithoutEntryBackground.images = [];
assert.throws(
  () => validateGeneratedAvgLayout([generatedWithoutEntryBackground]),
  /requires a preloaded canvas:bg background at \(0,0\) before eachArrive/,
);
assert.doesNotThrow(() => validateGeneratedAvgLayout(
  [generatedWithoutEntryBackground],
  "historical generated AVG floors",
  { allowMissingInitialBackground: true },
));

const malformedGeneratedFloor = JSON.parse(JSON.stringify(generatedPortraitFloor));
malformedGeneratedFloor.eachArrive.find((event) => event && event.type === "setText").dialogueWidth = 352;
assert.throws(
  () => validateGeneratedAvgLayout([malformedGeneratedFloor]),
  /dialogueWidth: global AVG geometry is generator-owned and must not be stored in a setText event/,
);
assert.throws(
  () => validateGeneratedAvgLayout([{
    floorId: "missing_layout",
    images: [{ name: "example_bg.png", canvas: "bg", x: 0, y: 0 }],
    eachArrive: ["普通台詞"],
  }]),
  /missing generated AVG setText event/,
);

console.log("Story IR lifecycle tests passed.");
