const { expect } = require('chai')
const tennisGame = require('../src/TennisGame')

describe('Score interpretation - test', () => {
    it("Score 0 should be describe as love", () => {
      const player = {
        score: 0
      }
      expect(tennisGame.describeScore(player)).to.equal("love");
    });

    it("Score 1 should be describe as fifteen", () => {
      const player = {
        score: 1
      }

      expect(tennisGame.describeScore(player)).to.equal('fifteen');
    });

    it("Score 2 should be describe as thirty", () => {
      const player = {
        score: 2
      }

      expect(tennisGame.describeScore(player)).to.equal('thirty');
    });

    it("Score 3 should be describe as forty", () => {
      const player = {
        score: 3
      }

      expect(tennisGame.describeScore(player)).to.equal('forty');
    });

    it("No score should be describe as undefined", () => {
      expect(tennisGame.describeScore({})).to.equal(undefined);
    });
});


describe('Game score computation when two players have same score - test', () => {
    it("Two Players with score of 0 should be love all", () => {
      const player1 = {
        score: 0
      }

      const player2 = {
        score: 0
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('love all');
    });

    it("Two Players with score of 1 should be fifteen all", () => {
      const player1 = {
        score: 1
      }

      const player2 = {
        score: 1
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('fifteen all');
    });

    it("Two Players with score of 2 should be thirty all", () => {
      const player1 = {
        score: 2
      }

      const player2 = {
        score: 2
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('thirty all');
    });

    it("Two Players with score of at least 3 should be deuce!", () => {
      const player1 = {
        score: 3
      }

      const player2 = {
        score: 3
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('deuce!');
    });
});


describe('Game score computation when two players have different score - test', () => {
    it("Player One with score of 0, and Player Two with score of 1 should be love, fifteen", () => {
      const player1 = {
        score: 0
      }

      const player2 = {
        score: 1
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('love, fifteen');
    });

    it("Player One with score of 0, and Player Two with score of 2 should be love, thirty", () => {
      const player1 = {
        score: 0
      }

      const player2 = {
        score: 2
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('love, thirty');
    });

    it("Player One with score of 0, and Player Two with score of 3 should be love, forty", () => {
      const player1 = {
        score: 0
      }

      const player2 = {
        score: 3
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('love, forty');
    });


    it("Player One with score of 1, and Player Two with score of 0 should be fifteen, love", () => {
      const player1 = {
        score: 1
      }

      const player2 = {
        score: 0
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('fifteen, love');
    });

    it("Player One with score of 1, and Player Two with score of 2 should be fifteen, thirty", () => {
      const player1 = {
        score: 1
      }

      const player2 = {
        score: 2
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('fifteen, thirty');
    });

    it("Player One with score of 1, and Player Two with score of 3 should be fifteen, forty", () => {
      const player1 = {
        score: 1
      }

      const player2 = {
        score: 3
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('fifteen, forty');
    });

    it("Player One with score of 2, and Player Two with score of 0 should be thirty, love", () => {
      const player1 = {
        score: 2
      }

      const player2 = {
        score: 0
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('thirty, love');
    });

    it("Player One with score of 2, and Player Two with score of 1 should be thirty, fifteen", () => {
      const player1 = {
        score: 2
      }

      const player2 = {
        score: 1
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('thirty, fifteen');
    });

    it("Player One with score of 2, and Player Two with score of 3 should be thirty, forty", () => {
      const player1 = {
        score: 2
      }

      const player2 = {
        score: 3
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('thirty, forty');
    });

    it("Player One with score of 3, and Player Two with score of 0 should be thirty, love", () => {
      const player1 = {
        score: 3
      }

      const player2 = {
        score: 0
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('forty, love');
    });

    it("Player One with score of 3, and Player Two with score of 1 should be forty, fifteen", () => {
      const player1 = {
        score: 3
      }

      const player2 = {
        score: 1
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('forty, fifteen');
    });

    it("Player One with score of 3, and Player Two with score of 2 should be forty, thirty", () => {
      const player1 = {
        score: 3
      }

      const player2 = {
        score: 2
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('forty, thirty');
    });
});


describe('Deuce is scored, advantage to the players - test', () => {
    it("advantage to the Player One", () => {
      const player1 = {
        score: 4
      }

      const player2 = {
        score: 3
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('Advantage, Player 1');
    });

    it("advantage to the Player Two", () => {
      const player1 = {
        score: 3
      }

      const player2 = {
        score: 4
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('Advantage, Player 2');
    });
});

describe('Game set by having one of the players reaching 4 points - test', () => {
    it("Game won by Player One for scoring 4 points", () => {
      const player1 = {
        score: 4
      }

      const player2 = {
        score: 0
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('Game, Player 1');
    });

    it("Game won by Player One for scoring 5 points", () => {
      const player1 = {
        score: 5
      }

      const player2 = {
        score: 0
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('Game, Player 1');
    });

    it("Game won by Player Two for scoring 4 points", () => {
      const player1 = {
        score: 0
      }

      const player2 = {
        score: 4
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('Game, Player 2');
    });

    it("Game won by Player Two for scoring 5 points", () => {
      const player1 = {
        score: 0
      }

      const player2 = {
        score: 5
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('Game, Player 2');
    });
});

describe('Game set by in a deuce at least two points more than the opponent - test', () => {
    it("Game won by Player One for scoring 2 more points than opponent in deuce", () => {
      const player1 = {
        score: 5
      }

      const player2 = {
        score: 3
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('Game, Player 1');
    });

    it("Game not won by Player One for scoring 1 more points than opponent in deuce", () => {
      const player1 = {
        score: 4
      }

      const player2 = {
        score: 3
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('Advantage, Player 1');
    });

    it("Game won by Player Two for scoring 2 more points than opponent in deuce", () => {
      const player1 = {
        score: 3
      }

      const player2 = {
        score: 5
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('Game, Player 2');
    });

    it("Game not won by Player Two for scoring 1 more points than opponent in deuce", () => {
      const player1 = {
        score: 3
      }

      const player2 = {
        score: 4
      }

      expect(tennisGame.computeScore(player1, player2)).to.equal('Advantage, Player 2');
    });

});