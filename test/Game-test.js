const chai = require("chai")
const expect = chai.expect

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const Game = require("../src/Game")

describe('Game', () => {
  it('should be a function', () =>{
    expect(Game).to.be.a('function')
  })

  it('should keep track of current round', () => {
    const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
    const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
    const deck = new Deck([card1, card2])
    const round = new Round(deck)
    const game = new Game()
    // game.start()
    expect(game.currentRound).to.equal(undefined)
  })

  // it('should ', () => {
  //   const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
  //   const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
  //   const deck = new Deck([card1, card2])
  //   const round = new Round(deck)
  // })

})

