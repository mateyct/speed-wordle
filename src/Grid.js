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
        return (
            <div id="word-grid">
                <h1>{this.props.currentWord === "" ? "_" : this.props.currentWord}</h1>
            </div>
        )
    }
}

export default Grid;