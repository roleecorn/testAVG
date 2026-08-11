const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "extensions", "minigames", "akibaFlapper.js"), "utf8");

function fakeContext2d() {
  const context = {};
  for (const method of ["clearRect", "fillRect", "beginPath", "moveTo", "lineTo", "stroke", "arc", "fill", "closePath", "save", "restore", "translate", "rotate", "fillText"]) {
    context[method] = function () {};
  }
  return context;
}

class FakeElement {
  constructor(tagName, width = 416, height = 416) {
    this.tagName = String(tagName || "div").toUpperCase();
    this.clientWidth = width;
    this.clientHeight = height;
    this.children = [];
    this.parentNode = null;
    this.style = { cssText: "" };
    this.attributes = {};
    this.listeners = new Map();
    this.textContent = "";
    this.onclick = null;
    this.width = width;
    this.height = height;
  }

  appendChild(child) {
    child.parentNode = this;
    if (/width:100%/.test(child.style.cssText || "")) child.clientWidth = this.clientWidth;
    if (/height:100%/.test(child.style.cssText || "")) child.clientHeight = this.clientHeight;
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

  addEventListener(name, callback) {
    this.listeners.set(callback, name);
  }

  removeEventListener(name, callback) {
    this.listeners.delete(callback);
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

  getContext() {
    return fakeContext2d();
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

function createEnvironment(width, height) {
  const rootElement = new FakeElement("div", width, height);
  const body = new FakeElement("body", width, height);
  const windowListeners = new Map();
  const documentListeners = new Map();
  const animationFrames = new Map();
  let nextFrameId = 1;
  let lockCount = 0;
  let unlockCount = 0;

  const context = {
    window: {
      MotaMiniGames: {},
      addEventListener(name, callback) { windowListeners.set(callback, name); },
      removeEventListener(name, callback) { windowListeners.delete(callback); },
      requestAnimationFrame(callback) {
        const id = nextFrameId++;
        animationFrames.set(id, callback);
        return id;
      },
      cancelAnimationFrame(id) { animationFrames.delete(id); },
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
    Date,
  };
  vm.runInNewContext(source, context, { filename: "akibaFlapper.js" });
  return {
    game: context.window.MotaMiniGames.akibaFlapper,
    rootElement,
    windowListeners,
    documentListeners,
    animationFrames,
    lockCount: () => lockCount,
    unlockCount: () => unlockCount,
  };
}

function testStartsAndCleansUp(width, height) {
  const env = createEnvironment(width, height);
  let result = null;
  const instance = env.game.start({ targetGates: 8, seconds: 45 }, (value) => { result = value; });
  assert.equal(env.rootElement.children.length, 1);
  assert.equal(instance.panel.style.width, `${Math.min(416, width, height)}px`);
  assert(instance.panel.querySelectorAll("BUTTON").length >= 2, "pointer controls missing");
  assert.equal(instance.canvas.listeners.size, 1, "canvas pointer listener missing");
  instance.destroy({ result: "cancel", reason: "test", score: 0 });
  assert.equal(result.result, "cancel");
  assert.equal(env.rootElement.children.length, 0);
  assert.equal(env.windowListeners.size, 0);
  assert.equal(env.documentListeners.size, 0);
  assert.equal(instance.canvas.listeners.size, 0);
  assert.equal(env.animationFrames.size, 0);
  assert.equal(env.lockCount(), 1);
  assert.equal(env.unlockCount(), 1);
}

function testEightGatesReachWinAndReturn() {
  const env = createEnvironment(416, 416);
  let result = null;
  const instance = env.game.start({ targetGates: 8, seconds: 45 }, (value) => { result = value; });
  instance.flap();
  instance.passedGates = 7;
  instance.birdY = 130;
  instance.birdVelocity = 0;
  instance.gates = [{ x: instance.birdX - instance.gateWidth - instance.birdRadius - 1, gapY: 130, passed: false }];
  instance.step(0);
  assert.equal(instance.result.result, "win");
  assert.equal(instance.result.gates, 8);
  assert.equal(env.rootElement.children.length, 1, "result must remain until return");
  const returnButtons = instance.footer.querySelectorAll("BUTTON");
  assert.equal(returnButtons.length, 1);
  returnButtons[0].onclick();
  assert.equal(result.result, "win");
  assert.equal(env.rootElement.children.length, 0);
}

function testBoundaryIsImmediateLoss() {
  const env = createEnvironment(416, 416);
  let result = null;
  const instance = env.game.start({}, (value) => { result = value; });
  instance.flap();
  instance.birdY = 1;
  instance.step(0);
  assert.equal(instance.result.result, "lose");
  assert.equal(instance.result.reason, "boundary");
  instance.destroy(instance.result);
  assert.equal(result.result, "lose");
  assert.equal(env.rootElement.children.length, 0);
}

function testGateCollisionIsImmediateLoss() {
  const env = createEnvironment(416, 416);
  const instance = env.game.start({}, function () {});
  instance.flap();
  instance.birdY = 60;
  instance.birdVelocity = 0;
  instance.gates = [{ x: instance.birdX - 10, gapY: 190, passed: false }];
  instance.step(0);
  assert.equal(instance.result.result, "lose");
  assert.equal(instance.result.reason, "collision");
  instance.destroy(instance.result);
}

function testTimeoutIsFiniteLoss() {
  const env = createEnvironment(416, 416);
  const instance = env.game.start({ seconds: 45 }, function () {});
  instance.flap();
  instance.birdY = 130;
  instance.birdVelocity = 0;
  instance.elapsedMs = 45000;
  instance.step(0);
  assert.equal(instance.result.result, "lose");
  assert.equal(instance.result.reason, "timeout");
  instance.destroy(instance.result);
}

testStartsAndCleansUp(416, 416);
testStartsAndCleansUp(208, 416);
testEightGatesReachWinAndReturn();
testBoundaryIsImmediateLoss();
testGateCollisionIsImmediateLoss();
testTimeoutIsFiniteLoss();

console.log("Akiba flapper minigame tests passed (responsive, cancel, win, collision, boundary, timeout, cleanup).");
