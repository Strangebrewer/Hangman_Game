//items I may need:
// an if / else statement to check if the key event is one of the letters:
  // if it is, then it appears in its place;
  // if it isn't, then it appears in the letters guessed place
// declare variables, such as wins = 0;, remainingGuesses = 15;

// I'll need an array and a function or method to push wrong guesses to that array, and then figure out how to display the contents of that array

// I'll need an array of words for the game

// I'll need a way of taking the letters of the game words and putting them in the _ _ _ _ _ format.


var incGuessRem = 8;
var wins = 0;

if (incGuessRem === 0) {

}

// the function hangmanGame (triggered by 'press any key') should include:
  // drawing one word out of the 'bands' array
  // resetting incGuessRem to 8
  // resetting
var hangmanRules = {
    bands = ["soundgarden", "nirvana", "alice in chains", "beastie boys", "tool", "beck", "butthole surfers", "morcheeba", "live"]
  , currentWord = bands[0]
  , incGuessRem = 8
  , wins = 0
  , correctGuess: function() {

  }

  , incorrectGuess: function() {

  }
}

function hangmanGame() {

}

document.onkeyup = function(letterGuess) {
  // for loop wrapping this part based on incorrect guesses remaining
  if (letterGuess.key ===  letterFromWord) {
    hangmanRules.correctGuess();
  } else if (letterGuess.key === wrongLetter) {
    hangmanRules.incorrectGuess();
  }
}

  // Determines which key was pressed
  // next part might be an if statement:
  // if (event.key === "correct letter") {
    // display letter in game console
  // } else {
    // push letter to 'letters guessed' array and display it
    // subtract 1 from guesses remaining
  // }

  // will need to wrap the if / else statement in a for loop based on guesses remaining
  // Consider making it 'incorrect guesses remaining'. Correct guesses wouldn't subtract anything.

  // Conditions for ending the game:
    // All incorrect guesses remaining have been used up: Game Over!
    // All letters have been revealed. You Win!
    // When game ends, remove all from 'letters guessed' array.

document.onkeyup = function() {
  hangmanGame();
}