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
    guesses: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    guessNumber: 0
  };
  this.keyLetter = this.keyLetter.bind(this)
}

  /**
   * Set up some of my listeners
   */
  componentDidMount() {
    document.addEventListener("keydown", this.keyLetter)
  }

  /**
   * Remove the listener
   */
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyLetter)
  }

  /**
   * When letters are typed by the player
   * @param {*} e Generic event information
   */
  keyLetter(e) {
    if(this.state.guessNumber + 1 > 6) {
      return
    }
    // check if it's a letter
    if(this.isLetter(e.key)) {
      // exit if the word is too long
      this.typeLetter(e.key)
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
    const {guesses} = this.state;
    return (
      <div className="App">
       
        <header className="App-header">
          {/*display guesses*/}
          <Grid guessList={guesses} guessNumber={this.state.guessNumber} />
          {/*Keyboard*/}
          <Keyboard whenClicked={this.typeLetter.bind(this)} whenEntered={this.enter.bind(this)} whenBacked={this.backspace.bind(this)}/>
        </header>
      </div>
    );
  }

  /**
   * Adds a letter to the end of the current word
   * @param {*} keyAdd The letter this represents
   */
  typeLetter(keyAdd) {
    const {guesses, guessNumber} = this.state
    if(guessNumber + 1 > 6) {
      return
    }
    // get out so we can't add more letters
    if(guesses[guessNumber].length >= 5) return
    // copy the name
    let guessEdit = guesses.slice()
    guessEdit[guessNumber] = guessEdit[guessNumber] + keyAdd
    this.setState({
      guesses: guessEdit
    })
  }

  /**
   * Removes the last letter
   */
  backspace() {
    const {guesses, guessNumber} = this.state
    if(guessNumber + 1 > 6) {
      return
    }
    // make a copy and remove one
    let guessEdit = guesses.slice()
    guessEdit[guessNumber] = guessEdit[guessNumber].substring(0, guessEdit[guessNumber].length - 1)
    // set state to copy
    this.setState({
      guesses: guessEdit
    });
  }

  enter() {
    const {guessNumber, guesses} = this.state
    if(guessNumber + 1 > 6) {
      return
    }
    // if less, erase word
    if(guesses[guessNumber].length < 5) {
      let guessCopy = guesses.slice()
      guessCopy[guessNumber] = ""
      this.setState({
        guesses: guessCopy
      })
      return
    }
    // if more, increase guessNumber
    this.setState({
      guessNumber: guessNumber + 1
    })
    if(guessNumber + 1 > 6 /*TODO: || guess == correctWord*/) {
      // end game
      return
    }
  }
}

export default App;
