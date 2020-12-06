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
    const letters = this.phrase.split("") // ? creates array[l, e, t, t, e, r, s]
    const ul = document.querySelector("#phrase ul")
    // use forEach loop or a for of loop instead?
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#Examples

    for (let i = 0; i < letters.length; i++) {
      let li = document.createElement("li")
      if (letters[i] === " ") {
        li.setAttribute("class", `space ${letters[i]}`)
      } else {
        li.setAttribute("class", `hide letter ${letters[i]}`)
      }
      ul.appendChild(li)
    }
    return letters
    //return `newPhrase: ${newPhrase.phrase} letters: ${letters}`
  }

  /**
   * checks to see if the letter selected by the player matches a letter in the phrase.
   */
  checkLetter(letter) {
    console.log("letter: " + letter)
    return this.phrase.includes(letter)
  }
  /**
   * reveals the letter(s) on the board that matches the player's selection. To reveal the
   * matching letter(s), select all of the letter DOM elements that
   * have a CSS class name that matches the selected letter and replace each selected
   * element's hide CSS class with the show CSS class.
   */
  showMatchedLetter(letter) {
    console.log(`test communication ${letter}`)
    //
    if (this.checkLetter) {
      let match
      for (let i = 0; i < this.phrase.length; i++) {
        match = document.getElementsByClassName(`"hide letter ${letter}"`)[i]
        console.log(match)
        //match.className = `"show letter ${letter}"`)[i]
        //match.textContent(letter)
      }
      return match
    }
  }
} // end phrase class object
