function Game() {
  this._scoreBoard = [[1,2,3],
                      [4,5,6],
                      [7,8,9]];
  this._board = [[" "," "," "],
                 [" "," "," "],
                 [" "," "," "]];
  this._currentPlayer = "X";
  this._playerOneScore = [];
  this._playerTwoScore = [];
  this._currentScore = this._playerOneScore;
  this._gameNotifier = ""
};

Game.prototype.play = function(y, x) {
  if (this._validMoveCheck(x, y)) {
    throw new Error("Invalid move");
  } else {
    this._move(x, y);
  }
  this._displayBoard();
  this._checks(this._currentPlayer);
  this._swapPlayers();
  return this._gameNotifier
};

Game.prototype._move = function(x, y) {
  this._board[x][y] = this._currentPlayer;
  this._currentScore.push(this._scoreBoard[x][y]);
};

Game.prototype._validMoveCheck = function(x, y) {
  return this._board[x][y] !== (" ");
};

Game.prototype._displayBoard = function () {
  for (var row = this._board.length; row > -1; row-=1) {
    console.log(this._board[row]);
  };
};

Game.prototype._winCheck = function(pos1, pos2 ,pos3) {
  if (this._currentScore.includes(pos1) &&
      this._currentScore.includes(pos2) &&
      this._currentScore.includes(pos3)) {
  this._gameNotifier = `${this._currentPlayer} wins! GAME OVER!`;
  };
};

Game.prototype._checks = function() {
  this._winCheck(1,2,3);
  this._winCheck(4,5,6);
  this._winCheck(7,8,9);
  this._winCheck(1,4,7);
  this._winCheck(2,5,8);
  this._winCheck(3,6,9);
  this._winCheck(1,5,9);
  this._winCheck(3,5,7);
  this._draw()
};

Game.prototype._swapPlayers = function() {
  if (this._currentPlayer === "O") {
    this._currentPlayer = "X"
    this._currentScore = this._playerOneScore
  } else {
      this._currentPlayer = "O"
      this._currentScore = this._playerTwoScore
  };
};

Game.prototype._draw = function() {
  if (this._playerOneScore.length + this._playerTwoScore.length === 9) {
    this._gameNotifier = ("Draw! GAME OVER!")
  }
}
