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
  });

});
