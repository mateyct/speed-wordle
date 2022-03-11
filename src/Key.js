import React from "react";

/**
 * Creates a key with the given dataKey prop as the key
 */
class Key extends React.Component {
    render() {
        return <button onClick={() => this.props.onClick(this.props.dataKey)}>{this.props.dataKey}</button>;
    }
}

export default Key;