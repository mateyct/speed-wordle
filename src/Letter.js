/**
 * Holds the letter and it's color
 */
class Letter {
    constructor(letter) {
        this.letter = letter
        this.color = ""
        this.level = 0
    }

    /**
     * Which level of color
     * 0 - grey
     * 1 - yellow
     * 2 - green
     * @param {*} level Level to set it to
     */
    setLevel(level) {
        if(level === 0 && this.level <= 0) {
            this.color = "grey"
            this.level = level
        }
        else if(level === 1 && this.level < 1) {
            this.color = "#c9b458"
            this.level = level
        }
        else if(level === 2 && this.level < 2) {
            this.color = "green"
            this.level = level
        }
    }

    makeCopy() {
        let copy = new Letter(this.letter)
        copy.color = this.color
        copy.level = this.level
        return copy
    }
}

export default Letter;