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
  startGame() {}
  /**
   * getRandomPhrase(): this method randomly retrieves one of the phrases stored
   * in the phrases array and returns it.
   */
  getRandomPhrase() {}
  /**
   * controls most of the game logic. (see notes)
   */
  handleInteraction() {}
  removeLife() {}
  checkForWin() {}
  gameOver() {}
  /**
   * create phrases for the game and return an array.
   */
  createPhrases() {
    const phraseArray = ["When in Rome, Do as the Romans Do.", "If at first you don't succede, try, try again.", "Life is like a box of chocolates, try, try again ... enjoy!", "Life is what you make it.", "Programming is fun, if you don't think Abbot and Costello are funny."]
    return this.phrases.push(phraseArray)
  }
}
