import logo from './logo.svg';
import './App.css';
import React from 'react';
import Key from './Key';

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    currentWord: ""
  };
}

  /**
   * Set up some of my listeners
   */
  componentDidMount() {
    document.addEventListener("keydown", this.keyLetter.bind(this))
  }

  /**
   * When letters are typed by the player
   * @param {*} e Generic event information
   */
  keyLetter(e) {
    const {currentWord} = this.state
    // check if it's a letter
    if(this.isLetter(e.key)) {
      // exit if the word is too long
      if(currentWord.length >= 5) return
      this.setState({
        currentWord: currentWord + e.key
      })
    }
    // if backspace pressed
    else if(e.key === "Backspace") {
      this.backspace()
    }
    // if enter pressed
    else if(e.key === "Enter") {
      this.enter()
    }
  }

  /**
   * Checks if a given string is a letter in the alphabet
   * @param {*} str To check if it's a letter
   * @returns If it's a letter
   */
  isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  render() {
    const {currentWord} = this.state;
    return (
      <div className="App">
       
        <header className="App-header">
          {/*display guesses*/}
          <div id="word-grid">
            <h1>{currentWord === "" ? "_" : currentWord}</h1>
          </div>
          {/*Keyboard*/}
          <div id="keyboard">
            <div className="row">
              <Key dataKey="q" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="w" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="e" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="r" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="t" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="y" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="u" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="i" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="o" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="p" onClick={this.typeLetter.bind(this)}/>
            </div>
            <div className="row">
              <Key dataKey="a" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="s" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="d" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="f" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="g" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="h" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="j" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="k" onClick={this.typeLetter.bind(this)}/>
              <Key dataKey="l" onClick={this.typeLetter.bind(this)}/>
            </div>
            <div className="row">
                <button dataKey="↵" className="one-and-a-half" onClick={this.enter.bind(this)}>enter</button>
                <Key dataKey="z" onClick={this.typeLetter.bind(this)}/>
                <Key dataKey="x" onClick={this.typeLetter.bind(this)}/>
                <Key dataKey="c" onClick={this.typeLetter.bind(this)}/>
                <Key dataKey="v" onClick={this.typeLetter.bind(this)}/>
                <Key dataKey="b" onClick={this.typeLetter.bind(this)}/>
                <Key dataKey="n" onClick={this.typeLetter.bind(this)}/>
                <Key dataKey="m" onClick={this.typeLetter.bind(this)}/>
                <button dataKey="←" className="one-and-a-half" onClick={this.backspace.bind(this)}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                  </svg>
                </button>
            </div>
          </div>
        
        

        </header>
      </div>
    );
  }

  /**
   * Adds a letter to the end of the current word
   * @param {*} keyAdd The letter this represents
   */
  typeLetter(keyAdd) {
    const {currentWord} = this.state
    // get out so we can't add more letters
    if(currentWord.length >= 5) return
    this.setState({
      currentWord: currentWord + keyAdd
    })
  }

  /**
   * Removes the last letter
   */
  backspace() {
    const {currentWord} = this.state
    // set state to copy
    this.setState({
      currentWord: currentWord.substring(0, currentWord.length - 1)
    });
  }

  enter() {
    const {currentWord} = this.state
    // for now, just erase the word
    this.setState({
      currentWord: ""
    })
  }
}

export default App;
