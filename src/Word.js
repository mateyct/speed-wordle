import Letter from "./Letter"

/**
 * Wrapper for a Wordle word
 */
class Word {
    constructor() {
        this.word = [
            new Letter(""),
            new Letter(""),
            new Letter(""),
            new Letter(""),
            new Letter("")
        ]
        this.letterAt = 0
    }

    /**
     * Add a letter to the word
     * @param {string} toAdd 
     */
    addLetter(toAdd) {
        if(this.letterAt >= 6) return
        this.word[this.letterAt].letter = toAdd
        this.letterAt++
    }

    /**
     * Remove a letter from the word
     */
    removeLetter() {
        if(this.letterAt > 0) {
            // operators are fun
            this.word[--this.letterAt].letter = ""
        } 
    }

    /**
     * Empty out the word
     */
    resetWord() {
        this.word = [
            new Letter(""),
            new Letter(""),
            new Letter(""),
            new Letter(""),
            new Letter("")
        ]
        this.letterAt = 0
    }
}

export default Word;