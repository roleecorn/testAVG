const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "extensions", "minigames", "shootingRange.js"), "utf8");

function fakeContext2d() {
  const context = {};
  for (const method of [
    "clearRect", "fillRect", "beginPath", "arc", "fill", "stroke", "moveTo", "lineTo", "fillText",
  ]) context[method] = function () {};
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

  getBoundingClientRect() {
    return { left: 0, top: 0, width: this.width, height: this.height };
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
  const stableMath = Object.create(Math);
  stableMath.random = () => 0.5;
  const context = {
    window: {
      MotaMiniGames: {},
      innerWidth: width,
      innerHeight: height,
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
    Math: stableMath,
    Date,
  };
  vm.runInNewContext(source, context, { filename: "shootingRange.js" });
  return {
    game: context.window.MotaMiniGames.shootingRange,
    rootElement,
    body,
    windowListeners,
    documentListeners,
    animationFrames,
    lockCount: () => lockCount,
    unlockCount: () => unlockCount,
  };
}

function expectedPanelSize(width, height) {
  const margin = Math.max(8, Math.min(width, height) * 0.035);
  return {
    width: `${Math.min(Math.max(180, Math.floor(width - margin * 2)), 980)}px`,
    height: `${Math.min(Math.max(180, Math.floor(height - margin * 2)), 720)}px`,
  };
}

function advance(instance, milliseconds) {
  let remaining = milliseconds;
  while (remaining > 0) {
    const chunk = Math.min(250, remaining);
    instance.step(chunk);
    remaining -= chunk;
  }
}

function raiseNext(instance, delay = 900) {
  advance(instance, delay);
  assert(instance.activeTarget, "a target should be raised");
  return instance.activeTarget;
}

function hitActive(instance) {
  const geometry = instance.getTargetGeometry(instance.activeTarget);
  const result = instance.shootAt(geometry.x, geometry.y);
  assert.equal(result.fired, true);
  assert.equal(result.hit, true);
}

function testStartsResponsivelyAndCleansUp(width, height) {
  const env = createEnvironment(width, height);
  let result = null;
  const instance = env.game.start({}, (value) => { result = value; });
  const expected = expectedPanelSize(width, height);
  assert.equal(env.body.children.length, 1);
  assert.equal(env.rootElement.children.length, 0);
  assert.equal(instance.panel.style.width, expected.width);
  assert.equal(instance.panel.style.height, expected.height);
  assert.equal(instance.targets.filter((target) => target.row === "front").length, 4);
  assert.equal(instance.targets.filter((target) => target.row === "back").length, 3);
  assert(instance.footer.querySelectorAll("BUTTON").length >= 2, "pointer controls missing");
  assert.equal(instance.canvas.listeners.size, 1, "canvas pointer listener missing");
  assert.equal(env.animationFrames.size, 1, "animation frame missing");
  instance.destroy({ result: "cancel", reason: "test", score: 0 });
  assert.equal(result.result, "cancel");
  assert.equal(env.body.children.length, 0);
  assert.equal(env.windowListeners.size, 0);
  assert.equal(env.documentListeners.size, 0);
  assert.equal(instance.canvas.listeners.size, 0);
  assert.equal(env.animationFrames.size, 0);
  assert.equal(env.lockCount(), 1);
  assert.equal(env.unlockCount(), 1);
}

function testCooldownBlocksRapidFire() {
  const env = createEnvironment(416, 416);
  const instance = env.game.start({ readyDelayMs: 0, shotCooldownMs: 450 }, function () {});
  raiseNext(instance, 1);
  const target = instance.activeTarget;
  const geometry = instance.getTargetGeometry(target);
  const miss = instance.shootAt(0, 0);
  const blocked = instance.shootAt(geometry.x, geometry.y);
  assert.deepEqual(miss, { fired: true, hit: false, reason: "miss" });
  assert.deepEqual(blocked, { fired: false, hit: false, reason: "cooldown" });
  assert.equal(instance.shots, 1, "blocked clicks must not count as shots");
  advance(instance, 450);
  assert.equal(instance.shootAt(geometry.x, geometry.y).hit, true);
  assert.equal(instance.shots, 2);
  instance.destroy({ result: "cancel", reason: "test", score: instance.score });
}

function testAllSevenTargetsWin() {
  const env = createEnvironment(416, 416);
  let result = null;
  const instance = env.game.start({ readyDelayMs: 0, interTargetDelayMs: 450, shotCooldownMs: 300 }, (value) => { result = value; });
  for (let index = 0; index < 7; index++) {
    raiseNext(instance, index === 0 ? 1 : 450);
    hitActive(instance);
  }
  assert.equal(instance.ended, true);
  assert.equal(instance.result.result, "win");
  assert.equal(instance.result.hits, 7);
  assert.equal(instance.result.totalTargets, 7);
  instance.footer.querySelectorAll("BUTTON")[1].onclick();
  assert.equal(result.result, "win");
  assert.equal(env.body.children.length, 0);
}

function testExpiredTargetCausesLoss() {
  const env = createEnvironment(416, 416);
  const instance = env.game.start({ readyDelayMs: 0, targetVisibleMs: 500, interTargetDelayMs: 450, shotCooldownMs: 300 }, function () {});
  raiseNext(instance, 1);
  advance(instance, 500);
  assert.equal(instance.misses, 1);
  for (let index = 1; index < 7; index++) {
    raiseNext(instance, 450);
    hitActive(instance);
  }
  assert.equal(instance.result.result, "lose");
  assert.equal(instance.result.hits, 6);
  assert.equal(instance.result.misses, 1);
  instance.destroy(instance.result);
}

function testRetryResetsWithoutDuplicatingListeners() {
  const env = createEnvironment(416, 416);
  const instance = env.game.start({ readyDelayMs: 0, targetVisibleMs: 500 }, function () {});
  raiseNext(instance, 1);
  advance(instance, 500);
  instance.footer.querySelectorAll("BUTTON")[0].onclick();
  assert.equal(instance.ended, false);
  assert.equal(instance.hits, 0);
  assert.equal(instance.misses, 0);
  assert.equal(instance.shots, 0);
  assert.equal(instance.targets.length, 7);
  assert.equal(instance.canvas.listeners.size, 1);
  assert.equal(env.windowListeners.size, 1);
  assert.equal(env.documentListeners.size, 1);
  instance.destroy({ result: "cancel", reason: "test", score: 0 });
}

testStartsResponsivelyAndCleansUp(416, 416);
testStartsResponsivelyAndCleansUp(208, 416);
testStartsResponsivelyAndCleansUp(360, 640);
testCooldownBlocksRapidFire();
testAllSevenTargetsWin();
testExpiredTargetCausesLoss();
testRetryResetsWithoutDuplicatingListeners();

console.log("Shooting range minigame tests passed (front/back targets, timing, cooldown, win/loss, retry, responsive layout, cleanup).");
