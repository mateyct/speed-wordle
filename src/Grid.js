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
    }

    // render the thing
    render() {
        const {guessList, guessNumber} = this.props 
        return (
            <div id="word-grid">
                <h1>{guessList[guessNumber] === "" ? "_" : guessList[guessNumber]}</h1>
            </div>
        )
    }
}

export default Grid;