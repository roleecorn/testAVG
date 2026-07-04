(function () {
	"use strict";

	window.MotaMiniGames = window.MotaMiniGames || {};

	var SYMBOLS = [
		{ id: "seven", label: "7", weight: 8, color: "#facc15" },
		{ id: "bar", label: "BAR", weight: 10, color: "#e5e7eb" },
		{ id: "bell", label: "BELL", weight: 14, color: "#f97316" },
		{ id: "gem", label: "GEM", weight: 18, color: "#38bdf8" },
		{ id: "cherry", label: "CHERRY", weight: 22, color: "#fb7185" },
		{ id: "coin", label: "COIN", weight: 28, color: "#fde68a" }
	];

	function Slot777Game(options, onFinish) {
		this.options = options || {};
		this.onFinish = onFinish || function () {};
		this.maxSpins = Math.max(1, this.options.spins || 3);
		this.spinCount = 0;
		this.score = 0;
		this.bestPayout = 0;
		this.bestLine = null;
		this.spinning = false;
		this.finished = false;
		this.destroyed = false;
		this.lockedBeforeStart = false;
		this.overlay = null;
		this.reels = [];
		this.status = null;
		this.scoreText = null;
		this.spinButton = null;
		this.finishButton = null;
		this.keyHandler = null;
		this.spinTimer = null;
	}

	Slot777Game.prototype.start = function () {
		this.lockedBeforeStart = core.status.lockControl;
		core.lockControl();
		this.createOverlay();
		this.renderIdle();
	}

	Slot777Game.prototype.createOverlay = function () {
		var self = this;
		var overlay = document.createElement("div");
		overlay.id = "slot777MiniGame";
		overlay.setAttribute("role", "dialog");
		overlay.setAttribute("aria-label", "777 slot mini game");
		overlay.style.cssText = [
			"position:absolute",
			"left:0",
			"top:0",
			"width:100%",
			"height:100%",
			"z-index:220",
			"display:flex",
			"align-items:center",
			"justify-content:center",
			"background:rgba(12,10,18,0.82)",
			"font-family:Arial,'Microsoft JhengHei','Microsoft YaHei',sans-serif",
			"color:#f8fafc",
			"pointer-events:auto"
		].join(";");

		var panel = document.createElement("div");
		panel.style.cssText = [
			"width:420px",
			"max-width:92%",
			"box-sizing:border-box",
			"padding:18px",
			"border:1px solid rgba(250,204,21,0.42)",
			"border-radius:8px",
			"background:#18111f",
			"box-shadow:0 18px 46px rgba(0,0,0,0.48)"
		].join(";");

		var header = document.createElement("div");
		header.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px";

		var title = document.createElement("div");
		title.textContent = "777 拉霸";
		title.style.cssText = "font-size:22px;font-weight:800;line-height:1.2;color:#fde68a";
		header.appendChild(title);

		var close = document.createElement("button");
		close.type = "button";
		close.textContent = "x";
		close.title = "離開";
		close.style.cssText = this.iconButtonCss();
		close.onclick = function () {
			self.destroy(self.result || { result: "cancel", reason: "close" });
		};
		header.appendChild(close);
		panel.appendChild(header);

		var reels = document.createElement("div");
		reels.style.cssText = [
			"display:grid",
			"grid-template-columns:repeat(3,1fr)",
			"gap:10px",
			"width:100%",
			"margin-bottom:14px"
		].join(";");
		for (var i = 0; i < 3; i++) {
			var reel = document.createElement("div");
			reel.style.cssText = [
				"height:104px",
				"border:1px solid rgba(255,255,255,0.18)",
				"border-radius:8px",
				"background:#f8fafc",
				"color:#111827",
				"display:flex",
				"align-items:center",
				"justify-content:center",
				"font-size:34px",
				"font-weight:900",
				"line-height:1",
				"text-align:center",
				"box-shadow:inset 0 8px 20px rgba(0,0,0,0.18)"
			].join(";");
			this.reels.push(reel);
			reels.appendChild(reel);
		}
		panel.appendChild(reels);

		var status = document.createElement("div");
		status.style.cssText = "min-height:24px;margin-bottom:8px;font-size:15px;color:#d1d5db";
		panel.appendChild(status);
		this.status = status;

		var score = document.createElement("div");
		score.style.cssText = "min-height:22px;margin-bottom:14px;font-size:14px;color:#fde68a";
		panel.appendChild(score);
		this.scoreText = score;

		var footer = document.createElement("div");
		footer.style.cssText = "display:flex;gap:8px";

		var spin = document.createElement("button");
		spin.type = "button";
		spin.textContent = "SPIN";
		spin.style.cssText = this.buttonCss("#dc2626");
		spin.onclick = function () {
			self.spin();
		};
		footer.appendChild(spin);
		this.spinButton = spin;

		var finish = document.createElement("button");
		finish.type = "button";
		finish.textContent = "結算";
		finish.style.cssText = this.buttonCss("#475569");
		finish.onclick = function () {
			self.finish("settle");
		};
		footer.appendChild(finish);
		this.finishButton = finish;
		panel.appendChild(footer);

		overlay.appendChild(panel);
		(core.dom.gameDraw || document.body).appendChild(overlay);
		this.overlay = overlay;

		this.keyHandler = function (e) {
			if (e.key === "Escape") self.destroy({ result: "cancel", reason: "escape" });
			if (e.key === " " || e.key === "Enter") {
				e.preventDefault();
				self.spin();
			}
		};
		document.addEventListener("keydown", this.keyHandler);
	}

	Slot777Game.prototype.iconButtonCss = function () {
		return [
			"width:34px",
			"height:34px",
			"border:1px solid rgba(255,255,255,0.28)",
			"border-radius:6px",
			"background:#2f233a",
			"color:#fff",
			"font-size:22px",
			"line-height:28px",
			"cursor:pointer"
		].join(";");
	}

	Slot777Game.prototype.buttonCss = function (background) {
		return [
			"flex:1",
			"height:40px",
			"border:0",
			"border-radius:6px",
			"background:" + background,
			"color:#fff",
			"font-size:15px",
			"font-weight:700",
			"cursor:pointer"
		].join(";");
	}

	Slot777Game.prototype.renderIdle = function () {
		this.setReels([
			SYMBOLS[0],
			SYMBOLS[0],
			SYMBOLS[0]
		]);
		this.updateText("按 SPIN 開始。", true);
	}

	Slot777Game.prototype.updateText = function (message, canSpin) {
		if (this.status) this.status.textContent = message;
		if (this.scoreText) this.scoreText.textContent = "次數 " + this.spinCount + "/" + this.maxSpins + "，目前獎金 +" + this.score;
		if (this.spinButton) this.spinButton.disabled = !canSpin || this.spinning || this.spinCount >= this.maxSpins;
		if (this.spinButton) this.spinButton.style.opacity = this.spinButton.disabled ? "0.55" : "1";
		if (this.finishButton) this.finishButton.disabled = this.spinning;
		if (this.finishButton) this.finishButton.style.opacity = this.spinning ? "0.55" : "1";
	}

	Slot777Game.prototype.setReels = function (symbols) {
		for (var i = 0; i < this.reels.length; i++) {
			var symbol = symbols[i] || SYMBOLS[0];
			this.reels[i].textContent = symbol.label;
			this.reels[i].style.color = symbol.color;
		}
	}

	Slot777Game.prototype.randomSymbol = function () {
		var total = 0;
		for (var i = 0; i < SYMBOLS.length; i++) total += SYMBOLS[i].weight;
		var roll = Math.random() * total;
		for (var j = 0; j < SYMBOLS.length; j++) {
			roll -= SYMBOLS[j].weight;
			if (roll <= 0) return SYMBOLS[j];
		}
		return SYMBOLS[SYMBOLS.length - 1];
	}

	Slot777Game.prototype.spin = function () {
		if (this.spinning || this.spinCount >= this.maxSpins) return;
		var self = this;
		var ticks = 0;
		var finalLine = [this.randomSymbol(), this.randomSymbol(), this.randomSymbol()];

		this.spinning = true;
		this.spinCount++;
		this.updateText("轉輪旋轉中...", false);
		this.spinTimer = setInterval(function () {
			ticks++;
			self.setReels([self.randomSymbol(), self.randomSymbol(), self.randomSymbol()]);
			if (ticks >= 14) {
				clearInterval(self.spinTimer);
				self.spinTimer = null;
				self.resolveSpin(finalLine);
			}
		}, 70);
	}

	Slot777Game.prototype.resolveSpin = function (line) {
		var payout = this.getPayout(line);
		this.spinning = false;
		this.score += payout;
		if (payout > this.bestPayout) {
			this.bestPayout = payout;
			this.bestLine = line.slice();
		}
		this.setReels(line);

		if (this.spinCount >= this.maxSpins) {
			this.finish("complete");
			return;
		}
		this.updateText(this.describeLine(line, payout), true);
	}

	Slot777Game.prototype.getPayout = function (line) {
		if (line[0].id === "seven" && line[1].id === "seven" && line[2].id === "seven") return 777;
		if (line[0].id === line[1].id && line[1].id === line[2].id) return 160;
		if (line[0].id === line[1].id || line[0].id === line[2].id || line[1].id === line[2].id) return 35;
		return 0;
	}

	Slot777Game.prototype.describeLine = function (line, payout) {
		var labels = line.map(function (symbol) { return symbol.label; }).join(" / ");
		if (payout >= 777) return labels + "，777 大獎！+" + payout;
		if (payout > 0) return labels + "，中獎 +" + payout;
		return labels + "，沒有中獎。";
	}

	Slot777Game.prototype.finish = function (reason) {
		if (this.finished || this.spinning) return;
		this.finished = true;
		var result = this.score > 0 ? "win" : "lose";
		var jackpot = this.bestPayout >= 777;
		this.result = {
			result: jackpot ? "jackpot" : result,
			reason: reason,
			score: this.score,
			spins: this.spinCount,
			bestPayout: this.bestPayout,
			bestLine: this.bestLine ? this.bestLine.map(function (symbol) { return symbol.id; }) : []
		};
		if (this.status) this.status.textContent = this.score > 0 ? "結算完成，獎金 +" + this.score + "。" : "結算完成，這次沒有獎金。";
		if (this.spinButton) this.spinButton.disabled = true;
		var self = this;
		setTimeout(function () {
			self.destroy(self.result);
		}, 650);
	}

	Slot777Game.prototype.destroy = function (result) {
		if (this.destroyed) return;
		this.destroyed = true;
		var finalResult = result || this.result || { result: "cancel", reason: "destroy" };
		if (this.spinTimer) clearInterval(this.spinTimer);
		if (this.keyHandler) document.removeEventListener("keydown", this.keyHandler);
		if (this.overlay && this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
		if (!this.lockedBeforeStart) core.unlockControl();
		this.onFinish(finalResult);
	}

	window.MotaMiniGames.slot777 = {
		start: function (options, onFinish) {
			var game = new Slot777Game(options, onFinish);
			game.start();
			return game;
		}
	};
})();
