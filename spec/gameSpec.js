describe("Game", function() {

  beforeEach(function() {
    game = new Game
  });

  it("should create a 3x3 2d array", function() {
    expect(game._board).toEqual([[" "," "," "],
                                 [" "," "," "],
                                 [" "," "," "]])
  });

  it("should create a score board array", function() {
    expect(game._scoreBoard).toEqual([[1,2,3],
                                      [4,5,6],
                                      [7,8,9]])
  });

  it("should create a current player variable", function() {
    expect(game._currentPlayer).toEqual("X")
  });

  describe("#play", function() {

    it("throws error if coordinates are already taken", function() {
      game.play(1, 1);
      expect(function() {
        game.play(1, 1)
      }).toThrow(new Error("Invalid move"))
    });

    it("should return 'X' as the winner", function() {
      game.play(0, 0);
      game.play(0, 1);
      game.play(1, 1);
      game.play(0, 2);

      expect(game.play(2, 2)).toEqual("X wins! GAME OVER!")
    });

    it("should return 'O' as the winner", function() {
      game.play(0, 0);
      game.play(0, 2);
      game.play(0, 1);
      game.play(1, 2);
      game.play(1, 1);

      expect(game.play(2, 2)).toEqual("O wins! GAME OVER!")
    });

    it("should return a draw message on a draw", function() {
      game.play(1, 1); game.play(0, 0); game.play(2, 0);
      game.play(0, 2); game.play(0, 1); game.play(2, 1);
      game.play(1, 2); game.play(1, 0);

      expect(game.play(2, 2)).toEqual("Draw! GAME OVER!")
    });
  });

});
