const assert = require("assert/strict");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "libs", "events.js"), "utf8");

function trackedStyle(initialTransform = "") {
  const history = [];
  const target = {
    transform: initialTransform,
    webkitTransform: initialTransform,
    OTransform: initialTransform,
    MozTransform: initialTransform,
  };
  return {
    history,
    style: new Proxy(target, {
      set(object, key, value) {
        if (key === "transform") history.push(value);
        object[key] = value;
        return true;
      },
    }),
  };
}

async function main() {
  const background = trackedStyle("scale(1)");
  const portrait = trackedStyle();
  const ui = trackedStyle();
  const fixedTranslations = [];
  const sandbox = {
    console,
    clearInterval,
    setInterval,
    core: {
      addGameCanvasTranslate(x, y) {
        fixedTranslations.push([x, y]);
      },
      animateFrame: { asyncId: {} },
      domStyle: { scale: 2 },
      dymCanvas: {
        image5: { canvas: { style: background.style } },
        image20: { canvas: { style: portrait.style } },
        uievent: { canvas: { style: ui.style } },
      },
      isReplaying() {
        return false;
      },
    },
  };

  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: "libs/events.js" });
  sandbox.core.events = {
    _vibrate_update: sandbox.events.prototype._vibrate_update,
  };

  let callbackCount = 0;
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("avgShake did not finish")), 1000);
    sandbox.events.prototype.avgShake("horizontal", 30, 60, 4, () => {
      callbackCount += 1;
      clearTimeout(timeout);
      resolve();
    });
  });

  assert.equal(callbackCount, 1);
  assert.ok(fixedTranslations.some(([x, y]) => x !== 0 || y !== 0));
  assert.deepEqual(fixedTranslations.at(-1), [0, 0]);
  assert.ok(background.history.some((value) => value.startsWith("translate(")));
  assert.ok(portrait.history.some((value) => value.startsWith("translate(")));
  assert.equal(background.style.transform, "scale(1)");
  assert.equal(portrait.style.transform, "");
  assert.deepEqual(ui.history, []);

  console.log("AVG effect runtime tests passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
