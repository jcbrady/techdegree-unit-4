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
  removeLife() {}
  checkForWin() {}
  gameOver() {}
  /**
   * create phrases for the game and return an array.
   */
  createPhrases() {
    const phraseArray = [new Phrase("Phrase 1 (one)"), new Phrase("Phrase Two"), new Phrase("Phrase Three"), new Phrase("Phrase Four"), new Phrase("Phrase five (yes 5)")]
    return phraseArray
  }
}
