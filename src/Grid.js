import React from "react";

/**
 * How the grid information is displayed
 */
class Grid extends React.Component {
    /**
     * Input the current word
     * @param {*} props 
     */
    constructor(props) {
        super(props)
        // set state to show the current word and guess number
        this.state = {
            word: props.currentWord,
            guess: props.guessNumber
        }
    }
}