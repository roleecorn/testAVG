const assert = require("assert/strict");
const { validateBundle } = require("./story_ir");

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

console.log("Story IR Akiba lifecycle tests passed.");
