(function () {
	"use strict";

	window.MotaMiniGames = window.MotaMiniGames || {};

	var TARGET_LAYOUT = [
		{ row: "back", x: 0.25, y: 0.36 },
		{ row: "back", x: 0.50, y: 0.36 },
		{ row: "back", x: 0.75, y: 0.36 },
		{ row: "front", x: 0.14, y: 0.68 },
		{ row: "front", x: 0.38, y: 0.68 },
		{ row: "front", x: 0.62, y: 0.68 },
		{ row: "front", x: 0.86, y: 0.68 }
	];

	function clamp(value, minimum, maximum) {
		return Math.max(minimum, Math.min(maximum, value));
	}

	function numberOption(value, fallback, minimum, maximum) {
		value = Number(value);
		if (!isFinite(value)) value = fallback;
		return clamp(value, minimum, maximum);
	}

	function shuffle(values) {
		var copy = values.slice();
		for (var i = copy.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temporary = copy[i];
			copy[i] = copy[j];
			copy[j] = temporary;
		}
		return copy;
	}

	function makeElement(tagName, cssText, text) {
		var element = document.createElement(tagName);
		element.style.cssText = cssText || "";
		if (text != null) element.textContent = text;
		return element;
	}

	function panelDimensions(width, height) {
		var margin = Math.max(8, Math.min(width, height) * 0.035);
		return {
			width: Math.min(Math.max(180, Math.floor(width - margin * 2)), 980),
			height: Math.min(Math.max(180, Math.floor(height - margin * 2)), 720)
		};
	}

	function start(options, callback) {
		options = options || {};
		var targetVisibleMs = numberOption(options.targetVisibleMs, 1200, 500, 5000);
		var shotCooldownMs = numberOption(options.shotCooldownMs, 450, 150, 2000);
		var interTargetDelayMs = numberOption(options.interTargetDelayMs, 520, 150, 3000);
		var readyDelayMs = numberOption(options.readyDelayMs, 850, 0, 5000);
		var requiredHits = Math.round(numberOption(options.requiredHits, TARGET_LAYOUT.length, 1, TARGET_LAYOUT.length));
		var parent = document.body || (core.dom && core.dom.gameDraw);
		var wasLocked = !!(core.status && core.status.lockControl);
		var finishedCallback = false;
		var frameId = null;
		var lastFrameTime = null;

		if (!wasLocked && core.lockControl) core.lockControl();

		var overlay = makeElement("div", [
			"position:fixed", "inset:0", "z-index:10020", "display:flex", "align-items:center",
			"justify-content:center", "overflow:hidden", "background:rgba(5,10,16,.94)",
			"font-family:Arial,'Microsoft JhengHei',sans-serif", "color:#eef7ff", "touch-action:none"
		].join(";"));
		overlay.id = "shootingRangeMiniGame";

		var panel = makeElement("div", [
			"box-sizing:border-box", "display:flex", "flex-direction:column", "overflow:hidden",
			"border:2px solid #9bb2c7", "border-radius:12px", "background:#17222d",
			"box-shadow:0 18px 60px rgba(0,0,0,.65)"
		].join(";"));
		var header = makeElement("div", "box-sizing:border-box;flex:0 0 auto;padding:8px 12px;background:#223240;border-bottom:1px solid #587086");
		var title = makeElement("div", "font-weight:700;letter-spacing:.08em;text-align:center;color:#fff3c4", "警察局打靶訓練");
		var status = makeElement("div", "margin-top:4px;text-align:center;color:#cfe8f7", "準備中");
		header.appendChild(title);
		header.appendChild(status);

		var canvasWrap = makeElement("div", "position:relative;box-sizing:border-box;flex:1 1 auto;min-height:0;padding:8px;background:#0c141b");
		var canvas = makeElement("canvas", "display:block;width:100%;height:100%;cursor:crosshair;touch-action:none;background:#131d25");
		canvas.setAttribute("aria-label", "七靶打靶區，前排四個靶位，後排三個靶位");
		canvasWrap.appendChild(canvas);

		var footer = makeElement("div", "box-sizing:border-box;flex:0 0 auto;display:flex;align-items:center;justify-content:center;gap:10px;padding:8px;background:#223240;border-top:1px solid #587086");
		var retryButton = makeElement("button", "min-height:38px;padding:7px 18px;border:1px solid #d7b45a;border-radius:7px;background:#6c531c;color:#fff;font-weight:700;cursor:pointer", "重新挑戰");
		var leaveButton = makeElement("button", "min-height:38px;padding:7px 18px;border:1px solid #93a7ba;border-radius:7px;background:#33495d;color:#fff;font-weight:700;cursor:pointer", "取消");
		footer.appendChild(retryButton);
		footer.appendChild(leaveButton);

		panel.appendChild(header);
		panel.appendChild(canvasWrap);
		panel.appendChild(footer);
		overlay.appendChild(panel);
		parent.appendChild(overlay);

		var context = canvas.getContext("2d");
		var instance = {
			overlay: overlay,
			panel: panel,
			canvas: canvas,
			footer: footer,
			targets: [],
			sequence: [],
			activeTarget: null,
			roundIndex: 0,
			hits: 0,
			misses: 0,
			shots: 0,
			score: 0,
			elapsedMs: 0,
			cooldownRemainingMs: 0,
			nextTargetRemainingMs: readyDelayMs,
			ended: false,
			result: null,
			destroyed: false
		};

		function viewportSize() {
			return {
				width: Math.max(1, Number(window.innerWidth) || Number(parent.clientWidth) || 416),
				height: Math.max(1, Number(window.innerHeight) || Number(parent.clientHeight) || 416)
			};
		}

		function layout() {
			var viewport = viewportSize();
			var size = panelDimensions(viewport.width, viewport.height);
			var compact = size.height < 410;
			panel.style.width = size.width + "px";
			panel.style.height = size.height + "px";
			title.style.fontSize = clamp(Math.floor(size.height / 28), 14, 23) + "px";
			status.style.fontSize = clamp(Math.floor(size.height / 38), 11, 17) + "px";
			header.style.padding = compact ? "4px 8px" : "8px 12px";
			footer.style.padding = compact ? "4px" : "8px";
			var canvasWidth = Math.max(160, size.width - 20);
			var headerHeight = compact ? 44 : 58;
			var footerHeight = compact ? 46 : 56;
			var canvasHeight = Math.max(90, size.height - headerHeight - footerHeight - 16);
			canvas.width = canvasWidth;
			canvas.height = canvasHeight;
			draw();
		}

		function targetGeometry(target) {
			var scale = Math.min(canvas.width, canvas.height * 1.25);
			var radius = clamp(scale * (target.row === "front" ? 0.055 : 0.045), 12, 38);
			var centerY = canvas.height * target.y;
			var loweredY = centerY + radius * 1.55;
			var raised = target.status === "active" ? 1 : 0;
			return {
				x: canvas.width * target.x,
				y: loweredY - radius * 1.55 * raised,
				radius: radius,
				baseY: centerY + radius * 1.6
			};
		}
		instance.getTargetGeometry = targetGeometry;

		function drawTarget(target) {
			var geometry = targetGeometry(target);
			var visible = target.status === "active";
			context.fillStyle = target.row === "front" ? "#405565" : "#314553";
			context.fillRect(geometry.x - geometry.radius * 1.3, geometry.baseY, geometry.radius * 2.6, Math.max(5, geometry.radius * 0.35));
			context.fillStyle = "#0b0f12";
			context.fillRect(geometry.x - geometry.radius * 0.13, geometry.baseY - geometry.radius * 1.1, geometry.radius * 0.26, geometry.radius * 1.1);
			if (!visible) return;

			context.beginPath();
			context.arc(geometry.x, geometry.y, geometry.radius, 0, Math.PI * 2);
			context.fillStyle = "#e8e3d4";
			context.fill();
			context.lineWidth = Math.max(2, geometry.radius * 0.08);
			context.strokeStyle = "#30363b";
			context.stroke();
			context.beginPath();
			context.arc(geometry.x, geometry.y, geometry.radius * 0.62, 0, Math.PI * 2);
			context.fillStyle = "#d44a43";
			context.fill();
			context.beginPath();
			context.arc(geometry.x, geometry.y, geometry.radius * 0.27, 0, Math.PI * 2);
			context.fillStyle = "#f6e36b";
			context.fill();

		}

		function draw() {
			if (!context || !canvas.width || !canvas.height) return;
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillStyle = "#111a21";
			context.fillRect(0, 0, canvas.width, canvas.height);
			context.fillStyle = "#263641";
			context.fillRect(0, canvas.height * 0.47, canvas.width, canvas.height * 0.53);
			context.strokeStyle = "#516777";
			context.lineWidth = 1;
			for (var lane = 0; lane < 8; lane++) {
				var laneX = canvas.width * lane / 7;
				context.beginPath();
				context.moveTo(canvas.width / 2, canvas.height * 0.47);
				context.lineTo(laneX, canvas.height);
				context.stroke();
			}
			context.fillStyle = "#d5e2ea";
			context.font = Math.max(10, Math.floor(canvas.height / 28)) + "px Arial";
			context.textAlign = "left";
			context.fillText("後排 3", 10, Math.max(16, canvas.height * 0.08));
			context.fillText("前排 4", 10, Math.max(32, canvas.height * 0.55));
			for (var i = 0; i < instance.targets.length; i++) drawTarget(instance.targets[i]);

			if (instance.cooldownRemainingMs > 0 && !instance.ended) {
				var width = canvas.width * clamp(1 - instance.cooldownRemainingMs / shotCooldownMs, 0, 1);
				context.fillStyle = "rgba(0,0,0,.6)";
				context.fillRect(0, canvas.height - 8, canvas.width, 8);
				context.fillStyle = "#67d2ff";
				context.fillRect(0, canvas.height - 8, width, 8);
			}

			if (instance.ended) {
				context.fillStyle = "rgba(0,0,0,.68)";
				context.fillRect(0, 0, canvas.width, canvas.height);
				context.textAlign = "center";
				context.fillStyle = instance.result.result === "win" ? "#ffe477" : "#ff9b91";
				context.font = "bold " + clamp(Math.floor(canvas.height / 9), 20, 42) + "px Arial";
				context.fillText(instance.result.result === "win" ? "訓練通過" : "訓練未通過", canvas.width / 2, canvas.height * 0.45);
				context.fillStyle = "#ffffff";
				context.font = clamp(Math.floor(canvas.height / 18), 12, 22) + "px Arial";
				context.fillText("命中 " + instance.hits + " / " + TARGET_LAYOUT.length + "　得分 " + instance.score, canvas.width / 2, canvas.height * 0.58);
			}
		}

		function refreshStatus(message) {
			if (message) {
				status.textContent = message;
				return;
			}
			var cooldown = instance.cooldownRemainingMs > 0 ? "　冷卻 " + Math.ceil(instance.cooldownRemainingMs) + "ms" : "　可射擊";
			status.textContent = "命中 " + instance.hits + "/" + TARGET_LAYOUT.length + "　射擊 " + instance.shots + cooldown;
		}

		function finish(reason) {
			if (instance.ended) return;
			instance.ended = true;
			instance.activeTarget = null;
			instance.result = {
				result: instance.hits >= requiredHits ? "win" : "lose",
				reason: reason || (instance.hits >= requiredHits ? "clear" : "missedTargets"),
				score: Math.max(0, Math.round(instance.score)),
				hits: instance.hits,
				misses: instance.misses,
				shots: instance.shots,
				totalTargets: TARGET_LAYOUT.length
			};
			leaveButton.textContent = "返回";
			refreshStatus("結算：命中 " + instance.hits + "/" + TARGET_LAYOUT.length + "　得分 " + instance.score);
			draw();
		}

		function completeTarget(target, hit) {
			if (!target || target.status !== "active") return;
			target.status = hit ? "hit" : "missed";
			if (hit) instance.hits++;
			else instance.misses++;
			instance.activeTarget = null;
			instance.roundIndex++;
			if (instance.roundIndex >= TARGET_LAYOUT.length) finish(hit ? "clear" : "missedTargets");
			else instance.nextTargetRemainingMs = interTargetDelayMs;
		}

		function raiseNextTarget() {
			if (instance.roundIndex >= instance.sequence.length) {
				finish("complete");
				return;
			}
			var target = instance.targets[instance.sequence[instance.roundIndex]];
			target.status = "active";
			target.remainingMs = targetVisibleMs;
			target.raisedAtMs = instance.elapsedMs;
			instance.activeTarget = target;
		}

		instance.step = function (deltaMs) {
			if (instance.destroyed || instance.ended) return;
			deltaMs = numberOption(deltaMs, 0, 0, 250);
			instance.elapsedMs += deltaMs;
			instance.cooldownRemainingMs = Math.max(0, instance.cooldownRemainingMs - deltaMs);
			if (instance.activeTarget) {
				instance.activeTarget.remainingMs -= deltaMs;
				if (instance.activeTarget.remainingMs <= 0) completeTarget(instance.activeTarget, false);
			}
			else {
				instance.nextTargetRemainingMs -= deltaMs;
				if (instance.nextTargetRemainingMs <= 0) raiseNextTarget();
			}
			refreshStatus();
		};

		instance.shootAt = function (x, y) {
			if (instance.destroyed || instance.ended) return { fired: false, hit: false, reason: "ended" };
			if (instance.cooldownRemainingMs > 0) return { fired: false, hit: false, reason: "cooldown" };
			instance.cooldownRemainingMs = shotCooldownMs;
			instance.shots++;
			var target = instance.activeTarget;
			if (!target) {
				refreshStatus();
				return { fired: true, hit: false, reason: "noTarget" };
			}
			var geometry = targetGeometry(target);
			var dx = Number(x) - geometry.x;
			var dy = Number(y) - geometry.y;
			var hit = dx * dx + dy * dy <= geometry.radius * geometry.radius;
			if (hit) {
				var reactionBonus = Math.max(0, Math.round((target.remainingMs / targetVisibleMs) * 100));
				instance.score += 100 + reactionBonus;
				completeTarget(target, true);
			}
			refreshStatus();
			draw();
			return { fired: true, hit: hit, reason: hit ? "hit" : "miss" };
		};

		function reset() {
			instance.targets = TARGET_LAYOUT.map(function (definition, index) {
				return { index: index, row: definition.row, x: definition.x, y: definition.y, status: "down", remainingMs: 0, raisedAtMs: 0 };
			});
			instance.sequence = shuffle([0, 1, 2, 3, 4, 5, 6]);
			instance.activeTarget = null;
			instance.roundIndex = 0;
			instance.hits = 0;
			instance.misses = 0;
			instance.shots = 0;
			instance.score = 0;
			instance.elapsedMs = 0;
			instance.cooldownRemainingMs = 0;
			instance.nextTargetRemainingMs = readyDelayMs;
			instance.ended = false;
			instance.result = null;
			leaveButton.textContent = "取消";
			refreshStatus("準備：七個靶位將各升起一次");
			draw();
		}

		function pointerPosition(event) {
			var rect = canvas.getBoundingClientRect ? canvas.getBoundingClientRect() : { left: 0, top: 0, width: canvas.width, height: canvas.height };
			var width = Number(rect.width) || canvas.width || 1;
			var height = Number(rect.height) || canvas.height || 1;
			return {
				x: (Number(event.clientX) - (Number(rect.left) || 0)) * canvas.width / width,
				y: (Number(event.clientY) - (Number(rect.top) || 0)) * canvas.height / height
			};
		}

		function onPointerDown(event) {
			if (event.preventDefault) event.preventDefault();
			var position = pointerPosition(event);
			instance.shootAt(position.x, position.y);
		}

		function onKeyDown(event) {
			if (event.key === "Escape") instance.destroy({ result: "cancel", reason: "manual", score: instance.score, hits: instance.hits, totalTargets: TARGET_LAYOUT.length });
		}

		function animate(timestamp) {
			if (instance.destroyed) return;
			if (lastFrameTime == null) lastFrameTime = timestamp;
			var deltaMs = Math.min(250, Math.max(0, timestamp - lastFrameTime));
			lastFrameTime = timestamp;
			instance.step(deltaMs);
			draw();
			frameId = window.requestAnimationFrame(animate);
		}

		instance.destroy = function (result) {
			if (instance.destroyed) return;
			instance.destroyed = true;
			if (frameId != null) window.cancelAnimationFrame(frameId);
			canvas.removeEventListener("pointerdown", onPointerDown);
			window.removeEventListener("resize", layout);
			document.removeEventListener("keydown", onKeyDown);
			if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
			if (!wasLocked && core.unlockControl) core.unlockControl();
			if (!finishedCallback && callback) {
				finishedCallback = true;
				callback(result || instance.result || { result: "cancel", reason: "manual", score: instance.score, hits: instance.hits, totalTargets: TARGET_LAYOUT.length });
			}
		};

		retryButton.onclick = reset;
		leaveButton.onclick = function () {
			instance.destroy(instance.result || { result: "cancel", reason: "manual", score: instance.score, hits: instance.hits, totalTargets: TARGET_LAYOUT.length });
		};
		canvas.addEventListener("pointerdown", onPointerDown);
		window.addEventListener("resize", layout);
		document.addEventListener("keydown", onKeyDown);
		layout();
		reset();
		frameId = window.requestAnimationFrame(animate);

		return instance;
	}

	window.MotaMiniGames.shootingRange = {
		start: start,
		targetCount: TARGET_LAYOUT.length
	};
})();
