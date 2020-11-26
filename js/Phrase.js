/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase()
  }

  /**
   * adds letter placeholders to the display when the game starts.
   */
  addPhraseToDisplay() {
    // ?
    const game = new Game()
    const newPhrase = game.getRandomPhrase()
    const letters = newPhrase.phrase.split("") // ? creates array[l, e, t, t, e, r, s]
    const ul = document.querySelector("#phrase ul")

    // use forEach loop or a for of loop instead?
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#Examples
    for (let i = 0; i < letters.length; i++) {
      let li = document.createElement("li")
      if (letters === " ") {
        li.setAttribute("class", `hide space ${letters[i]}`)
        li.textContent = letters[i]
      } else {
        li.setAttribute("class", `hide letter ${letters[i]}`)
        li.textContent = letters[i]
      }
      ul.appendChild(li)
    }
    return `newPhrase: ${newPhrase.phrase} letters: ${letters}`
  }

  /**
   * checks to see if the letter selected by the player matches a letter in the phrase.
   */
  checkLetter() {}
  /**
   * reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that
   * have a CSS class name that matches the selected letter and replace each selected
   * element's hide CSS class with the show CSS class.
   */
  showMatchedLetter() {}
} // end phrase class object
