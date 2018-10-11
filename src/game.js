function Game() {
  this._scoreBoard = [[1,2,3],
                      [4,5,6],
                      [7,8,9]];
  this._board = [[" "," "," "],
                 [" "," "," "],
                 [" "," "," "]];
  this._currentPlayer = "X";
  this._score = [];
}

Game.prototype.play = function(y, x) {
  if (this._validMoveCheck(x, y)) {
    throw new Error("Invalid move");
  } else {
    this._move(x, y);
  }
  this._displayBoard();
}

Game.prototype._move = function(x, y) {
  this._board[x][y] = this._currentPlayer;
  this._score.push(this._scoreBoard[x][y]);
};

Game.prototype._validMoveCheck = function(x, y) {
  return this._board[x][y] !== (" ");
};

Game.prototype._displayBoard = function () {
  for (var row = this._board.length; row > -1; row-=1) {
    console.log(this._board[row]);
  };
};
