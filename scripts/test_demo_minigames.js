const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");

class FakeElement {
  constructor(tagName, width = 960, height = 720) {
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
    this.title = "";
    this.onclick = null;
  }

  appendChild(child) {
    child.parentNode = this;
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

function createEnvironment(filename, width = 960, height = 720) {
  const source = fs.readFileSync(path.join(root, "extensions", "minigames", filename), "utf8");
  const rootElement = new FakeElement("div", 416, 416);
  const body = new FakeElement("body", width, height);
  const windowListeners = new Map();
  const documentListeners = new Map();
  let lockCount = 0;
  let unlockCount = 0;
  const context = {
    window: {
      MotaMiniGames: {},
      innerWidth: width,
      innerHeight: height,
      addEventListener(name, callback) { windowListeners.set(callback, name); },
      removeEventListener(name, callback) { windowListeners.delete(callback); },
    },
    document: {
      body,
      createElement(tagName) { return new FakeElement(tagName, width, height); },
      addEventListener(name, callback) { documentListeners.set(callback, name); },
      removeEventListener(name, callback) { documentListeners.delete(callback); },
    },
    core: {
      status: { lockControl: false },
      dom: { gameDraw: rootElement },
      lockControl() { lockCount++; this.status.lockControl = true; },
      unlockControl() { unlockCount++; this.status.lockControl = false; },
    },
    console,
    Math,
    setInterval,
    clearInterval,
    setTimeout,
    clearTimeout,
  };
  vm.runInNewContext(source, context, { filename });
  return {
    registry: context.window.MotaMiniGames,
    rootElement,
    body,
    windowListeners,
    documentListeners,
    lockCount: () => lockCount,
    unlockCount: () => unlockCount,
  };
}

function expectedPanelSize(width, height, maxWidth, maxHeight) {
  const margin = Math.max(8, Math.min(width, height) * 0.035);
  return {
    width: `${Math.min(Math.max(180, Math.floor(width - margin * 2)), maxWidth)}px`,
    height: `${Math.min(Math.max(180, Math.floor(height - margin * 2)), maxHeight)}px`,
  };
}

function testSlotMountsFullscreenAndCleansUp() {
  const env = createEnvironment("slot777.js", 960, 720);
  let result = null;
  const game = env.registry.slot777.start({ spins: 3 }, (value) => { result = value; });
  const expected = expectedPanelSize(960, 720, 980, 720);
  assert.equal(env.body.children.length, 1);
  assert.equal(env.rootElement.children.length, 0);
  assert.equal(game.panel.style.width, expected.width);
  assert.equal(game.panel.style.height, expected.height);
  assert.equal(game.cells.length, 9);
  assert(fs.existsSync(path.join(root, "project", "images", "minigames", "slot777", "symbols.png")));
  game.destroy({ result: "cancel", reason: "test" });
  assert.equal(result.result, "cancel");
  assert.equal(env.body.children.length, 0);
  assert.equal(env.windowListeners.size, 0);
  assert.equal(env.documentListeners.size, 0);
  assert.equal(env.lockCount(), 1);
  assert.equal(env.unlockCount(), 1);
}

function testTicTacToeMountsFullscreenAndCanWin() {
  const env = createEnvironment("ticTacToe.js", 960, 720);
  let result = null;
  const game = env.registry.ticTacToe.start({}, (value) => { result = value; });
  const expectedSize = expectedPanelSize(720, 720, 760, 760).width;
  assert.equal(env.body.children.length, 1);
  assert.equal(env.rootElement.children.length, 0);
  assert.equal(game.panel.style.width, expectedSize);
  assert.equal(game.panel.style.height, expectedSize);
  game.play(0);
  game.play(3);
  game.play(1);
  game.play(4);
  game.play(2);
  assert.equal(game.result.result, "win");
  assert.equal(game.result.winner, "X");
  game.destroy(game.result);
  assert.equal(result.result, "win");
  assert.equal(env.body.children.length, 0);
  assert.equal(env.windowListeners.size, 0);
  assert.equal(env.documentListeners.size, 0);
  assert.equal(env.lockCount(), 1);
  assert.equal(env.unlockCount(), 1);
}

testSlotMountsFullscreenAndCleansUp();
testTicTacToeMountsFullscreenAndCanWin();

console.log("Demo minigame tests passed (fullscreen layout, assets, controls, cleanup).");
