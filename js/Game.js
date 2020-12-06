/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0
    this.phrases = this.createPhrases()
    /**
     * This is the Phrase object that’s currently in play.
     * The initial value is null.
     * Within the startGame() method, this property will be set to the Phrase object
     * returned from a call to the getRandomPhrase() method.
     */
    this.activePhrase = null
  }
  /**
   * hides the start screen overlay,
   * calls the getRandomPhrase() method
   * sets the activePhrase property with the chosen phrase.
   * adds phrase to the board by calling the addPhraseToDisplay() method
   * (on the active Phrase object).
   */
  startGame() {
    this.activePhrase = this.getRandomPhrase()
    // addPhraseToDisplay is in the Phrase class
    this.activePhrase.addPhraseToDisplay()
    // hide overlay div
    document.getElementById("overlay").style.display = "none"
  }
  /**
   * getRandomPhrase(): this method randomly retrieves one of the phrases stored
   * in the phrases array and returns it.
   */

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[randomNum]
  }
  /**
   * controls most of the game logic. (see notes)
   */
  handleInteraction() {}
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {}
  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    // 2 ways to check
    // if all letters have the "show" class or if there are NO "hide" classes left
    // or if all of the number of letters in the phrase array have been used, use a counter?
    console.log(this.activePhrase)
    // console.log(this.activePhrase.phrase.length)
    const checkHideClass = document.getElementsByClassName("hide")
    console.log(checkHideClass)
    // if there are no items in the DOM array of objects
    if (checkHideClass.length === 0) {
      return true // player wins game
    } else {
      return false
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {}
  /**
   * create phrases for the game and return an array.
   */
  createPhrases() {
    const phraseArray = [new Phrase("one"), new Phrase("Two"), new Phrase("Phraser Three"), new Phrase("Phraser Four"), new Phrase("Phraser five yes 5")]
    return phraseArray
  }
}
