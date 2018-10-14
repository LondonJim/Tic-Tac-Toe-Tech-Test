function Game(playerOne = new Player("X"),
              playerTwo = new Player("O")) {
  this._scoreBoard = [[1,2,3],
                      [4,5,6],
                      [7,8,9]];
  this._board = [[" "," "," "],
                 [" "," "," "],
                 [" "," "," "]];
  this._playerOne = playerOne
  this._playerTwo = playerTwo
  this._currentPlayer = this._playerOne
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
  this._board[x][y] = this._currentPlayer.type;
  this._currentPlayer.score.push(this._scoreBoard[x][y]);
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
  if (this._currentPlayer.score.includes(pos1) &&
      this._currentPlayer.score.includes(pos2) &&
      this._currentPlayer.score.includes(pos3)) {
  this._gameNotifier = `${this._currentPlayer.type} wins! GAME OVER!`;
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
  if (this._currentPlayer === this._playerTwo) {
    this._currentPlayer = this._playerOne
  } else {
    this._currentPlayer = this._playerTwo
  };
};

Game.prototype._draw = function() {
  if (this._playerOne.score.length + this._playerTwo.score.length === 9) {
    this._gameNotifier = ("Draw! GAME OVER!")
  }
}
