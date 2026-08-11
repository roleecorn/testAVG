(function () {
	"use strict";

	window.MotaMiniGames = window.MotaMiniGames || {};

	var ASSET_ROOT = "project/images/minigames/westernDuel/";
	var ASSETS = {
		buildings: ASSET_ROOT + "buildings.png",
		player: ASSET_ROOT + "player-front.png",
		npcs: ASSET_ROOT + "npcs.png",
		explosion: ASSET_ROOT + "death-explosion.png"
	};
	var MIN_TARGET_SECONDS = 5;
	var MAX_TARGET_SECONDS = 10;

	function clamp(value, minimum, maximum) {
		return Math.max(minimum, Math.min(maximum, value));
	}

	function makeButton(label, background) {
		var button = document.createElement("button");
		button.type = "button";
		button.textContent = label;
		button.style.cssText = [
			"min-height:38px", "border:2px solid #4a2513", "border-radius:5px", "padding:5px 10px",
			"background:" + background, "color:#fff4c7", "font-weight:900", "cursor:pointer",
			"touch-action:manipulation", "-webkit-tap-highlight-color:transparent", "box-sizing:border-box",
			"box-shadow:inset 0 0 0 1px rgba(255,244,199,0.18),0 2px 0 #241109"
		].join(";");
		return button;
	}

	function makeSprite(asset, size, position) {
		var sprite = document.createElement("div");
		sprite.style.cssText = [
			"position:absolute", "background-image:url(\"" + asset + "\")", "background-repeat:no-repeat",
			"background-size:" + size, "background-position:" + position,
			"image-rendering:pixelated", "transform-origin:50% 100%"
		].join(";");
		return sprite;
	}

	function makeLayer(style) {
		var layer = document.createElement("div");
		layer.style.cssText = "position:absolute;pointer-events:none;" + style;
		return layer;
	}

	function WesternDuelGame(options, onFinish) {
		this.options = options || {};
		this.onFinish = onFinish || function () {};
		this.title = this.options.title || "正午對決";
		this.random = typeof this.options.random === "function" ? this.options.random : Math.random;
		this.targetSeconds = MIN_TARGET_SECONDS;
		this.targetMs = this.targetSeconds * 1000;
		this.toleranceMs = Math.round(clamp(Number(this.options.toleranceMs) || 100, 25, 500));
		this.concealAfterMs = Math.round(clamp(Number(this.options.concealAfterMs) || 800, 300, 1500));
		this.timeoutAfterMs = this.targetMs + 3000;
		this.assetPaths = ASSETS;
		this.state = "ready";
		this.result = null;
		this.startAt = 0;
		this.destroyed = false;
		this.lockedBeforeStart = false;
		this.rafId = null;
		this.overlay = null;
		this.panel = null;
		this.stage = null;
		this.briefing = null;
		this.timer = null;
		this.status = null;
		this.footer = null;
		this.primaryButton = null;
		this.playerSprite = null;
		this.opponentSprite = null;
		this.playerFlash = null;
		this.opponentFlash = null;
		this.actionCurtain = null;
		this.keyHandler = null;
		this.resizeHandler = null;
	}

	WesternDuelGame.prototype.now = function () {
		if (window.performance && typeof window.performance.now === "function") return window.performance.now();
		return Date.now();
	};

	WesternDuelGame.prototype.start = function () {
		this.lockedBeforeStart = !!(core.status && core.status.lockControl);
		core.lockControl();
		this.createOverlay();
		this.resetRound();
	};

	WesternDuelGame.prototype.createOverlay = function () {
		var self = this;
		var overlay = document.createElement("div");
		overlay.id = "westernDuelMiniGame";
		overlay.setAttribute("role", "dialog");
		overlay.setAttribute("aria-label", this.title);
		overlay.style.cssText = [
			"position:fixed", "left:0", "top:0", "right:0", "bottom:0", "width:100vw", "height:100vh", "z-index:230",
			"display:flex", "align-items:center", "justify-content:center", "overflow:hidden",
			"background:radial-gradient(circle at 50% 42%,rgba(255,196,93,0.2),rgba(35,15,8,0.95) 68%),rgba(35,15,8,0.92)",
			"font-family:Georgia,'Microsoft JhengHei','Microsoft YaHei',serif",
			"color:#fff4c7", "pointer-events:auto", "touch-action:none"
		].join(";");

		var panel = document.createElement("div");
		panel.style.cssText = [
			"width:900px", "height:640px", "box-sizing:border-box", "padding:12px", "border:4px solid #3b1b0d",
			"border-radius:7px", "background:linear-gradient(90deg,rgba(70,31,13,0.35) 0 2px,transparent 2px 34px),linear-gradient(160deg,#d98a36,#7a351d 72%,#3d1c10)",
			"box-shadow:0 16px 40px rgba(0,0,0,0.68),inset 0 0 0 2px #e9b866,inset 0 0 34px rgba(60,25,10,0.32)",
			"display:flex", "flex-direction:column", "gap:5px", "overflow:hidden"
		].join(";");

		var header = document.createElement("div");
		header.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:8px;flex:0 0 auto;min-height:34px;padding:0 0 1px";
		var title = document.createElement("div");
		title.textContent = this.title;
		title.style.cssText = [
			"font-size:21px", "font-weight:900", "color:#2e1208", "text-shadow:0 1px #f8d78b",
			"white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis", "padding:2px 11px",
			"border:2px solid #5a2a12", "border-radius:4px", "background:linear-gradient(#f3c46e,#b96527)",
			"box-shadow:inset 0 0 0 1px rgba(255,244,199,0.3),0 2px 0 rgba(54,20,8,0.7)"
		].join(";");
		header.appendChild(title);
		var close = makeButton("×", "#6b2117");
		close.title = "取消並返回地圖";
		close.setAttribute("aria-label", "取消並返回地圖");
		close.style.minWidth = "38px";
		close.style.padding = "0";
		close.style.fontSize = "22px";
		close.onclick = function () {
			self.destroy(self.result || { result: "cancel", reason: "close", score: 0, targetMs: self.targetMs });
		};
		header.appendChild(close);
		panel.appendChild(header);

		var briefing = document.createElement("div");
		briefing.textContent = "目標 " + this.formatSeconds(this.targetMs) + " 秒｜誤差 ±" + this.toleranceMs + "ms 內命中";
		briefing.style.cssText = [
			"flex:0 0 auto", "min-height:21px", "text-align:center", "font-size:13px", "font-weight:900",
			"color:#351509", "background:linear-gradient(90deg,rgba(255,244,199,0),#f3cf87 18%,#f3cf87 82%,rgba(255,244,199,0))",
			"border-top:1px solid rgba(67,28,12,0.35)", "border-bottom:1px solid rgba(67,28,12,0.35)",
			"line-height:21px"
		].join(";");
		panel.appendChild(briefing);

		var stage = document.createElement("div");
		stage.setAttribute("aria-label", "西部街道決鬥場景");
		stage.style.cssText = [
			"position:relative", "flex:1 1 auto", "min-height:0", "overflow:hidden", "border:3px solid #4b2413",
			"border-radius:5px", "background:linear-gradient(#76c4df 0 45%,#f5c96f 45% 57%,#b9682c 57% 100%)",
			"box-shadow:inset 0 0 28px rgba(55,21,9,0.45)"
		].join(";");

		var sun = document.createElement("div");
		sun.style.cssText = "position:absolute;right:13%;top:10%;width:46px;height:46px;border-radius:50%;background:#ffe68a;box-shadow:0 0 25px #ffe68a,0 0 52px rgba(255,209,91,0.7)";
		stage.appendChild(sun);

		var mountains = makeLayer("left:-8%;right:-8%;top:34%;height:26%;background:linear-gradient(135deg,transparent 0 18%,#a55329 18% 31%,transparent 31% 42%,#84401f 42% 56%,transparent 56% 67%,#b45d2b 67% 80%,transparent 80%),linear-gradient(#c46e32,#8a3e1d);clip-path:polygon(0 100%,13% 38%,25% 100%,39% 22%,55% 100%,70% 33%,84% 100%,100% 48%,100% 100%);opacity:.9");
		stage.appendChild(mountains);

		var street = makeLayer("left:0;right:0;bottom:0;height:43%;background:linear-gradient(180deg,#b6652d,#7b391c 72%,#522313);box-shadow:inset 0 16px 20px rgba(84,35,15,0.36)");
		stage.appendChild(street);
		var boardwalk = makeLayer("left:-3%;right:-3%;bottom:28%;height:9%;background:repeating-linear-gradient(90deg,#6b351b 0 14px,#4d2614 14px 16px);border-top:2px solid #301307;border-bottom:2px solid #301307;box-shadow:0 5px 0 rgba(48,19,7,0.28)");
		stage.appendChild(boardwalk);

		var sideBuildingLeft = makeSprite(ASSETS.buildings, "800px 345px", "-210px -40px");
		sideBuildingLeft.style.cssText += ";left:-6%;bottom:31%;width:80px;height:93px;transform:scale(1.15);opacity:.72;filter:saturate(.86) brightness(.85);z-index:1";
		stage.appendChild(sideBuildingLeft);

		var sideBuildingRight = makeSprite(ASSETS.buildings, "800px 345px", "-345px -42px");
		sideBuildingRight.style.cssText += ";right:-5%;bottom:31%;width:82px;height:92px;transform:scale(1.12);opacity:.7;filter:saturate(.82) brightness(.82);z-index:1";
		stage.appendChild(sideBuildingRight);

		var saloon = makeSprite(ASSETS.buildings, "800px 345px", "-24px -20px");
		saloon.style.cssText += ";left:50%;bottom:29%;width:116px;height:132px;transform:translateX(-50%) scale(1.05);opacity:0.98;z-index:2;filter:drop-shadow(0 8px 4px rgba(48,19,7,0.45))";
		stage.appendChild(saloon);

		var timerBoard = document.createElement("div");
		timerBoard.style.cssText = [
			"position:absolute", "left:50%", "top:8%", "transform:translateX(-50%)", "z-index:5",
			"min-width:134px", "padding:5px 9px", "border:3px solid #3b1a0b", "border-radius:4px",
			"background:linear-gradient(#ffe7a8,#d89645)", "color:#2f1207", "text-align:center",
			"font-family:Consolas,monospace", "font-size:24px", "font-weight:900", "letter-spacing:0",
			"box-shadow:0 4px 0 rgba(54,20,8,0.7),inset 0 0 0 1px rgba(255,244,199,0.4)"
		].join(";");
		timerBoard.setAttribute("aria-live", "polite");
		stage.appendChild(timerBoard);

		var playerShadow = makeLayer("left:5%;bottom:4%;width:94px;height:18px;border-radius:50%;background:rgba(42,16,8,0.42);filter:blur(1px);z-index:2");
		stage.appendChild(playerShadow);
		var player = makeSprite(ASSETS.player, "1344px 440px", "-18px -20px");
		player.style.cssText += ";left:8%;bottom:5%;width:48px;height:80px;transform:scale(1.28);z-index:4;filter:drop-shadow(0 4px 1px rgba(42,16,8,0.5));transition:transform .16s,opacity .18s,filter .18s";
		stage.appendChild(player);

		var opponentShadow = makeLayer("right:5%;bottom:4%;width:88px;height:18px;border-radius:50%;background:rgba(42,16,8,0.42);filter:blur(1px);z-index:2");
		stage.appendChild(opponentShadow);
		var opponent = makeSprite(ASSETS.npcs, "162px 162px", "-4px -2px");
		opponent.style.cssText += ";right:9%;bottom:5%;width:42px;height:58px;transform:scale(1.58);z-index:4;filter:drop-shadow(0 4px 1px rgba(42,16,8,0.5));transition:transform .16s,opacity .18s,filter .18s";
		stage.appendChild(opponent);

		var playerFlash = makeSprite(ASSETS.explosion, "200px 28px", "0 0");
		playerFlash.style.cssText += ";left:21%;bottom:26%;width:28px;height:28px;opacity:0;z-index:6;transform:scale(1.55);transition:opacity .12s";
		stage.appendChild(playerFlash);
		var opponentFlash = makeSprite(ASSETS.explosion, "200px 28px", "0 0");
		opponentFlash.style.cssText += ";right:18%;bottom:26%;width:28px;height:28px;opacity:0;z-index:6;transform:scale(1.55);transition:opacity .12s";
		stage.appendChild(opponentFlash);

		var actionCurtain = makeLayer("inset:0;background:radial-gradient(circle at 50% 58%,rgba(255,226,130,0),rgba(58,20,8,0.42) 70%);opacity:.08;z-index:7;transition:opacity .18s");
		stage.appendChild(actionCurtain);

		panel.appendChild(stage);

		var status = document.createElement("div");
		status.setAttribute("aria-live", "polite");
		status.style.cssText = "flex:0 0 auto;min-height:34px;font-size:13px;line-height:1.25;text-align:center;color:#fff4c7;overflow:hidden";
		panel.appendChild(status);

		var footer = document.createElement("div");
		footer.style.cssText = "display:flex;gap:6px;flex:0 0 auto;min-height:40px";
		panel.appendChild(footer);

		overlay.appendChild(panel);
		(document.body || core.dom.gameDraw).appendChild(overlay);
		this.overlay = overlay;
		this.panel = panel;
		this.stage = stage;
		this.briefing = briefing;
		this.timer = timerBoard;
		this.status = status;
		this.footer = footer;
		this.playerSprite = player;
		this.opponentSprite = opponent;
		this.playerFlash = playerFlash;
		this.opponentFlash = opponentFlash;
		this.actionCurtain = actionCurtain;

		this.keyHandler = function (event) {
			if (event.key === "Escape") self.destroy(self.result || { result: "cancel", reason: "escape", score: 0, targetMs: self.targetMs });
			if ((event.key === " " || event.key === "Enter") && self.state !== "ended") {
				event.preventDefault();
				self.handlePrimary();
			}
		};
		document.addEventListener("keydown", this.keyHandler);
		this.resizeHandler = function () { self.applyResponsiveLayout(); };
		window.addEventListener("resize", this.resizeHandler);
		this.applyResponsiveLayout();
	};

	WesternDuelGame.prototype.applyResponsiveLayout = function () {
		if (!this.overlay || !this.panel) return;
		var width = this.overlay.clientWidth || window.innerWidth || 416;
		var height = this.overlay.clientHeight || window.innerHeight || 416;
		var margin = Math.max(8, Math.min(width, height) * 0.035);
		var panelWidth = Math.max(180, Math.floor(width - margin * 2));
		var panelHeight = Math.max(180, Math.floor(height - margin * 2));
		panelWidth = Math.min(panelWidth, 980);
		panelHeight = Math.min(panelHeight, 720);
		var unit = Math.min(panelWidth, panelHeight) / 13;
		this.panel.style.width = panelWidth + "px";
		this.panel.style.height = panelHeight + "px";
		this.panel.style.padding = Math.max(8, unit * 0.26) + "px";
		this.panel.style.gap = Math.max(3, unit * 0.12) + "px";
		var buttons = this.panel.querySelectorAll("button");
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.fontSize = Math.max(9, unit * 0.4) + "px";
			buttons[i].style.minHeight = Math.max(30, unit * 1.12) + "px";
		}
	};

	WesternDuelGame.prototype.formatSeconds = function (milliseconds) {
		return (Math.max(0, milliseconds) / 1000).toFixed(3);
	};

	WesternDuelGame.prototype.chooseTarget = function () {
		var roll = Number(this.random());
		if (!isFinite(roll)) roll = 0;
		roll = clamp(roll, 0, 0.999999999);
		this.targetSeconds = MIN_TARGET_SECONDS + Math.floor(roll * (MAX_TARGET_SECONDS - MIN_TARGET_SECONDS + 1));
		this.targetMs = this.targetSeconds * 1000;
		this.timeoutAfterMs = this.targetMs + 3000;
	};

	WesternDuelGame.prototype.resetRound = function () {
		if (this.rafId !== null) window.cancelAnimationFrame(this.rafId);
		this.rafId = null;
		this.state = "ready";
		this.result = null;
		this.startAt = 0;
		this.chooseTarget();
		this.briefing.textContent = "目標 " + this.formatSeconds(this.targetMs) + " 秒｜誤差 ±" + this.toleranceMs + "ms 內命中";
		this.timer.textContent = "0.000";
		this.status.textContent = "按下開始後，計時只顯示 0.8 秒；憑感覺在目標時間拔槍。";
		this.status.style.color = "#fff4c7";
		this.playerSprite.style.opacity = "1";
		this.opponentSprite.style.opacity = "1";
		this.playerSprite.style.transform = "scale(1.28)";
		this.opponentSprite.style.transform = "scale(1.58)";
		this.playerSprite.style.filter = "drop-shadow(0 4px 1px rgba(42,16,8,0.5))";
		this.opponentSprite.style.filter = "drop-shadow(0 4px 1px rgba(42,16,8,0.5))";
		this.playerFlash.style.opacity = "0";
		this.opponentFlash.style.opacity = "0";
		this.actionCurtain.style.opacity = ".08";
		this.footer.innerHTML = "";
		var self = this;
		var button = makeButton("開始對決", "linear-gradient(#a93d21,#6d2114)");
		button.setAttribute("aria-label", "開始正午對決計時");
		button.style.flex = "1";
		button.onclick = function () { self.handlePrimary(); };
		this.footer.appendChild(button);
		this.primaryButton = button;
		this.applyResponsiveLayout();
	};

	WesternDuelGame.prototype.handlePrimary = function () {
		if (this.destroyed || this.state === "ended") return;
		if (this.state === "ready") this.beginDuel();
		else if (this.state === "running") this.stopDuel();
	};

	WesternDuelGame.prototype.beginDuel = function (now) {
		if (this.state !== "ready") return;
		var self = this;
		this.state = "running";
		this.startAt = typeof now === "number" ? now : this.now();
		this.timer.textContent = "0.000";
		this.status.textContent = "沙塵遮住碼錶後，盯住對手，在 " + this.formatSeconds(this.targetMs) + " 秒拔槍！";
		this.primaryButton.textContent = "拔槍！";
		this.primaryButton.setAttribute("aria-label", "現在拔槍並停止計時");
		this.playerSprite.style.transform = "scale(1.32) translateY(-1px)";
		this.opponentSprite.style.transform = "scale(1.62) translateY(-1px)";
		this.actionCurtain.style.opacity = ".24";
		function frame() {
			if (self.destroyed || self.state !== "running") return;
			self.updateFrame();
			if (self.state === "running") self.rafId = window.requestAnimationFrame(frame);
		}
		this.rafId = window.requestAnimationFrame(frame);
	};

	WesternDuelGame.prototype.updateFrame = function (now) {
		if (this.state !== "running") return;
		var elapsed = (typeof now === "number" ? now : this.now()) - this.startAt;
		if (elapsed < this.concealAfterMs) this.timer.textContent = this.formatSeconds(elapsed);
		else this.timer.textContent = "?.???";
		if (elapsed >= this.timeoutAfterMs) this.finish("lose", "timeout", elapsed);
	};

	WesternDuelGame.prototype.stopDuel = function (now) {
		if (this.state !== "running") return null;
		var elapsed = Math.max(0, (typeof now === "number" ? now : this.now()) - this.startAt);
		var delta = Math.round(elapsed - this.targetMs);
		var absoluteError = Math.abs(delta);
		var result = absoluteError <= this.toleranceMs ? "win" : "lose";
		var reason = absoluteError <= 25 ? "bullseye" : result === "win" ? "clear" : delta < 0 ? "early" : "late";
		this.finish(result, reason, elapsed);
		return this.result;
	};

	WesternDuelGame.prototype.finish = function (result, reason, elapsed) {
		if (this.state === "ended") return;
		this.state = "ended";
		if (this.rafId !== null) window.cancelAnimationFrame(this.rafId);
		this.rafId = null;
		var elapsedMs = Math.max(0, Math.round(elapsed));
		var deltaMs = elapsedMs - this.targetMs;
		var absoluteError = Math.abs(deltaMs);
		var score = Math.max(0, 1200 - absoluteError * 2) + (result === "win" ? 800 : 0) + (reason === "bullseye" ? 500 : 0);
		this.result = {
			result: result,
			reason: reason,
			score: Math.round(score),
			targetSeconds: this.targetSeconds,
			targetMs: this.targetMs,
			elapsedMs: elapsedMs,
			deltaMs: deltaMs,
			absoluteErrorMs: absoluteError,
			toleranceMs: this.toleranceMs,
			gameTitle: this.title
		};
		this.timer.textContent = this.formatSeconds(elapsedMs);
		var signedDelta = (deltaMs > 0 ? "+" : "") + deltaMs + "ms";
		if (reason === "bullseye") this.status.textContent = "神槍手！誤差 " + signedDelta + "，正中靶心。";
		else if (result === "win") this.status.textContent = "命中！誤差 " + signedDelta + "，在容許範圍內。";
		else if (reason === "early") this.status.textContent = "太早拔槍：誤差 " + signedDelta + "。";
		else if (reason === "timeout") this.status.textContent = "猶豫太久：誤差 " + signedDelta + "，對手先開槍了。";
		else this.status.textContent = "慢了：誤差 " + signedDelta + "。";
		this.status.style.color = result === "win" ? "#d9ffb3" : "#ffd0bd";
		this.actionCurtain.style.opacity = result === "win" ? ".16" : ".34";
		this.playerFlash.style.opacity = result === "win" ? "1" : "0";
		this.opponentFlash.style.opacity = result === "win" ? "0" : "1";
		if (result === "win") {
			this.playerSprite.style.transform = "scale(1.34) translateY(-2px)";
			this.opponentSprite.style.transform = "scale(1.58) rotate(-8deg) translateY(4px)";
			this.opponentSprite.style.opacity = "0.35";
			this.opponentSprite.style.filter = "grayscale(.45) drop-shadow(0 4px 1px rgba(42,16,8,0.5))";
		} else {
			this.opponentSprite.style.transform = "scale(1.62) translateY(-2px)";
			this.playerSprite.style.transform = "scale(1.28) rotate(8deg) translateY(4px)";
			this.playerSprite.style.opacity = "0.4";
			this.playerSprite.style.filter = "grayscale(.45) drop-shadow(0 4px 1px rgba(42,16,8,0.5))";
		}

		var self = this;
		this.footer.innerHTML = "";
		var retry = makeButton("再決鬥一次", "#8b4c22");
		retry.style.flex = "1";
		retry.onclick = function () { self.resetRound(); };
		var back = makeButton("返回地圖", result === "win" ? "#476b2d" : "#5c4033");
		back.style.flex = "1";
		back.onclick = function () { self.destroy(self.result); };
		this.footer.appendChild(retry);
		this.footer.appendChild(back);
		this.applyResponsiveLayout();
	};

	WesternDuelGame.prototype.destroy = function (result) {
		if (this.destroyed) return;
		this.destroyed = true;
		if (this.rafId !== null) window.cancelAnimationFrame(this.rafId);
		this.rafId = null;
		if (this.keyHandler) document.removeEventListener("keydown", this.keyHandler);
		if (this.resizeHandler) window.removeEventListener("resize", this.resizeHandler);
		if (this.overlay && this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
		if (!this.lockedBeforeStart) core.unlockControl();
		this.onFinish(result || this.result || { result: "cancel", reason: "destroy", score: 0, targetMs: this.targetMs });
	};

	window.MotaMiniGames.westernDuel = {
		start: function (options, onFinish) {
			var game = new WesternDuelGame(options, onFinish);
			game.start();
			return game;
		}
	};
})();
