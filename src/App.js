import './App.css';
import React from 'react';
import Grid from './Grid';
import Keyboard from './Keyboard';
import Word from './Word';
import Letter from './Letter';
import words from './words/words';

class App extends React.Component {
constructor(props) {
  super(props)
  // make array of letters
  let keyList = [ 
    [
      new Letter("q"),
      new Letter("w"),
      new Letter("e"),
      new Letter("r"),
      new Letter("t"),
      new Letter("y"),
      new Letter("u"),
      new Letter("i"),
      new Letter("o"),
      new Letter("p")
    ],
    [
      new Letter("a"),
      new Letter("s"),
      new Letter("d"),
      new Letter("f"),
      new Letter("g"),
      new Letter("h"),
      new Letter("j"),
      new Letter("k"),
      new Letter("l")
    ],
    [
      new Letter("z"),
      new Letter("x"),
      new Letter("c"),
      new Letter("v"),
      new Letter("b"),
      new Letter("n"),
      new Letter("m")
    ]
  ]
  this.state = {
    guesses: [
      new Word(),
      new Word(),
      new Word(),
      new Word(),
      new Word(),
      new Word()
    ],
    guessNumber: 0,
    correct: "super",
    keyList: keyList
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
          <h1>Speed Wordle</h1>
          {/*display guesses*/}
          <Grid guessList={guesses} guessNumber={this.state.guessNumber} />
          {/*Keyboard*/}
          <Keyboard whenClicked={this.typeLetter.bind(this)} whenEntered={this.enter.bind(this)} whenBacked={this.backspace.bind(this)} letterList={this.state.keyList}/>
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
    if(guesses[guessNumber].letterAt >= 5) return
    // copy the name
    let guessEdit = guesses.slice()
    guessEdit[guessNumber].addLetter(keyAdd)
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
    guessEdit[guessNumber].removeLetter()
    // set state to copy
    this.setState({
      guesses: guessEdit
    });
  }

  enter() {
    const {guessNumber, guesses, correct} = this.state
    // if out of guesses, return
    if(guessNumber + 1 > 6) {
      return
    }
    let word = ""
    // loop to get the words from the guess
    for(let i = 0; i < correct.length; i++) {
      word += guesses[guessNumber].word[i].letter
    }
    // if the word isn't in the list
    if(!words[word]) {
      return
    }
    // if less, erase word
    if(guesses[guessNumber].letterAt < 5) {
      // handle resetting
      let guessCopy = guesses.slice()
      guessCopy[guessNumber].resetWord()
      this.setState({
        guesses: guessCopy
      })
      return
    }
    // check correctness of word
    for(let i = 0; i < correct.length; i++) {
      word += guesses[guessNumber].word[i].letter
      if(correct.charAt(i) == guesses[guessNumber].word[i].letter) {
        guesses[guessNumber].word[i].setLevel(2)
      }
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
