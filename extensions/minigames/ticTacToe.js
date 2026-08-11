(function () {
	"use strict";

	window.MotaMiniGames = window.MotaMiniGames || {};

	function TicTacToeGame(options, onFinish) {
		this.options = options || {};
		this.onFinish = onFinish || function () {};
		this.board = ["", "", "", "", "", "", "", "", ""];
		this.turn = "X";
		this.ended = false;
		this.destroyed = false;
		this.overlay = null;
		this.panel = null;
		this.boardElement = null;
		this.status = null;
		this.cells = [];
		this.lockedBeforeStart = false;
		this.keyHandler = null;
		this.resizeHandler = null;
	}

	TicTacToeGame.prototype.start = function () {
		this.lockedBeforeStart = core.status.lockControl;
		core.lockControl();
		this.createOverlay();
		this.render();
	}

	TicTacToeGame.prototype.createOverlay = function () {
		var self = this;
		var overlay = document.createElement("div");
		overlay.id = "ticTacToeMiniGame";
		overlay.setAttribute("role", "dialog");
		overlay.setAttribute("aria-label", "Tic Tac Toe mini game");
		overlay.style.cssText = [
			"position:fixed",
			"left:0",
			"top:0",
			"right:0",
			"bottom:0",
			"width:100vw",
			"height:100vh",
			"z-index:220",
			"display:flex",
			"align-items:center",
			"justify-content:center",
			"background:radial-gradient(circle at 50% 42%,rgba(59,130,246,0.18),rgba(8,12,18,0.95) 68%),rgba(8,12,18,0.95)",
			"font-family:Arial,'Microsoft JhengHei','Microsoft YaHei',sans-serif",
			"color:#f7f9fc",
			"pointer-events:auto"
		].join(";");

		var panel = document.createElement("div");
		panel.style.cssText = [
			"width:720px",
			"height:720px",
			"box-sizing:border-box",
			"padding:18px",
			"border:1px solid rgba(147,197,253,0.34)",
			"border-radius:8px",
			"background:linear-gradient(160deg,#162033,#0f172a 72%,#090d18)",
			"box-shadow:0 18px 52px rgba(0,0,0,0.58),inset 0 0 30px rgba(59,130,246,0.1)",
			"display:flex",
			"flex-direction:column",
			"overflow:hidden"
		].join(";");
		this.panel = panel;

		var header = document.createElement("div");
		header.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px";

		var title = document.createElement("div");
		title.textContent = "圈圈叉叉";
		title.style.cssText = "font-size:28px;font-weight:900;line-height:1.2;color:#dbeafe;text-shadow:0 0 12px rgba(147,197,253,0.45)";
		header.appendChild(title);

		var close = document.createElement("button");
		close.type = "button";
		close.textContent = "x";
		close.title = "關閉";
		close.style.cssText = [
			"width:34px",
			"height:34px",
			"border:1px solid rgba(255,255,255,0.28)",
			"border-radius:6px",
			"background:#1f2937",
			"color:#fff",
			"font-size:22px",
			"line-height:28px",
			"cursor:pointer"
		].join(";");
		close.onclick = function () {
			self.destroy(self.result || { result: "cancel", reason: "close" });
		};
		header.appendChild(close);
		panel.appendChild(header);

		var status = document.createElement("div");
		status.style.cssText = "height:30px;margin-bottom:12px;font-size:16px;color:#cbd5e1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis";
		panel.appendChild(status);
		this.status = status;

		var board = document.createElement("div");
		board.style.cssText = [
			"display:grid",
			"grid-template-columns:repeat(3,1fr)",
			"gap:8px",
			"width:100%",
			"aspect-ratio:1/1",
			"flex:1 1 auto",
			"min-height:0"
		].join(";");
		this.boardElement = board;
		for (var i = 0; i < 9; i++) {
			var cell = document.createElement("button");
			cell.type = "button";
			cell.dataset.index = i;
			cell.style.cssText = [
				"border:1px solid rgba(255,255,255,0.22)",
				"border-radius:8px",
				"background:linear-gradient(#f8fafc,#dbeafe)",
				"color:#111827",
				"font-size:48px",
				"font-weight:800",
				"line-height:1",
				"cursor:pointer",
				"box-shadow:inset 0 8px 18px rgba(255,255,255,0.62),0 4px 0 rgba(15,23,42,0.32)"
			].join(";");
			cell.onclick = function () {
				self.play(parseInt(this.dataset.index));
			};
			this.cells.push(cell);
			board.appendChild(cell);
		}
		panel.appendChild(board);

		var footer = document.createElement("div");
		footer.style.cssText = "display:flex;gap:8px;margin-top:14px";

		var restart = document.createElement("button");
		restart.type = "button";
		restart.textContent = "重開";
		restart.style.cssText = this.buttonCss("#2563eb");
		restart.onclick = function () {
			self.reset();
		};
		footer.appendChild(restart);

		var finish = document.createElement("button");
		finish.type = "button";
		finish.textContent = "返回";
		finish.style.cssText = this.buttonCss("#475569");
		finish.onclick = function () {
			self.destroy(self.result || { result: "cancel", reason: "back" });
		};
		footer.appendChild(finish);
		panel.appendChild(footer);

		overlay.appendChild(panel);
		(document.body || core.dom.gameDraw).appendChild(overlay);
		this.overlay = overlay;
		this.applyResponsiveLayout();

		this.keyHandler = function (e) {
			if (e.key === "Escape") self.destroy({ result: "cancel", reason: "escape" });
			var index = parseInt(e.key, 10);
			if (index >= 1 && index <= 9) self.play(index - 1);
		};
		document.addEventListener("keydown", this.keyHandler);
		this.resizeHandler = function () { self.applyResponsiveLayout(); };
		window.addEventListener("resize", this.resizeHandler);
	}

	TicTacToeGame.prototype.applyResponsiveLayout = function () {
		if (!this.overlay || !this.panel || !this.boardElement) return;
		var width = this.overlay.clientWidth || window.innerWidth || 416;
		var height = this.overlay.clientHeight || window.innerHeight || 416;
		var margin = Math.max(8, Math.min(width, height) * 0.035);
		var panelSize = Math.max(180, Math.min(760, Math.floor(Math.min(width, height) - margin * 2)));
		var unit = panelSize / 13;
		this.panel.style.width = panelSize + "px";
		this.panel.style.height = panelSize + "px";
		this.panel.style.padding = Math.max(10, unit * 0.36) + "px";
		if (this.status) this.status.style.fontSize = Math.max(12, unit * 0.42) + "px";
		if (this.boardElement) this.boardElement.style.gap = Math.max(5, unit * 0.18) + "px";
		for (var i = 0; i < this.cells.length; i++) {
			this.cells[i].style.fontSize = Math.max(38, unit * 1.8) + "px";
		}
	}

	TicTacToeGame.prototype.buttonCss = function (background) {
		return [
			"flex:1",
			"height:38px",
			"border:0",
			"border-radius:6px",
			"background:" + background,
			"color:#fff",
			"font-size:15px",
			"cursor:pointer"
		].join(";");
	}

	TicTacToeGame.prototype.play = function (index) {
		if (this.ended || this.board[index]) return;
		this.board[index] = this.turn;
		var winner = this.getWinner();
		if (winner) {
			this.finish(winner);
			return;
		}
		if (this.board.every(function (value) { return value; })) {
			this.finish("draw");
			return;
		}
		this.turn = this.turn === "X" ? "O" : "X";
		this.render();
	}

	TicTacToeGame.prototype.getWinner = function () {
		var lines = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8],
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			[0, 4, 8], [2, 4, 6]
		];
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i];
			var value = this.board[line[0]];
			if (value && value === this.board[line[1]] && value === this.board[line[2]]) return value;
		}
		return null;
	}

	TicTacToeGame.prototype.finish = function (winner) {
		this.ended = true;
		this.render();
		var result = winner === "draw" ? "draw" : "win";
		if (this.status) this.status.textContent = winner === "draw" ? "平手" : winner + " 獲勝";
		this.result = {
			result: result,
			winner: winner,
			score: winner === "draw" ? 0 : 1,
			board: this.board.slice()
		};
	}

	TicTacToeGame.prototype.render = function () {
		for (var i = 0; i < this.cells.length; i++) {
			var value = this.board[i];
			this.cells[i].textContent = value;
			this.cells[i].disabled = this.ended || !!value;
			this.cells[i].style.color = value === "O" ? "#be123c" : "#111827";
			this.cells[i].style.opacity = this.cells[i].disabled && !value ? "0.85" : "1";
		}
		if (this.status && !this.ended) this.status.textContent = this.turn + " 的回合。可點格子，也可按 1-9。";
	}

	TicTacToeGame.prototype.reset = function () {
		this.board = ["", "", "", "", "", "", "", "", ""];
		this.turn = "X";
		this.ended = false;
		this.result = null;
		this.render();
	}

	TicTacToeGame.prototype.destroy = function (result) {
		if (this.destroyed) return;
		this.destroyed = true;
		var finalResult = result || this.result || { result: "cancel", reason: "destroy" };
		if (this.keyHandler) document.removeEventListener("keydown", this.keyHandler);
		if (this.resizeHandler) window.removeEventListener("resize", this.resizeHandler);
		if (this.overlay && this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
		if (!this.lockedBeforeStart) core.unlockControl();
		this.onFinish(finalResult);
	}

	window.MotaMiniGames.ticTacToe = {
		start: function (options, onFinish) {
			var game = new TicTacToeGame(options, onFinish);
			game.start();
			return game;
		}
	};
})();
