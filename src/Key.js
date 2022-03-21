import React from "react";

/**
 * Creates a key with the given dataKey prop as the key
 */
class Key extends React.Component {
    render() {
        return <button onFocus={this.doThing}
         onClick={() => this.props.onClick(this.props.dataKey.letter)}
         style={{backgroundColor: this.props.dataKey.color, color: this.props.dataKey.color === "" ? "black" : "white"}}
         >{this.props.dataKey.letter}</button>;
    }

    /**
     * Make it not do messy weird stuff, like focus on the button
     * @param {*} e 
     */
    doThing(e) {
        e.target.blur()
    }
}

export default Key;