const Card = require("./Card");
const data = require("./data");
const prototypeQuestions = data.prototypeData;

class Turn {
  constructor(userGuess, currentCard) {
    this.guess = userGuess;
    this.card = currentCard || new Card();
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer;
  }

  giveFeedback() {
    if (!this.evaluateGuess()) {
      return "incorrect!";
    } else {
      return "correct!";
    }
  }
}

module.exports = Turn;
