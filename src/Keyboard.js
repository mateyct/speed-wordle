import React from "react";
import Key from "./Key";

/**
 * The main keyboard
 */
class Keyboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="keyboard">
                <div className="row">
                    <Key dataKey="q" onClick={this.props.whenClicked}/>
                    <Key dataKey="w" onClick={this.props.whenClicked}/>
                    <Key dataKey="e" onClick={this.props.whenClicked}/>
                    <Key dataKey="r" onClick={this.props.whenClicked}/>
                    <Key dataKey="t" onClick={this.props.whenClicked}/>
                    <Key dataKey="y" onClick={this.props.whenClicked}/>
                    <Key dataKey="u" onClick={this.props.whenClicked}/>
                    <Key dataKey="i" onClick={this.props.whenClicked}/>
                    <Key dataKey="o" onClick={this.props.whenClicked}/>
                    <Key dataKey="p" onClick={this.props.whenClicked}/>
                </div>
                <div className="row">
                    <Key dataKey="a" onClick={this.props.whenClicked}/>
                    <Key dataKey="s" onClick={this.props.whenClicked}/>
                    <Key dataKey="d" onClick={this.props.whenClicked}/>
                    <Key dataKey="f" onClick={this.props.whenClicked}/>
                    <Key dataKey="g" onClick={this.props.whenClicked}/>
                    <Key dataKey="h" onClick={this.props.whenClicked}/>
                    <Key dataKey="j" onClick={this.props.whenClicked}/>
                    <Key dataKey="k" onClick={this.props.whenClicked}/>
                    <Key dataKey="l" onClick={this.props.whenClicked}/>
                </div>
                <div className="row">
                    <button dataKey="↵" className="one-and-a-half" onClick={this.props.whenEntered}>enter</button>
                    <Key dataKey="z" onClick={this.props.whenClicked}/>
                    <Key dataKey="x" onClick={this.props.whenClicked}/>
                    <Key dataKey="c" onClick={this.props.whenClicked}/>
                    <Key dataKey="v" onClick={this.props.whenClicked}/>
                    <Key dataKey="b" onClick={this.props.whenClicked}/>
                    <Key dataKey="n" onClick={this.props.whenClicked}/>
                    <Key dataKey="m" onClick={this.props.whenClicked}/>
                    <button dataKey="←" className="one-and-a-half" onClick={this.props.whenBacked}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                    </svg>
                    </button>
                </div>
          </div>
        )
    }
}

export default Keyboard;