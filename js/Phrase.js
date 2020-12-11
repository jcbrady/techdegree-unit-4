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
  }

  /**
   * checks to see if the letter selected by the player matches a letter in the phrase.
   */
  checkLetter(letter) {
    return this.phrase.includes(letter)
  }
  /**
   * reveals the letter(s) on the board that matches the player's selection. To reveal the
   * matching letter(s), select all of the letter DOM elements that
   * have a CSS class name that matches the selected letter and replace each selected
   * element's hide CSS class with the show CSS class.
   */
  showMatchedLetter(letter) {
    let match = document.getElementById("phrase").firstElementChild // ul element
    // this has to be a loop to check for multiple letter matches
    // otherwise it will just get the first match
    for (let i = 0; i < this.phrase.length; i++) {
      let phraseMatch = match.getElementsByClassName(letter)[i]
      // if the letter is in the class list, show it
      if (phraseMatch) {
        phraseMatch.classList = `show letter ${letter}`
        phraseMatch.textContent = letter
      }
    }
  }
}
