(function () {
	"use strict";

	window.MotaMiniGames = window.MotaMiniGames || {};

	var WORLD_WIDTH = 400;
	var WORLD_HEIGHT = 260;

	function makeButton(label, background) {
		var button = document.createElement("button");
		button.type = "button";
		button.textContent = label;
		button.style.cssText = [
			"min-height:38px", "border:1px solid rgba(255,255,255,0.24)", "border-radius:7px",
			"padding:5px 10px", "background:" + background, "color:#fff", "font-weight:800",
			"cursor:pointer", "touch-action:manipulation", "-webkit-tap-highlight-color:transparent",
			"box-sizing:border-box"
		].join(";");
		return button;
	}

	function AkibaFlapperGame(options, onFinish) {
		this.options = options || {};
		this.onFinish = onFinish || function () {};
		this.title = this.options.title || "電波飛鳥";
		this.targetGates = Math.max(1, Number(this.options.targetGates) || 8);
		this.maxSeconds = Math.max(10, Number(this.options.seconds) || 45);
		this.gravity = 690;
		this.flapPower = -285;
		this.gateSpeed = 112;
		this.gateWidth = 50;
		this.gateGap = 112;
		this.birdX = 92;
		this.birdY = WORLD_HEIGHT / 2;
		this.birdVelocity = 0;
		this.birdRadius = 12;
		this.gates = [];
		this.passedGates = 0;
		this.elapsedMs = 0;
		this.secondsLeft = this.maxSeconds;
		this.score = 0;
		this.started = false;
		this.ended = false;
		this.destroyed = false;
		this.result = null;
		this.lockedBeforeStart = false;
		this.overlay = null;
		this.panel = null;
		this.board = null;
		this.canvas = null;
		this.context = null;
		this.progress = null;
		this.status = null;
		this.footer = null;
		this.flapButton = null;
		this.resizeHandler = null;
		this.keyHandler = null;
		this.pointerHandler = null;
		this.rafId = null;
		this.lastFrameAt = 0;
	}

	AkibaFlapperGame.prototype.start = function () {
		this.lockedBeforeStart = !!(core.status && core.status.lockControl);
		core.lockControl();
		this.resetRun();
		this.createOverlay();
		this.updateProgress();
		this.draw();
	}

	AkibaFlapperGame.prototype.resetRun = function () {
		this.gates = [];
		for (var i = 0; i < this.targetGates; i++) {
			this.gates.push({
				x: 430 + i * 175,
				gapY: 72 + Math.random() * 116,
				passed: false
			});
		}
	}

	AkibaFlapperGame.prototype.createOverlay = function () {
		var self = this;
		var overlay = document.createElement("div");
		overlay.id = "akibaFlapperMiniGame";
		overlay.setAttribute("role", "dialog");
		overlay.setAttribute("aria-label", this.title);
		overlay.style.cssText = [
			"position:fixed", "left:0", "top:0", "right:0", "bottom:0", "width:100vw", "height:100vh", "z-index:230",
			"display:flex", "align-items:center", "justify-content:center", "overflow:hidden",
			"background:radial-gradient(circle at 50% 42%,rgba(14,165,233,0.18),rgba(2,6,23,0.96) 64%),rgba(2,6,23,0.96)",
			"font-family:Arial,'Microsoft JhengHei','Microsoft YaHei',sans-serif",
			"color:#f8fafc", "pointer-events:auto", "touch-action:none"
		].join(";");

		var panel = document.createElement("div");
		panel.style.cssText = [
			"width:900px", "height:620px", "box-sizing:border-box", "padding:14px", "border-radius:8px",
			"border:2px solid rgba(103,232,249,0.38)", "background:linear-gradient(160deg,#172554,#0f172a 76%,#070b1a)",
			"box-shadow:0 18px 50px rgba(0,0,0,0.62),inset 0 0 34px rgba(14,165,233,0.18)",
			"display:flex", "flex-direction:column", "gap:5px", "overflow:hidden"
		].join(";");

		var header = document.createElement("div");
		header.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:8px;flex:0 0 auto;min-height:34px";
		var title = document.createElement("div");
		title.textContent = this.title;
		title.style.cssText = "font-size:24px;font-weight:900;color:#67e8f9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-shadow:0 0 14px rgba(103,232,249,0.75)";
		header.appendChild(title);

		var close = makeButton("×", "#4c1d3d");
		close.title = "取消並返回地圖";
		close.setAttribute("aria-label", "取消並返回地圖");
		close.style.minWidth = "38px";
		close.style.padding = "0";
		close.style.fontSize = "22px";
		close.onclick = function () {
			self.destroy(self.result || { result: "cancel", reason: "close", score: self.score, gates: self.passedGates });
		};
		header.appendChild(close);
		panel.appendChild(header);

		var progress = document.createElement("div");
		progress.style.cssText = "flex:0 0 auto;min-height:22px;font-size:14px;color:#facc15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		panel.appendChild(progress);

		var status = document.createElement("div");
		status.textContent = "點擊遊戲畫面或下方按鈕拍翼，穿過 8 道電子閘門。";
		status.style.cssText = "flex:0 0 auto;min-height:32px;font-size:14px;line-height:1.25;color:#cbd5e1;overflow:hidden";
		panel.appendChild(status);

		var board = document.createElement("div");
		board.style.cssText = "position:relative;flex:1 1 auto;min-height:0;overflow:hidden;border:2px solid #155e75;border-radius:8px;background:#07152e;box-shadow:inset 0 0 30px rgba(103,232,249,0.16)";
		var canvas = document.createElement("canvas");
		canvas.width = WORLD_WIDTH;
		canvas.height = WORLD_HEIGHT;
		canvas.setAttribute("aria-label", "電波飛鳥飛行區，點擊拍翼");
		canvas.style.cssText = "display:block;width:100%;height:100%;cursor:pointer;touch-action:none";
		board.appendChild(canvas);
		panel.appendChild(board);

		var footer = document.createElement("div");
		footer.style.cssText = "display:flex;gap:6px;flex:0 0 auto;min-height:38px";
		var flap = makeButton("開始飛行／拍翼", "#0369a1");
		flap.style.flex = "1";
		flap.onclick = function () { self.flap(); };
		footer.appendChild(flap);
		panel.appendChild(footer);

		overlay.appendChild(panel);
		(document.body || core.dom.gameDraw).appendChild(overlay);
		this.overlay = overlay;
		this.panel = panel;
		this.board = board;
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.progress = progress;
		this.status = status;
		this.footer = footer;
		this.flapButton = flap;

		this.pointerHandler = function (event) {
			if (event && event.preventDefault) event.preventDefault();
			self.flap();
		};
		canvas.addEventListener("pointerdown", this.pointerHandler);
		this.keyHandler = function (event) {
			if (event.key === "Escape") self.destroy({ result: "cancel", reason: "escape", score: self.score, gates: self.passedGates });
			if (event.key === " " || event.key === "Enter") {
				event.preventDefault();
				self.flap();
			}
		};
		document.addEventListener("keydown", this.keyHandler);
		this.resizeHandler = function () { self.applyResponsiveLayout(); };
		window.addEventListener("resize", this.resizeHandler);
		this.applyResponsiveLayout();
	}

	AkibaFlapperGame.prototype.applyResponsiveLayout = function () {
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
		this.panel.style.padding = Math.max(8, unit * 0.28) + "px";
		this.panel.style.gap = Math.max(3, unit * 0.14) + "px";
		var buttons = this.panel.querySelectorAll("button");
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.fontSize = Math.max(9, unit * 0.42) + "px";
			buttons[i].style.minHeight = Math.max(32, unit * 1.12) + "px";
		}
	}

	AkibaFlapperGame.prototype.beginFlight = function () {
		if (this.started || this.ended) return;
		var self = this;
		this.started = true;
		this.lastFrameAt = Date.now();
		this.status.textContent = "保持高度，對準發光閘門中央！";
		this.flapButton.textContent = "拍翼";
		function frame() {
			if (self.ended || self.destroyed) return;
			var now = Date.now();
			var dt = Math.min(0.034, Math.max(0, (now - self.lastFrameAt) / 1000));
			self.lastFrameAt = now;
			self.step(dt);
			if (!self.ended && !self.destroyed) self.rafId = window.requestAnimationFrame(frame);
		}
		this.rafId = window.requestAnimationFrame(frame);
	}

	AkibaFlapperGame.prototype.flap = function () {
		if (this.ended || this.destroyed) return;
		if (!this.started) this.beginFlight();
		this.birdVelocity = this.flapPower;
	}

	AkibaFlapperGame.prototype.step = function (dt) {
		if (this.ended || !this.started) return;
		this.elapsedMs += dt * 1000;
		this.secondsLeft = Math.max(0, Math.ceil(this.maxSeconds - this.elapsedMs / 1000));
		this.birdVelocity += this.gravity * dt;
		this.birdY += this.birdVelocity * dt;

		for (var i = 0; i < this.gates.length; i++) {
			var gate = this.gates[i];
			gate.x -= this.gateSpeed * dt;
			if (!gate.passed && gate.x + this.gateWidth < this.birdX - this.birdRadius) {
				gate.passed = true;
				this.passedGates++;
				this.score += 150;
				if (this.passedGates >= this.targetGates) {
					this.finish("win", "clear");
					return;
				}
			}
		}

		if (this.birdY - this.birdRadius <= 0 || this.birdY + this.birdRadius >= WORLD_HEIGHT) {
			this.finish("lose", "boundary");
			return;
		}
		if (this.collidesWithGate()) {
			this.finish("lose", "collision");
			return;
		}
		if (this.elapsedMs >= this.maxSeconds * 1000) {
			this.finish("lose", "timeout");
			return;
		}
		this.updateProgress();
		this.draw();
	}

	AkibaFlapperGame.prototype.collidesWithGate = function () {
		var left = this.birdX - this.birdRadius;
		var right = this.birdX + this.birdRadius;
		var top = this.birdY - this.birdRadius;
		var bottom = this.birdY + this.birdRadius;
		for (var i = 0; i < this.gates.length; i++) {
			var gate = this.gates[i];
			if (right <= gate.x || left >= gate.x + this.gateWidth) continue;
			var gapTop = gate.gapY - this.gateGap / 2;
			var gapBottom = gate.gapY + this.gateGap / 2;
			if (top < gapTop || bottom > gapBottom) return true;
		}
		return false;
	}

	AkibaFlapperGame.prototype.updateProgress = function () {
		if (!this.progress) return;
		this.progress.textContent = "閘門 " + this.passedGates + "/" + this.targetGates + "　剩餘 " + this.secondsLeft + " 秒　得分 " + this.score;
	}

	AkibaFlapperGame.prototype.draw = function () {
		if (!this.context) return;
		var ctx = this.context;
		ctx.clearRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
		ctx.fillStyle = "#07152e";
		ctx.fillRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
		ctx.fillStyle = "#0e2445";
		ctx.fillRect(0, WORLD_HEIGHT * 0.62, WORLD_WIDTH, WORLD_HEIGHT * 0.38);
		ctx.fillStyle = "rgba(14,165,233,0.18)";
		ctx.fillRect(0, WORLD_HEIGHT * 0.6, WORLD_WIDTH, 3);
		ctx.strokeStyle = "rgba(34,211,238,0.14)";
		ctx.lineWidth = 1;
		for (var x = 0; x <= WORLD_WIDTH; x += 40) {
			ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, WORLD_HEIGHT); ctx.stroke();
		}
		for (var y = 0; y <= WORLD_HEIGHT; y += 40) {
			ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(WORLD_WIDTH, y); ctx.stroke();
		}
		ctx.strokeStyle = "rgba(250,204,21,0.18)";
		for (var r = 0; r < 7; r++) {
			var gy = WORLD_HEIGHT * 0.68 + r * 24;
			ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(WORLD_WIDTH, gy + r * 9); ctx.stroke();
		}

		for (var i = 0; i < this.gates.length; i++) {
			var gate = this.gates[i];
			if (gate.x > WORLD_WIDTH || gate.x + this.gateWidth < 0) continue;
			var gapTop = gate.gapY - this.gateGap / 2;
			var gapBottom = gate.gapY + this.gateGap / 2;
			ctx.fillStyle = gate.passed ? "#155e75" : "#0891b2";
			ctx.fillRect(gate.x, 0, this.gateWidth, Math.max(0, gapTop));
			ctx.fillRect(gate.x, gapBottom, this.gateWidth, WORLD_HEIGHT - gapBottom);
			ctx.fillStyle = "#67e8f9";
			ctx.fillRect(gate.x - 4, gapTop - 7, this.gateWidth + 8, 7);
			ctx.fillRect(gate.x - 4, gapBottom, this.gateWidth + 8, 7);
			ctx.fillStyle = "rgba(250,204,21,0.78)";
			ctx.fillRect(gate.x + this.gateWidth / 2 - 2, gapTop, 4, gapBottom - gapTop);
		}

		ctx.save();
		ctx.translate(this.birdX, this.birdY);
		ctx.rotate(Math.max(-0.45, Math.min(0.55, this.birdVelocity / 520)));
		ctx.fillStyle = "rgba(103,232,249,0.28)";
		ctx.beginPath(); ctx.moveTo(-9, 0); ctx.lineTo(-38, 11); ctx.lineTo(-25, -10); ctx.closePath(); ctx.fill();
		ctx.fillStyle = "#facc15";
		ctx.beginPath(); ctx.arc(0, 0, this.birdRadius, 0, Math.PI * 2); ctx.fill();
		ctx.fillStyle = "#fb7185";
		ctx.beginPath(); ctx.moveTo(-5, 1); ctx.lineTo(-18, 9); ctx.lineTo(-10, -5); ctx.closePath(); ctx.fill();
		ctx.fillStyle = "#f8fafc";
		ctx.beginPath(); ctx.arc(5, -4, 4, 0, Math.PI * 2); ctx.fill();
		ctx.fillStyle = "#0f172a";
		ctx.beginPath(); ctx.arc(6, -4, 1.6, 0, Math.PI * 2); ctx.fill();
		ctx.fillStyle = "#fb923c";
		ctx.beginPath(); ctx.moveTo(11, -1); ctx.lineTo(21, 3); ctx.lineTo(11, 6); ctx.closePath(); ctx.fill();
		ctx.restore();

		if (!this.started && !this.ended) {
			ctx.fillStyle = "rgba(2,6,23,0.72)";
			ctx.fillRect(70, 92, 260, 76);
			ctx.fillStyle = "#e0f2fe";
			ctx.font = "bold 20px Arial";
			ctx.textAlign = "center";
			ctx.fillText("點擊開始飛行", WORLD_WIDTH / 2, 137);
		}
	}

	AkibaFlapperGame.prototype.finish = function (result, reason) {
		if (this.ended) return;
		this.ended = true;
		if (this.rafId !== null) window.cancelAnimationFrame(this.rafId);
		this.rafId = null;
		this.result = {
			result: result,
			reason: reason,
			score: Math.max(0, Math.round(this.score + (result === "win" ? this.secondsLeft * 5 : 0))),
			gates: this.passedGates,
			targetGates: this.targetGates,
			secondsLeft: this.secondsLeft,
			gameTitle: this.title
		};
		this.status.textContent = result === "win" ? "挑戰成功！8 道閘門全部通過。" : "飛行結束，點擊返回後可以再次挑戰。";
		this.status.style.color = result === "win" ? "#86efac" : "#fca5a5";
		this.footer.innerHTML = "";
		var self = this;
		var back = makeButton("返回地圖", result === "win" ? "#15803d" : "#475569");
		back.style.flex = "1";
		back.onclick = function () { self.destroy(self.result); };
		this.footer.appendChild(back);
		this.updateProgress();
		this.draw();
		this.applyResponsiveLayout();
	}

	AkibaFlapperGame.prototype.destroy = function (result) {
		if (this.destroyed) return;
		this.destroyed = true;
		if (this.rafId !== null) window.cancelAnimationFrame(this.rafId);
		this.rafId = null;
		if (this.canvas && this.pointerHandler) this.canvas.removeEventListener("pointerdown", this.pointerHandler);
		if (this.keyHandler) document.removeEventListener("keydown", this.keyHandler);
		if (this.resizeHandler) window.removeEventListener("resize", this.resizeHandler);
		if (this.overlay && this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
		if (!this.lockedBeforeStart) core.unlockControl();
		this.onFinish(result || this.result || { result: "cancel", reason: "destroy", score: this.score, gates: this.passedGates });
	}

	window.MotaMiniGames.akibaFlapper = {
		start: function (options, onFinish) {
			var game = new AkibaFlapperGame(options, onFinish);
			game.start();
			return game;
		}
	};
})();
