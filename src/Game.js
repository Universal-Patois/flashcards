const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Round = require("../src/Round");
const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");

class Game {
  constructor(round) {
    this.currentRound = round;
  }

  start() {
    const prototypeQuestions = data.prototypeData;
    const currentDeck = new Deck(prototypeQuestions);
    const currentRound = new Round(currentDeck);
    this.currentRound = currentRound;
    this.printMessage(currentDeck, currentRound);
    this.printQuestion(currentRound);
    if (this.currentRound.turn === 30) {
      this.currentRound.endRound();
    }
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
