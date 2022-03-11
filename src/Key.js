import React from "react";

/**
 * Creates a key with the given dataKey prop as the key
 */
class Key extends React.Component {
    constructor(props) {
        super(props)
        // set the state to hold the key
        this.state = {
            key: props.dataKey,
            clickEvent: props.onClick
        }
    }
    render() {
        return <button onClick={this.runThing.bind(this)}>{this.state.key}</button>;
    }

    runThing() {
        this.state.clickEvent(this.state.key)
    }
}

export default Key;