import React, { Component } from 'react'
// import Word from './Word'
import '../styles/game.sass'
// import Board from './Board'

class PKExecution extends Component {
      constructor(props) {
          super(props)
      };
      render() {
          return (
              <li className={"Word__Letter" + (this.props.disabled ? "--disabled" : "")}>
                  {this.props.showLetter ? this.props.letter : null}
              </li>
          )
      }
  }

  PKExecution.propTypes = {
      letter: React.PropTypes.string,
      showLetter: React.PropTypes.bool,
      disabled: React.PropTypes.bool
  };

  class Word extends React.Component {
      constructor(props) {
          super(props);
      }

      render() {
          return (
              <div className="Word">
                  <ul className="Word__letters-list">
                      {this._showLetters()}
                  </ul>
              </div>
          )
      }

      /**
       * Renders boxes for letters in Word component.
       * Function checks how many boxes is disabled and enabled.
       * @returns {Array} ReactComponent      Letter
       * @private
       */
      _showLetters() {
          const word = this.props.word;
          const MAX_WORD_LENGTH = 11;
          const emptyFields = MAX_WORD_LENGTH - word.length;
          const correctLetters = this.props.correctLetters;
          const emptyArray = [];
          emptyArray.length = emptyFields;
          emptyArray.fill("");
          const allFields = emptyArray.concat(word);
          let key = 0;

          return allFields.map((letter) => {
              key++;
              const showLetter = correctLetters.includes(letter);
              const disabled = !letter;
              return (
                  <Letter
                      key={key}
                      letter={letter}
                      showLetter={showLetter}
                      disabled={disabled}
                  />
              );
          });
      }
  }

  Word.propTypes = {
      word: React.PropTypes.arrayOf(React.PropTypes.string),
      correctLetters: React.PropTypes.arrayOf(React.PropTypes.string)
  };

  class MissedLetters extends React.Component {
      constructor(props) {
          super(props);
      }

      render() {
          return (
              <div className="MissedLetters">
                  <p className="MissedLetters__title">You missed:</p>
                  <p className="MissedLetters__letters">{this.props.missedLetters}</p>
              </div>
          )
      }
  }

  MissedLetters.propTypes = {
      missedLetters: React.PropTypes.array
  };

  class HangmanImage extends React.Component {
      constructor(props) {
          super(props);
      }

      render() {
          const {
              head,
              neck,
              corpus,
              leftArm,
              leftHand,
              rightArm,
              rightHand,
              leftLeg,
              leftFoot,
              rightLeg,
              rightFoot
              } = this.props;

          return (
              <div className="HangmanImage">
                  <img className="HangmanImage__bar" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/bar_zpsp7h1usjl.png?t=1463427687'} />
                  {head ? <img className="HangmanImage__head" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/head_zpsktrcsy2m.png?t=1463427791'} /> : null}
                  {neck ? <img className="HangmanImage__neck" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/neck_zpsnugvdwje.png?t=1463427791'} /> : null}
                  {corpus ? <img className="HangmanImage__corpus" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/corpus_zpsigmgyuln.png?t=1463427791'} /> : null}
                  {leftArm ? <img className="HangmanImage__left-arm" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/left-arm_zpsqmbxxhu5.png'} /> : null}
                  {leftHand ? <img className="HangmanImage__left-hand" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/left-hand_zpsl1a7lf0f.png'} /> : null}
                  {rightArm ? <img className="HangmanImage__right-arm" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/right-arm_zpsahoos47r.png'} /> : null}
                  {rightHand ? <img className="HangmanImage__right-hand" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/left-hand_zpsl1a7lf0f.png'} /> : null}
                  {leftLeg ? <img className="HangmanImage__left-leg" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/left-leg_zpsodel4wcc.png'} /> : null}
                  {leftFoot ? <img className="HangmanImage__left-foot" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/left-foot_zpsjy3ggevd.png'} /> : null}
                  {rightLeg ? <img className="HangmanImage__right-leg" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/left-leg_zpsodel4wcc.png'} /> : null}
                  {rightFoot ? <img className="HangmanImage__right-foot" src={'http://i430.photobucket.com/albums/qq29/JustineOwl/left-foot_zpsjy3ggevd.png'} /> : null}
              </div>
          )
      }
  }

  HangmanImage.PropTypes = {
      head: React.PropTypes.bool,
      neck: React.PropTypes.bool,
      corpus: React.PropTypes.bool,
      leftArm: React.PropTypes.bool,
      leftHand: React.PropTypes.bool,
      rightArm: React.PropTypes.bool,
      rightHand: React.PropTypes.bool,
      leftLeg: React.PropTypes.bool,
      leftFoot: React.PropTypes.bool,
      rightLeg: React.PropTypes.bool,
      rightFoot: React.PropTypes.bool
  };

  class Button extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              showOverlay: false
          };
          this._onClick = this._onClick.bind(this);
      }

      render () {
          return (
              <buttton
                  className="GameOver-Button"
                  onClick={this._onClick}
              >
                  New word
              </buttton>
          )
      }

      /**
       * onClick button event handler.
       * Calls function onClick from props.
       */
      _onClick() {
          if (this.props.onClick) {
              this.props.onClick();
          }
      }
  }

  Button.PropTypes = {
      onClick: React.PropTypes.func
  };

  class Informations extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              showOverlay: false
          };
          this._onClick = this._onClick.bind(this);
      }

      render () {
          const {gameOverTitle} = this.props;
          return (
              <div className="GameOver-Informations__wrapper">
                  <h1 className="GameOver-Informations__title">
                      {gameOverTitle}
                  </h1>
                  <Button
                      onClick={this._onClick}
                  />
              </div>

          )
      }

      /**
       * onClick button event handler.
       * Calls function onClick from props.
       */
      _onClick() {
          if (this.props.onClick) {
              this.props.onClick();
          }
      }
  }

  Informations.PropTypes = {
      gameOverTitle: React.PropTypes.string,
      onClick: React.PropTypes.func
  };

  class Overlay extends React.Component {
      constructor(props) {
          super(props);

          this._onClick = this._onClick.bind(this);
      }

      render () {
          const title = 'Game over';
          const {showOverlay} = this.props;
          return (
              showOverlay ?
                  <div
                      className="Overlay"
                  >
                      <Informations
                          gameOverTitle={title}
                          onClick={this._onClick}
                      />
                  </div>
                  : null
          );
      }

      /**
       * onClick button event handler.
       * Calls function onClick from props.
       */
      _onClick() {
          if (this.props.onClick) {
              this.props.onClick();
          }
      }
  }

  Overlay.PropTypes = {
      showOverlay: React.PropTypes.bool.isRequired,
      onClick: React.PropTypes.func
  };

  class GameBoard extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              missedLetters: [],
              correctLetters: [],
              word: [],
              gameOver: false
          };

          this._clickOnGameBoardHandler = this._clickOnGameBoardHandler.bind(this);
          this._validateInput = this._validateInput.bind(this);
          this._checkLetter = this._checkLetter.bind(this);
          this._onClickNewGame = this._onClickNewGame.bind(this);
      }

      componentDidMount() {
          this._getNewWord();
      }

      componentWillUnmount() {
          this.serverRequest.abort();
      }

      render() {
          const {
              word,
              missedLetters,
              correctLetters,
              gameOver
              } = this.state;
          const len = missedLetters.length;
          return (
              <div
                  className="GameBoard"
                  onClick={this._clickOnGameBoardHandler}
              >
                  <HangmanImage
                      bar={true}
                      head={len > 0}
                      neck={len > 1}
                      corpus={len > 2}
                      leftArm={len > 3}
                      leftHand={len > 4}
                      rightArm={len > 5}
                      rightHand={len > 6}
                      leftLeg={len > 7}
                      leftFoot={len > 8}
                      rightLeg={len > 9}
                      rightFoot={len > 10}
                  />
                  <MissedLetters
                      missedLetters={missedLetters}
                  />
                  <Word
                      word={word}
                      correctLetters={correctLetters}
                  />
                  <input
                      ref={(input) => this.inputField = input}
                      value=''
                      className="GameBoard__input"
                      onChange={this._validateInput}
                  />
                  <Overlay
                      showOverlay={gameOver}
                      onClick={this._onClickNewGame}
                  />
              </div>
          );
      }

      /**
       * Function generates new word using API from wordnik.com.
       * @private
       */
      _getNewWord() {
          const source = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=11&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
          this._focusInput();
          this.serverRequest = $.get(source, (result) => {
              const word = result.word.toUpperCase();
              this._validateWord(word);
          });
      }

      /**
       * Function validates given word according to given regExp.
       * Replaces all incorrect words to the empty strings.
       * @param {String} wordToCheck      Word given to validate.
       * @private
       */
      _validateWord(wordToCheck) {
          const exclude = /[^A-Z]/g;
          if (wordToCheck) {
              const word = wordToCheck.replace(exclude, "").split("");
              this.setState({word});
          }
      }

      /**
       * Function validates input if there are only letters.
       * Non-letters chars are ignoring.
       * @param {Object} e        Event object from input.
       * @private
       */
      _validateInput(e) {
          const onlyLetters = /[a-zA-Z]/;
          if (e && !this.state.gameOver) {
              const letter = e.target.value;
              if (onlyLetters.test(letter)) {
                  this._checkLetter(letter.toUpperCase());
              }
          }

      }

      /**
       * Function checks if given letter is concluded in the guessed word.
       * @param {String} letter       Checking letter.
       * @private
       */
      _checkLetter(letter) {
          const missedLetters = this.state.missedLetters;
          const rightLetters = this.state.correctLetters;
          const word = this.state.word;
          if (letter) {
              if (!missedLetters.includes(letter)) {
                  if (!word.includes(letter)) {
                      this._addAsMissedLetter(letter);
                  } else {
                      if (!rightLetters.includes(letter)) {
                          this._addRightLetter((letter));
                      }
                  }
              }
          }
      }

      /**
       * Function adds guessed letters to the correctLetters state.
       * After adding to the correctLetters state function checks if the word is guessed.
       * If the word is guessed state of gameOver is set at true.
       * @param {String} letter       Guessed letter.
       * @private
       */
      _addRightLetter(letter) {
          let {correctLetters} = this.state;
          const {word} = this.state;
          if (letter) {
              this.setState({
                  correctLetters: [].concat(correctLetters, letter)
              }, () => {
                  let corrects = this.state.correctLetters;
                  let checkIfComplete = _.without(word,...corrects);
                  if (!(checkIfComplete.length)) {
                      this.setState({
                          gameOver: true
                      });
                  }
              });
          }
      }

      /**
       * Function adds missed letters to the missedLetters state.
       * After adding to the missedLetters state function checks if the MAX_MISSED_LETTERS is reached.
       * If the MAX_MISSED_LETTERS is reached state of gameOver is set at true.
       * @param {String} letter       Missed letter.
       * @private
       */
      _addAsMissedLetter(letter) {
          const missedLetters = this.state.missedLetters;
          const MAX_MISSED_LETTERS = 11;
          if (letter) {
              this.setState({
                  missedLetters: [].concat(missedLetters, letter)
              }, () => {
                  if ((this.state.missedLetters.length) >= MAX_MISSED_LETTERS) {
                      this.setState({
                          gameOver: true
                      });
                  }
              });
          }
      }

      /**
       * Click on GameBoard handler.
       * Sets focus to the input field.
       * @private
       */
      _clickOnGameBoardHandler() {
          this._focusInput();
      }

      /**
       * Sets focus to the input field.
       * @private
       */
      _focusInput() {
          if(this.inputField !== null) {
              this.inputField.focus();
          }
      }

      /**
       * Click on the New Game button handler.
       * Resets all basic states and triggers function to get new word.
       * @private
       */
      _onClickNewGame() {
          this.setState({
              missedLetters: [],
              correctLetters: [],
              word: [],
              gameOver: false
          }, () => {
              this._getNewWord();
          });
      }
  }

  render() {
    return<div>
      <GameBoard />,
      document.getElementById('app')
      </div>
  }

//   constructor () {
//     super()
//     this.state = {
//       solution: 'PIRATE KING',
//       used: [],
//       matched: []
//     }
//   }
//   onPlay = (character) => {
//
//   this.state.used.push(character)
//   for(let i = 0; i < this.state.solution.length; i++) {
//     if( character === this.state.solution[i]){
//       this.state.matched.push(character)
//       if( this.state.matched.length === this.state.solution.length){
//         alert('You Win')
//       }
//     }
//   }
//   if(this.state.used.length >= 8){
//     alert('You Lose')
//   }
//   this.setState({
//     used: this.state.used
//   })
// }
//   render() {
//     return <div className='App'>
//       <h1>HANGMAN</h1>
//       <Word solution={this.state.solution} used={this.state.used} />
//       <Board onPlay={this.onPlay}/>
//     </div>
//   }
// }

export default PKExecution
