/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrase = new Phrase("Life is like chocolates.", "Want a free bowl of soup?", "Forest Gump meets E.T.")
const game = new Game()

console.log(phrase)
console.log(phrase.phrase)
console.log(phrase.phrase1)
console.log(`Phrase - phrase: ${phrase.phrase}`)
console.log(game)

console.log(game.phrases)

game.phrases.forEach((phrase, index) => {
  console.log(`Phrase ${index} - phrase: ${phrase.phrase}`)
})
