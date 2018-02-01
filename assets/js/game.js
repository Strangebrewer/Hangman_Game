// WORKING CODE
// This is my word array - no multi-word names unless I get the game built and have time to go back and figure out parsing spaces vs. letters:
var bands = ["tool", "soundgarden", "nirvana", "live", "morcheeba", "beck"];
// This variable defines the word currently in play
var currentWord = bands[0];
var currentWordArray = [];
var blanksArray = [];
var displayWord;
var displayBlanks = [];
var wins = 0;
var remainingCorrectGuesses; // = currentWordArray.length minus non-unique letters
var remainingWrongGuesses = 6;
var alreadyGuessed = [];
// This function takes the currentWord, pushes each letter into the currentWordArray and then puts a blank into blanksArray for each letter; then, it joins them into one string for display in the html:
function getLetters() {
  for (i = 0; i < currentWord.length; i++) {
    currentWordArray.push(currentWord.charAt(i));
    blanksArray.push('_');
  }
}

// getLetters();
// Test - it works!
//  console.log(currentWordArray.join(' '));
//  console.log(blanksArray.join(' '));

// GAME FUNCTION
function hangmanGame() {

  document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();
    var wrongUserGuess;

    if (currentWordArray.includes(userGuess)) {
      var wrongUserGuess = false;
    } else {
      wrongUserGuess = true;
    }

    if (wrongUserGuess) {
      alreadyGuessed.push(userGuess);
      remainingWrongGuesses--;
    }

    for (i = 0; i < currentWordArray.length; i++) {
      if (userGuess === currentWordArray[i]) {
        blanksArray.splice(i, 1, currentWordArray[i]);
        remainingCorrectGuesses--;
        document.getElementById("word-blanks").innerHTML = blanksArray.join(' ');
      }
    }

    if (remainingCorrectGuesses <= 0) {
      alert("YOU WIN!"); // Change this to an html element...
      wins++;

    }

    document.getElementById("guesses-remaining").innerHTML = remainingWrongGuesses;
    document.getElementById("already-guessed").innerHTML = alreadyGuessed.join(', ');
    console.log(remainingCorrectGuesses);
  }

}


// START GAME
document.onkeyup = function newGame() {
  hangmanGame();
  getLetters();
  remainingCorrectGuesses = currentWordArray.length;
  document.getElementById("game-begin")
  document.getElementById("guesses-remaining").innerHTML = remainingWrongGuesses;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("word-blanks").innerHTML = blanksArray.join(' ');
}