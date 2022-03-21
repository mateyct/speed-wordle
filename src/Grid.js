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
                {/*Add all of the rows in*/}
                <GridRow guessRow={guessList[0]}/>
                <GridRow guessRow={guessList[1]}/>
                <GridRow guessRow={guessList[2]}/>
                <GridRow guessRow={guessList[3]}/>
                <GridRow guessRow={guessList[4]}/>
                <GridRow guessRow={guessList[5]}/>
            </div>
        )
    }
}

function GridRow(props) {
    const {guessRow} = props;
    // add each box
    return (
        <div className="gridRow">
            <GridBox cLetter={guessRow.word[0]}/>
            <GridBox cLetter={guessRow.word[1]}/>
            <GridBox cLetter={guessRow.word[2]}/>
            <GridBox cLetter={guessRow.word[3]}/>
            <GridBox cLetter={guessRow.word[4]}/>
        </div>
    )
}

/**
 * renders a grid box
 * @param {*} props 
 */
function GridBox(props) {
    return <div className="gridBox" style={{"backgroundColor": props.cLetter.color, color: props.cLetter.color === "" ? "black" : "white"}}>{props.cLetter.letter}</div>
}

export default Grid;