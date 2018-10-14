describe("Player", function() {

  beforeEach(function() {
      player = new Player("X")
  });

  it("should instantiate with a type", function() {
    expect(player.type).toEqual("X")
  });

  it("should create a score array", function() {
    expect(player.score).toEqual([])
  });
});
