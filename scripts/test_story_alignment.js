const assert = require("assert/strict");
const { buildIrTrace, buildSourceTrace, compareAnchors, textSignature } = require("./validate_story_alignment");

const data = { bgms: ["BGMYume.mp3", "BGMWitch.mp3"], nameMap: {} };
const sourceLines = [
  "1-1",
  "【BGM：BGMYume】",
  "【背景：泛用街道(日)】",
  "梗平：開場",
  "【BGM：BGMWitch】",
  "梗平：危機",
];
const source = buildSourceTrace(sourceLines, 1, data, new Map());
const correct = buildIrTrace({ scenes: [{ id: "scene_1", events: [
  { kind: "bgm.play", name: "BGMYume.mp3" },
  { kind: "background.show", code: 1, image: "CH1_L3.png" },
  { kind: "dialogue", speaker: "梗平", text: "開場" },
  { kind: "bgm.play", name: "BGMWitch.mp3" },
  { kind: "dialogue", speaker: "梗平", text: "危機" },
] }] }, 1, data, new Map());
assert.deepEqual(compareAnchors(source, correct, "test"), []);
assert.equal(textSignature(source), textSignature(correct));

const shifted = buildIrTrace({ scenes: [{ id: "scene_1", events: [
  { kind: "bgm.play", name: "BGMWitch.mp3" },
  { kind: "bgm.play", name: "BGMYume.mp3" },
  { kind: "background.show", code: 1, image: "CH1_L3.png" },
  { kind: "dialogue", speaker: "梗平", text: "開場" },
  { kind: "dialogue", speaker: "梗平", text: "危機" },
] }] }, 1, data, new Map());
assert.match(compareAnchors(source, shifted, "test").join("\n"), /source line 5|shifted|missing/);

const driftedText = buildIrTrace({ scenes: [{ id: "scene_1", events: [
  { kind: "bgm.play", name: "BGMYume.mp3" },
  { kind: "background.show", code: 1, image: "CH1_L3.png" },
  { kind: "dialogue", speaker: "梗平", text: "開場被改寫" },
  { kind: "bgm.play", name: "BGMWitch.mp3" },
  { kind: "dialogue", speaker: "梗平", text: "危機" },
] }] }, 1, data, new Map());
assert.notEqual(textSignature(source), textSignature(driftedText));

const exchangeSource = buildSourceTrace([
  "1-1",
  "梗平：交流前",
  "【人物交流時間】",
  "【BGM：BGMRakisuta】",
  "梗平：交流後",
], 1, { bgms: ["BGMRakisuta.mp3"], nameMap: {} }, new Map());
const exchangeCorrect = buildIrTrace({ scenes: [
  { id: "scene_before", events: [
    { kind: "dialogue", speaker: "梗平", text: "交流前" },
    { kind: "character.exchange", destination: { floorId: "scene_after", loc: [6, 10], direction: "up" } },
  ] },
  { id: "scene_after", events: [
    { kind: "bgm.play", name: "BGMRakisuta.mp3" },
    { kind: "dialogue", speaker: "梗平", text: "交流後" },
  ] },
] }, 1, { bgms: ["BGMRakisuta.mp3"], nameMap: {} }, new Map());
assert.deepEqual(compareAnchors(exchangeSource, exchangeCorrect, "exchange"), []);

const exchangeShifted = buildIrTrace({ scenes: [{ id: "scene_before", events: [
  { kind: "bgm.play", name: "BGMRakisuta.mp3" },
  { kind: "dialogue", speaker: "梗平", text: "交流前" },
  { kind: "character.exchange", destination: { floorId: "scene_after", loc: [6, 10], direction: "up" } },
  { kind: "dialogue", speaker: "梗平", text: "交流後" },
] }] }, 1, { bgms: ["BGMRakisuta.mp3"], nameMap: {} }, new Map());
assert.match(compareAnchors(exchangeSource, exchangeShifted, "exchange").join("\n"), /source line 4|shifted|missing/);

console.log("Story alignment tests passed.");
