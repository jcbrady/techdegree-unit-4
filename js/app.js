/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

////// TESTS ///////
// const phrase = new Phrase("hello my name is 'test'")
// const game = new Game()
//
// console.log(phrase)
// console.log(phrase.phrase)
// console.log(`Phrase - phrase: ${phrase.phrase}`)
// console.log(game)
// console.log(game.phrases)
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

////////// *Notes: I'm surprised you can put the .addPhraseToDisplay() and it works.
////////// getRandomPhrase() - creates a random number, which returns this.phrases[number] (the game property),
////////// this.phrases is an array of phrases created by calling createPhrases(). (through function hoisting,
////////// this has already happened when the game object gets contstructed). The reason it's accessible with
////////// .addPhraseToDisplay() is because it's a new Phrase()
////////// I'm confused about why and how this works
// game.getRandomPhrase().addPhraseToDisplay()
// console.log(game.getRandomPhrase()) // this will return a new Phrase object with the phrase as an argument.

// const game = new Game()
// game.startGame()
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`)

// game global, let indicates an ability to change
let game
document.getElementById("btn__reset").addEventListener("click", function () {
  // new game instance created after button is clicked
  game = new Game()
  game.startGame()
})

// add eventListeners to key buttons
const letterButton = document.querySelectorAll(".key")
for (let i = 0; i < letterButton.length; i++) {
  letterButton[i].addEventListener("click", function (e) {
    console.log(e.target)
    console.log("* Note: call handleInteraction()")
  })
}

// event delegation method
// document.getElementById("qwerty").addEventListener("click", function (e) {
//   e.preventDefault
//   const keyrow = document.getElementsByClassName("keyrow")
//   for (let i = 0; i < keyrow.length; i++) {
//     console.log(keyrow[i].children)
//     console.log(keyrow[i].getAttribute("class"))
//   }
//   if (e.target === keyrow) {
//     e.preventDefault
//     console.log("keyrow")
//     console.log(e.target)
//   } else {
//     console.log("else")
//     console.log(e.target)
//   }
//   console.log(keyrow)
// })
