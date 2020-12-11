/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0
    this.phrases = this.createPhrases()
    /**
     * activePhrase is the Phrase object that’s currently in play.
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
    // get random number phrase
    this.activePhrase = this.getRandomPhrase()
    // addPhraseToDisplay (method is in the Phrase class)
    this.activePhrase.addPhraseToDisplay()
    // hide overlay div
    document.getElementById("overlay").style.display = "none"

    // HACK bug fix
    // BUG - last clicked key button from previous game is disabled in the next game
    // this over rides it
    const bugFix1 = document.getElementsByClassName("key")
    for (let i = 0; i < bugFix1.length; i++) {
      // console.log(i)
      // console.log(bugFix1[i])
      // bugFix1[i].className = "key" // if className resets all classes, why doesn't this reset it to key class?
      bugFix1[i].disabled = false
      //bugFix1[i].removeAttribute("disabled")
    }
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomNum = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[randomNum]
  }

  /**
   * controls most of the game logic.
   * button parameter is from e.target, runs every time a player clicks a button
   * if the clicked letter = active phrase letter, add show class, else subtract a point
   * check for a win and call the gameOver(true) if won, removeLife() if not won
   */
  handleInteraction(button) {
    console.log(button)
    // Call checkLetter method on the active phrase button that was clicked.
    // returns a boolean. If theres a match, call showMatchedLetter
    let key = this.activePhrase.checkLetter(button.textContent)
    if (key) {
      this.activePhrase.showMatchedLetter(button.textContent)
      button.classList = "chosen"
      // if we matched, reveal the letter and check if the game is won, otherwise, lose a point
      if (this.checkForWin()) {
        this.gameOver(true)
      }
    } else {
      // add the 'wrong' class
      button.classList = "wrong"
      this.removeLife()
    }
    // disable button that was clicked
    // BUG FIX??? // restarting game leaves the last clicked button disabled!!!
    // putting this line in the above if statement didn't fix it
    // going to try gameOver() reset
    button.disabled = true
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    if (this.missed < 4) {
      const scoreboard = document.getElementById("scoreboard")
      const imageElements = scoreboard.getElementsByTagName("img")
      let currentImage = imageElements[this.missed] // increment array value with missed
      if (currentImage.src.includes("liveHeart.png")) {
        let lostHeart = currentImage.src.replace("liveHeart.png", "lostHeart.png")
        currentImage.src = lostHeart
      }
    } else {
      this.gameOver()
    }
    // increment missed (point lost)
    this.missed++
  }

  /**
   * Checks for winning move (called by handleInteraction every time button is clicked)
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    // if all letters have the "show" class or if there are NO "hide" classes left
    const checkHideClass = document.getElementsByClassName("hide")
    // if there are no hide classes (checkHideClass DOM array empty)
    if (checkHideClass.length === 0) {
      return this.gameOver(true) // player wins game
    } else {
      return false
    }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    console.log("Game Over from the method")
    document.getElementById("overlay").style.display = "block"
    let gameOverMessage = document.getElementById("game-over-message")
    const changeBG = document.querySelector("#overlay")

    if (gameWon) {
      gameOverMessage.textContent = "You Win!"
      changeBG.style.backgroundColor = "green"
    } else {
      gameOverMessage.textContent = "Oh Well, Better Luck Next Time."
      changeBG.style.backgroundColor = "maroon"
    }

    // Clean up the DOM (game board)
    // Empty out the list items
    const prevPhrase = document.getElementById("phrase").firstElementChild // ul
    prevPhrase.innerHTML = ""

    // Reset the button keys

    // TRIED THIS TO FIX BUG, but className wasn't working as expected
    // const keyResetFixBug = document.querySelectorAll(".key")
    // console.log(keyResetFixBug) // NodeList(23) shouldn't there be 25 if array starts at 0???
    // for (let i = 0; i < keyResetFixBug.length; i++) {
    //   keyResetFixBug[i].disabled = false
    //   console.log(keyResetFixBug[i]) // <button class="key">b</button>
    //   keyResetFixBug.className = "key"
    // }

    // OLD WAY - with nested "for of" loops
    // BUG - the last clicked button is disabled and leftover from previous game
    // HACK FIX - Did an overRide in the startGame() method and the game seems to work
    const keyReset = document.querySelectorAll(".keyrow") //Nodelist of keyrow divs with key buttons
    for (const items of keyReset) {
      let drillDown = items.children // HTMLCollection of button.key, button.wrong, & button.chosen
      console.log(drillDown)
      for (const element of drillDown) {
        element.className = "key"
        element.removeAttribute("disabled")
        console.log(element)
      }
    }

    // Reset the hearts
    const hearts = document.querySelectorAll(".tries img")
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].setAttribute("src", "images/liveHeart.png")
    }
  }

  /**
   * create phrases for the game and return an array.
   */
  createPhrases() {
    const phraseArray = [new Phrase("One"), new Phrase("Two"), new Phrase("Three"), new Phrase("Four"), new Phrase("Five")]
    return phraseArray
  }
}
