# Tic Tac Toe Tech Test!

## The Brief

The rules of tic-tac-toe are as follows:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

## User Stories

```
As a player
So I can play tic-tac-toe
I want to be able to start a game

As a player
So I can play with my friend
I want to be able to play a two-player game

As a player
So I know who has won
I want to be notified of a winner
```

## How to Run

Currently if can only be 'played' through the use of console commands with the view create a user interface at a later stage.

```
git clone git@github.com:LondonJim/Tic-Tac-Toe-Tech-Test.git
```
```
cd Tic-Tac-Toe-Tech-Test
```
Run `ticTacToe.html` with directories in your client.
Use the client console with the following commands:

New game:
```
game = new Game
```
Start game with coordinates on a 3x3 grid where 0,0 is bottom left corner, example play (first player is always X):
```
game.play(1,1)
```
Play continues until a winner is declared or a draw takes place.
Currently the rows of the board are outputted to the console so some sort of visual feedback can take place.

## Testing
Testing used `Jasmine v3.2.1`.

Run `SpecRunner.html` with directories in your client
