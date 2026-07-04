(function () {
	"use strict";

	window.MotaMiniGames = window.MotaMiniGames || {};

	var SPRITE_URL = "project/images/minigames/slot777/symbols.png";
	var SYMBOLS = [
		{ id: "seven", label: "7", weight: 8, sx: 0, sy: 0 },
		{ id: "cherry", label: "Cherry", weight: 20, sx: 1, sy: 0 },
		{ id: "diamond", label: "Diamond", weight: 14, sx: 2, sy: 0 },
		{ id: "bell", label: "Bell", weight: 16, sx: 0, sy: 1 },
		{ id: "coin", label: "Coin", weight: 24, sx: 1, sy: 1 },
		{ id: "star", label: "Star", weight: 18, sx: 2, sy: 1 }
	];
	var LINES = [
		{ id: "rowTop", cells: [0, 1, 2], name: "Top row" },
		{ id: "rowMiddle", cells: [3, 4, 5], name: "Middle row" },
		{ id: "rowBottom", cells: [6, 7, 8], name: "Bottom row" },
		{ id: "colLeft", cells: [0, 3, 6], name: "Left column" },
		{ id: "colMiddle", cells: [1, 4, 7], name: "Middle column" },
		{ id: "colRight", cells: [2, 5, 8], name: "Right column" },
		{ id: "diagDown", cells: [0, 4, 8], name: "Diagonal" },
		{ id: "diagUp", cells: [2, 4, 6], name: "Diagonal" }
	];

	function Slot777Game(options, onFinish) {
		this.options = options || {};
		this.onFinish = onFinish || function () {};
		this.maxRounds = Math.max(1, this.options.spins || this.options.rounds || 3);
		this.round = 0;
		this.score = 0;
		this.bestPayout = 0;
		this.winningLines = [];
		this.grid = [];
		this.stoppedReels = [false, false, false];
		this.nextStopReel = 0;
		this.spinning = false;
		this.finished = false;
		this.destroyed = false;
		this.lockedBeforeStart = false;
		this.overlay = null;
		this.panel = null;
		this.header = null;
		this.title = null;
		this.closeButton = null;
		this.machine = null;
		this.cells = [];
		this.lineLayer = null;
		this.status = null;
		this.scoreText = null;
		this.footer = null;
		this.actionButton = null;
		this.finishButton = null;
		this.keyHandler = null;
		this.resizeHandler = null;
		this.spinTimer = null;
	}

	Slot777Game.prototype.start = function () {
		this.lockedBeforeStart = core.status.lockControl;
		core.lockControl();
		this.randomizeGrid();
		this.createOverlay();
		this.renderGrid();
		this.updateText("Press START to spin the 3x3 reels.");
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
			"box-sizing:border-box",
			"padding:0",
			"z-index:220",
			"display:flex",
			"align-items:center",
			"justify-content:center",
			"overflow:hidden",
			"background:rgba(10,9,16,0.84)",
			"font-family:Arial,'Microsoft JhengHei','Microsoft YaHei',sans-serif",
			"color:#f8fafc",
			"pointer-events:auto"
		].join(";");

		var panel = document.createElement("div");
		panel.style.cssText = [
			"width:416px",
			"height:416px",
			"box-sizing:border-box",
			"padding:12px",
			"border:0",
			"border-radius:6px",
			"background:#18111f",
			"box-shadow:0 10px 28px rgba(0,0,0,0.45)",
			"display:flex",
			"flex-direction:column",
			"overflow:hidden"
		].join(";");
		this.panel = panel;

		var header = document.createElement("div");
		header.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:8px;flex:0 0 auto;overflow:hidden";
		this.header = header;

		var title = document.createElement("div");
		title.textContent = "777 SLOT";
		title.style.cssText = "font-size:22px;font-weight:800;line-height:1;color:#fde68a;white-space:nowrap;overflow:hidden";
		this.title = title;
		header.appendChild(title);

		var close = document.createElement("button");
		close.type = "button";
		close.textContent = "x";
		close.title = "Close";
		close.style.cssText = this.iconButtonCss();
		close.onclick = function () {
			self.destroy(self.result || { result: "cancel", reason: "close" });
		};
		this.closeButton = close;
		header.appendChild(close);
		panel.appendChild(header);

		var machine = document.createElement("div");
		machine.style.cssText = [
			"position:relative",
			"display:grid",
			"grid-template-columns:repeat(3,1fr)",
			"gap:8px",
			"width:256px",
			"height:256px",
			"flex:0 0 auto",
			"box-sizing:border-box",
			"padding:10px",
			"border:0",
			"border-radius:6px",
			"background:#0f172a",
			"box-shadow:inset 0 0 24px rgba(0,0,0,0.38)",
			"align-self:center"
		].join(";");
		this.machine = machine;

		for (var i = 0; i < 9; i++) {
			var cell = document.createElement("div");
			cell.style.cssText = [
				"position:relative",
				"border:1px solid rgba(255,255,255,0.16)",
				"border-radius:8px",
				"background-color:#1f2937",
				"background-image:url('" + SPRITE_URL + "')",
				"background-repeat:no-repeat",
				"background-size:300% 200%",
				"box-shadow:inset 0 6px 16px rgba(0,0,0,0.26)",
				"overflow:hidden"
			].join(";");
			this.cells.push(cell);
			machine.appendChild(cell);
		}

		var lineLayer = document.createElement("div");
		lineLayer.style.cssText = [
			"position:absolute",
			"left:10px",
			"right:10px",
			"top:10px",
			"bottom:10px",
			"pointer-events:none"
		].join(";");
		this.lineLayer = lineLayer;
		machine.appendChild(lineLayer);
		panel.appendChild(machine);

		var status = document.createElement("div");
		status.style.cssText = "flex:0 0 auto;font-size:15px;line-height:1;color:#d1d5db;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		panel.appendChild(status);
		this.status = status;

		var score = document.createElement("div");
		score.style.cssText = "flex:0 0 auto;font-size:14px;line-height:1;color:#fde68a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		panel.appendChild(score);
		this.scoreText = score;

		var footer = document.createElement("div");
		footer.style.cssText = "display:flex;gap:8px;flex:0 0 auto";
		this.footer = footer;

		var action = document.createElement("button");
		action.type = "button";
		action.textContent = "START";
		action.style.cssText = this.buttonCss("#dc2626");
		action.onclick = function () {
			if (self.spinning) self.stopNextReel();
			else self.startRound();
		};
		footer.appendChild(action);
		this.actionButton = action;

		var finish = document.createElement("button");
		finish.type = "button";
		finish.textContent = "SETTLE";
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
		this.applyResponsiveLayout();

		this.keyHandler = function (e) {
			if (e.key === "Escape") self.destroy({ result: "cancel", reason: "escape" });
			if (e.key === " " || e.key === "Enter") {
				e.preventDefault();
				if (self.spinning) self.stopNextReel();
				else self.startRound();
			}
		};
		document.addEventListener("keydown", this.keyHandler);

		this.resizeHandler = function () {
			self.applyResponsiveLayout();
		};
		window.addEventListener("resize", this.resizeHandler);
	}

	Slot777Game.prototype.applyResponsiveLayout = function () {
		if (!this.overlay || !this.panel || !this.machine) return;
		var overlayWidth = this.overlay.clientWidth || 416;
		var overlayHeight = this.overlay.clientHeight || 416;
		var panelSize = Math.min(416, Math.floor(Math.min(overlayWidth, overlayHeight)));
		var unit = panelSize / 13;
		var panelPadding = unit * 0.25;
		var headerHeight = unit * 0.9;
		var statusHeight = unit * 0.65;
		var scoreHeight = unit * 0.55;
		var footerHeight = unit;
		var smallGap = unit * 0.08;
		var largeGap = unit * 0.16;
		var fixedHeight = panelPadding * 2 + headerHeight + largeGap + largeGap + statusHeight + smallGap + scoreHeight + largeGap + footerHeight;
		var machineSize = Math.min(unit * 8, panelSize - fixedHeight);
		var machinePadding = unit * 0.22;
		var cellRadius = Math.max(2, unit * 0.16);

		this.panel.style.width = panelSize + "px";
		this.panel.style.height = panelSize + "px";
		this.panel.style.padding = panelPadding + "px";
		this.panel.style.overflow = "hidden";
		this.panel.style.borderRadius = Math.max(3, unit * 0.18) + "px";
		if (this.header) {
			this.header.style.height = headerHeight + "px";
			this.header.style.marginBottom = largeGap + "px";
		}
		if (this.title) this.title.style.fontSize = Math.max(9, unit * 0.68) + "px";
		if (this.closeButton) {
			var closeSize = unit * 0.75;
			this.closeButton.style.width = closeSize + "px";
			this.closeButton.style.height = closeSize + "px";
			this.closeButton.style.fontSize = Math.max(8, unit * 0.5) + "px";
			this.closeButton.style.lineHeight = closeSize + "px";
		}
		this.machine.style.width = machineSize + "px";
		this.machine.style.height = machineSize + "px";
		this.machine.style.alignSelf = "center";
		this.machine.style.gap = Math.max(2, unit * 0.16) + "px";
		this.machine.style.padding = machinePadding + "px";
		this.machine.style.marginBottom = largeGap + "px";
		this.machine.style.borderRadius = Math.max(3, unit * 0.18) + "px";
		if (this.lineLayer) {
			var lineInset = machinePadding + "px";
			this.lineLayer.style.left = lineInset;
			this.lineLayer.style.right = lineInset;
			this.lineLayer.style.top = lineInset;
			this.lineLayer.style.bottom = lineInset;
		}
		for (var i = 0; i < this.cells.length; i++) {
			this.cells[i].style.borderRadius = cellRadius + "px";
		}
		if (this.status) {
			this.status.style.height = statusHeight + "px";
			this.status.style.marginBottom = smallGap + "px";
			this.status.style.fontSize = Math.max(8, unit * 0.4) + "px";
		}
		if (this.scoreText) {
			this.scoreText.style.height = scoreHeight + "px";
			this.scoreText.style.marginBottom = largeGap + "px";
			this.scoreText.style.fontSize = Math.max(8, unit * 0.36) + "px";
		}
		if (this.footer) {
			this.footer.style.height = footerHeight + "px";
			this.footer.style.gap = Math.max(4, Math.round(unit * 0.18)) + "px";
		}
		if (this.actionButton) {
			this.actionButton.style.height = footerHeight + "px";
			this.actionButton.style.fontSize = Math.max(8, unit * 0.42) + "px";
		}
		if (this.finishButton) {
			this.finishButton.style.height = footerHeight + "px";
			this.finishButton.style.fontSize = Math.max(8, unit * 0.42) + "px";
		}
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
			"cursor:pointer",
			"touch-action:manipulation",
			"-webkit-tap-highlight-color:transparent"
		].join(";");
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

	Slot777Game.prototype.randomizeGrid = function () {
		this.grid = [];
		for (var i = 0; i < 9; i++) this.grid.push(this.randomSymbol());
	}

	Slot777Game.prototype.renderGrid = function () {
		for (var i = 0; i < this.cells.length; i++) {
			var symbol = this.grid[i] || SYMBOLS[0];
			var x = symbol.sx === 0 ? "0%" : symbol.sx === 1 ? "50%" : "100%";
			var y = symbol.sy === 0 ? "0%" : "100%";
			this.cells[i].style.backgroundPosition = x + " " + y;
			this.cells[i].setAttribute("aria-label", symbol.label);
			this.cells[i].title = symbol.label;
			this.cells[i].style.opacity = this.spinning && !this.stoppedReels[i % 3] ? "0.92" : "1";
		}
	}

	Slot777Game.prototype.updateText = function (message) {
		if (this.status) this.status.textContent = message;
		if (this.scoreText) {
			this.scoreText.textContent = "Round " + this.round + "/" + this.maxRounds + " - total +" + this.score;
		}
		if (this.actionButton) {
			this.actionButton.disabled = this.finished || (!this.spinning && this.round >= this.maxRounds);
			this.actionButton.textContent = this.spinning ? "STOP " + (this.nextStopReel + 1) : "START";
			this.actionButton.style.opacity = this.actionButton.disabled ? "0.55" : "1";
		}
		if (this.finishButton) {
			this.finishButton.disabled = this.spinning || this.finished;
			this.finishButton.style.opacity = this.finishButton.disabled ? "0.55" : "1";
		}
	}

	Slot777Game.prototype.startRound = function () {
		if (this.spinning || this.finished || this.round >= this.maxRounds) return;
		var self = this;
		this.round++;
		this.spinning = true;
		this.stoppedReels = [false, false, false];
		this.nextStopReel = 0;
		this.clearWinningLines();
		this.updateText("Spinning. Press STOP to lock each reel.");
		this.spinTimer = setInterval(function () {
			for (var col = 0; col < 3; col++) {
				if (self.stoppedReels[col]) continue;
				for (var row = 0; row < 3; row++) self.grid[row * 3 + col] = self.randomSymbol();
			}
			self.renderGrid();
		}, 80);
	}

	Slot777Game.prototype.stopNextReel = function () {
		if (!this.spinning) return;
		this.stoppedReels[this.nextStopReel] = true;
		this.nextStopReel++;
		this.renderGrid();
		if (this.nextStopReel >= 3) {
			this.resolveRound();
			return;
		}
		this.updateText("Reel " + this.nextStopReel + " stopped. Press STOP again.");
	}

	Slot777Game.prototype.resolveRound = function () {
		if (this.spinTimer) clearInterval(this.spinTimer);
		this.spinTimer = null;
		this.spinning = false;

		var result = this.evaluateGrid();
		this.score += result.payout;
		if (result.payout > this.bestPayout) this.bestPayout = result.payout;
		this.winningLines = this.winningLines.concat(result.lines);
		this.drawWinningLines(result.lines);

		if (this.round >= this.maxRounds) {
			this.updateText(result.payout > 0 ? "Final win +" + result.payout + "." : "No winning line this round.");
			this.finish("complete");
			return;
		}
		this.updateText(result.payout > 0 ? "Win +" + result.payout + ". Press START for next round." : "No winning line. Press START for next round.");
	}

	Slot777Game.prototype.evaluateGrid = function () {
		var wins = [];
		var payout = 0;
		for (var i = 0; i < LINES.length; i++) {
			var line = LINES[i];
			var a = this.grid[line.cells[0]];
			var b = this.grid[line.cells[1]];
			var c = this.grid[line.cells[2]];
			if (!a || !b || !c || a.id !== b.id || b.id !== c.id) continue;
			var linePayout = a.id === "seven" ? 777 : 180;
			payout += linePayout;
			wins.push({
				id: line.id,
				name: line.name,
				symbol: a.id,
				payout: linePayout,
				cells: line.cells.slice()
			});
		}
		return { payout: payout, lines: wins };
	}

	Slot777Game.prototype.clearWinningLines = function () {
		if (this.lineLayer) this.lineLayer.innerHTML = "";
	}

	Slot777Game.prototype.drawWinningLines = function (lines) {
		this.clearWinningLines();
		if (!this.lineLayer || !lines.length) return;
		for (var i = 0; i < lines.length; i++) {
			var cells = lines[i].cells;
			var start = this.cellCenter(cells[0]);
			var end = this.cellCenter(cells[2]);
			var dx = end.x - start.x;
			var dy = end.y - start.y;
			var length = Math.sqrt(dx * dx + dy * dy);
			var angle = Math.atan2(dy, dx) * 180 / Math.PI;
			var line = document.createElement("div");
			line.style.cssText = [
				"position:absolute",
				"left:" + start.x + "%",
				"top:" + start.y + "%",
				"width:" + length + "%",
				"height:5px",
				"border-radius:5px",
				"background:#facc15",
				"box-shadow:0 0 10px rgba(250,204,21,0.9)",
				"transform-origin:left center",
				"transform:rotate(" + angle + "deg)"
			].join(";");
			this.lineLayer.appendChild(line);
		}
	}

	Slot777Game.prototype.cellCenter = function (index) {
		var col = index % 3;
		var row = Math.floor(index / 3);
		return {
			x: 16.6667 + col * 33.3333,
			y: 16.6667 + row * 33.3333
		};
	}

	Slot777Game.prototype.finish = function (reason) {
		if (this.finished || this.spinning) return;
		this.finished = true;
		var jackpot = false;
		for (var i = 0; i < this.winningLines.length; i++) {
			if (this.winningLines[i].symbol === "seven") jackpot = true;
		}
		this.result = {
			result: jackpot ? "jackpot" : this.score > 0 ? "win" : "lose",
			reason: reason,
			score: this.score,
			spins: this.round,
			bestPayout: this.bestPayout,
			winningLines: this.winningLines,
			grid: this.grid.map(function (symbol) { return symbol.id; })
		};
		this.updateText(this.score > 0 ? "Settled. Total +" + this.score + "." : "Settled. No prize.");
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
		if (this.resizeHandler) window.removeEventListener("resize", this.resizeHandler);
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
