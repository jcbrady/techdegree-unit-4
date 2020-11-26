/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

////// TESTS ///////
// const phrase = new Phrase("hello my name is ...")
const game = new Game()
//
// console.log(phrase)
// console.log(phrase.phrase)
// console.log(phrase.phrase1)
// console.log(`Phrase - phrase: ${phrase.phrase}`)
// console.log(game)
console.log(game.phrases)
//
// game.phrases.forEach((newPhrase, index) => {
//   console.log(`Phrase ${index} - phrase: ${newPhrase.phrase}`)
// })

// const logPhrase = function (phrase) {
//   console.log(`Phrase: `, phrase)
//   console.log(`Phrase - phrase: `, phrase.phrase)
// }
// const game = new Game()
// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())

game.getRandomPhrase().addPhraseToDisplay()
