const data = require("./data");
const prototypeQuestions = data.prototypeData;

class Card {
  constructor(cardId, cardQuestion, cardAnswers, cardRightAnswer) {
    this.id = cardId;
    this.question = cardQuestion;
    this.answers = cardAnswers;
    this.correctAnswer = cardRightAnswer;
}

module.exports = Card;
