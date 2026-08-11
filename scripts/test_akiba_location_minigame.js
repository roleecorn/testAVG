const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "extensions", "minigames", "akibaLocation.js"), "utf8");
const context = {
  window: {
    MotaMiniGames: {},
    addEventListener() {},
    removeEventListener() {},
  },
  console,
  Math,
  JSON,
  setInterval,
  clearInterval,
  setTimeout,
  clearTimeout,
};

vm.runInNewContext(source, context, { filename: "akibaLocation.js" });
const game = context.window.MotaMiniGames.akibaLocation;
assert(game, "akibaLocation registry missing");
assert.equal(typeof game.start, "function");
assert.equal(typeof game.getConfig, "function");

const mapping = JSON.parse(fs.readFileSync(path.join(root, "project", "location-mappings.json"), "utf8"));
const expectedLocations = mapping.floors.Akiba.locations
  .map((location) => location.id)
  .filter((locationId) => locationId !== "idle_clock" && locationId !== "game_center")
  .sort();
const actualLocations = game.listLocationIds().slice().sort();
assert.deepEqual(actualLocations, expectedLocations);

const validTypes = new Set(["hunt", "sort", "memory", "sequence", "timing", "balance", "tileMatch"]);
for (const locationId of actualLocations) {
  const config = game.getConfig(locationId);
  assert(config.title, `${locationId} missing title`);
  assert(validTypes.has(config.type), `${locationId} has invalid type ${config.type}`);
  assert(Number.isFinite(config.seconds) && config.seconds > 0, `${locationId} missing finite endpoint`);
  assert(config.instruction, `${locationId} missing instructions`);
}

const firstConfig = game.getConfig(actualLocations[0]);
firstConfig.title = "mutated";
assert.notEqual(game.getConfig(actualLocations[0]).title, "mutated", "getConfig must return a copy");
assert.equal(game.getConfig("idle_clock"), null);
assert.equal(game.getConfig("missing_location"), null);

class FakeElement {
  constructor(tagName, width = 416, height = 416) {
    this.tagName = String(tagName || "div").toUpperCase();
    this.clientWidth = width;
    this.clientHeight = height;
    this.children = [];
    this.parentNode = null;
    this.style = { cssText: "" };
    this.dataset = {};
    this.attributes = {};
    this.disabled = false;
    this.textContent = "";
    this.onclick = null;
    this.ondragstart = null;
    this.ondragover = null;
    this.ondrop = null;
  }

  appendChild(child) {
    child.parentNode = this;
    if (child.style && /width:100%/.test(child.style.cssText || "")) child.clientWidth = this.clientWidth;
    if (child.style && /height:100%/.test(child.style.cssText || "")) child.clientHeight = this.clientHeight;
    this.children.push(child);
    return child;
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index >= 0) this.children.splice(index, 1);
    child.parentNode = null;
    return child;
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value);
  }

  querySelectorAll(selector) {
    const matches = [];
    const wanted = String(selector).toUpperCase();
    function visit(node) {
      for (const child of node.children) {
        if (child.tagName === wanted) matches.push(child);
        visit(child);
      }
    }
    visit(this);
    return matches;
  }

  set innerHTML(value) {
    this.children.forEach((child) => { child.parentNode = null; });
    this.children = [];
    this._innerHTML = String(value);
  }

  get innerHTML() {
    return this._innerHTML || "";
  }
}

function installFakeBrowser(width, height) {
  const rootElement = new FakeElement("div", width, height);
  const body = new FakeElement("body", width, height);
  const listeners = new Map();
  let lockCount = 0;
  let unlockCount = 0;
  context.document = {
    body,
    createElement(tagName) {
      return new FakeElement(tagName, width, height);
    },
  };
  context.window.addEventListener = (name, callback) => listeners.set(callback, name);
  context.window.removeEventListener = (name, callback) => listeners.delete(callback);
  context.core = {
    status: { lockControl: false },
    dom: { gameDraw: rootElement },
    lockControl() {
      lockCount++;
      this.status.lockControl = true;
    },
    unlockControl() {
      unlockCount++;
      this.status.lockControl = false;
    },
  };
  return {
    rootElement,
    listeners,
    lockCount: () => lockCount,
    unlockCount: () => unlockCount,
  };
}

function testEveryModeStartsAndCleansUp(width, height) {
  const fake = installFakeBrowser(width, height);
  for (const locationId of actualLocations) {
    let callbackCount = 0;
    let finalResult = null;
    const instance = game.start({ locationId }, (result) => {
      callbackCount++;
      finalResult = result;
    });
    assert.equal(fake.rootElement.children.length, 1, `${locationId} did not mount at ${width}x${height}`);
    const overlay = fake.rootElement.children[0];
    const panel = overlay.children[0];
    assert.equal(panel.style.width, `${Math.min(416, width, height)}px`);
    assert(panel.querySelectorAll("BUTTON").length > 0, `${locationId} has no pointer controls`);
    instance.destroy({ result: "cancel", reason: "test", score: 0, locationId });
    assert.equal(fake.rootElement.children.length, 0, `${locationId} overlay leaked`);
    assert.equal(callbackCount, 1, `${locationId} callback count mismatch`);
    assert.equal(finalResult.result, "cancel");
    assert.equal(fake.listeners.size, 0, `${locationId} resize listener leaked`);
  }
  assert.equal(fake.lockCount(), actualLocations.length);
  assert.equal(fake.unlockCount(), actualLocations.length);
}

function testHuntCanReachWinAndReturn() {
  const fake = installFakeBrowser(416, 416);
  let finalResult = null;
  const instance = game.start({ locationId: "park" }, (result) => { finalResult = result; });
  const targetButtons = instance.panel.querySelectorAll("BUTTON").filter((button) => button.dataset.target === "1");
  assert.equal(targetButtons.length, game.getConfig("park").targetCount);
  targetButtons.forEach((button) => button.onclick());
  assert.equal(instance.result.result, "win");
  assert.equal(fake.rootElement.children.length, 1, "result should remain visible until return");
  const returnButtons = instance.footer.querySelectorAll("BUTTON");
  assert.equal(returnButtons.length, 1);
  returnButtons[0].onclick();
  assert.equal(finalResult.result, "win");
  assert.equal(fake.rootElement.children.length, 0);
}

function testMahjongBoardIsSolvable() {
  const fake = installFakeBrowser(416, 416);
  let finalResult = null;
  const instance = game.start({ locationId: "mahjong_parlor" }, (result) => { finalResult = result; });
  for (let rowIndex = 0; rowIndex < instance.tileRows.length; rowIndex++) {
    for (let pair = 0; pair < 3; pair++) {
      const row = instance.tileRows[rowIndex];
      const available = row.map((tile, index) => tile.removed ? -1 : index).filter((index) => index >= 0);
      const left = available[0];
      const right = available[available.length - 1];
      assert.equal(row[left].value, row[right].value);
      instance.chooseTile(rowIndex, left);
      instance.chooseTile(rowIndex, right);
    }
  }
  assert.equal(instance.result.result, "win");
  instance.destroy(instance.result);
  assert.equal(finalResult.result, "win");
  assert.equal(fake.rootElement.children.length, 0);
}

testEveryModeStartsAndCleansUp(416, 416);
testEveryModeStartsAndCleansUp(208, 416);
testHuntCanReachWinAndReturn();
testMahjongBoardIsSolvable();

console.log(`Akiba location minigame configs passed (${actualLocations.length} custom locations + slot777).`);
