/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// game global
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
    game.handleInteraction(e.target)
  })
}
