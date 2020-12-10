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
  handleInteraction(button) {
    console.log(button)
    console.log(button.textContent)
    // PSEUDO CODE: if checkletter = active phrase letter, add show class
    // else subtract a point
    //
    //
    //let keyDisabled = (checkLetter(button)
    // call checkLetter method on the active phrase button that was clicked.
    // if theres a match
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
    // disable button that was clicked and add the relevant classes
    button.disabled = true
  }
  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    console.log(this.missed)
    if (this.missed < 4) {
      const scoreboard = document.getElementById("scoreboard")
      const imageElements = scoreboard.getElementsByTagName("img")
      let currentImage = imageElements[this.missed] // increment array value with missed
      //console.log(currentImage.src.includes("liveHeart.png")) // true
      if (currentImage.src.includes("liveHeart.png")) {
        //console.log(currentImage)
        //console.log(currentImage.src)
        let lostHeart = currentImage.src.replace("liveHeart.png", "lostHeart.png")
        currentImage.src = lostHeart
        //console.log((currentImage.src = lostHeart))
        //console.log(lostHeart)
        //console.log(imageElements[this.missed])
        //console.log("lostHeart (above), currentImage (below)")

        //return (currentImage = lostHeart)
        //console.log(currentImage)
      }
    } else {
      //this.missed = 0
      this.gameOver()
    }

    // for (let imageElement of imageElements) {
    //   console.log(imageElement.src)
    //   imageElement.src = "../images/lostHeart.png"
    //   console.log(imageElement.src)
    // }
    this.missed++
  }
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
    //console.log(checkHideClass)
    // if there are no items in the DOM array of objects
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

    // clean up the DOM (game board)
    let prevPhrase = document.getElementById("phrase").firstElementChild // ul
    //console.log(prevPhrase) // ul
    prevPhrase.innerHTML = ""
    //
    const keyReset = document.querySelectorAll(".keyrow") //array of keyrow divs with key buttons
    for (const items of keyReset) {
      let drillDown = items.children // HTMLCollection of button.key, button.wrong, & button.chosen
      for (const element of drillDown) {
        element.className = "key"
        element.removeAttribute("disabled")
      }
    }
    // or with forEach
    // keyReset.forEach(function (reset) {
    //   console.log(reset.children)
    //   reset.removeAttribute("disabled")
    //   reset.className = "key"
    // })
    // or a for loop
    // for (let i = 0; i < keyReset.length; i++) {
    //   console.log(keyReset[i])
    // }

    // let wrongBtns = document.getElementsByClassName("wrong")
    // console.log(wrongBtns)
    // if (wrongBtns) {
    //   for (const element of wrongBtns) {
    //     element.className = "key"
    //     element.removeAttribute("disabled")
    //     //element.setAttribute("enabled", "enabled")
    //     //console.log(element.classList)
    //     //element.classList.remove("wrong")
    //     //element.classList.add("key")
    //     //wrongBtns.className.remove("wrong")
    //     //wrongBtns.className.add("key")
    //   }
    // }
    // for (const element of qwertyBtns) {
    //   if (element.className === "wrong") {
    //     console.log(element)
    //   }
    // console.log(element.className)
    // }
    // for (let i = 0; i < qwertyBtns.length; i++) {
    //   qwertyBtns[i]
    //   console.log(qwertyBtns[i])
    // }

    //let liItems = prevPhrase.children // nodeList Array of li items
    //console.log(liItems)
    //prevPhrase.remove(liItems)
    // is a loop needed?
    //prevPhrase.removeChild("li")
    //prevPhrase.removeChild(liItems)
    //liItems.display = "none"
  }
  /**
   * create phrases for the game and return an array.
   */
  createPhrases() {
    const phraseArray = [new Phrase("One"), new Phrase("Two"), new Phrase("Three"), new Phrase("Four"), new Phrase("Five")]
    return phraseArray
  }
}
