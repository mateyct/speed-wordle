import logo from './logo.svg';
import './App.css';
import React from 'react';
import Key from './Key';
import Grid from './Grid';
import Keyboard from './Keyboard';

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    currentWord: "",
    guessNumber: 0
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
          <Grid currentWord={currentWord} guessNumber={this.state.guessNumber} />
          {/*Keyboard*/}
          <Keyboard whenClicked={this.typeLetter.bind(this)}/>
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
