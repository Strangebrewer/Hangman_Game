// Defining variables
var words = ["soundgarden", "tool", "nirvana", "live", "morcheeba", "beck"];
var currentWord;
var currentWordArray = [];
var blanksArray = [];
var alreadyGuessed = [];
var wins = 0;
var losses = 0;
var remainingCorrectGuesses;
var remainingWrongGuesses = 6;

// This function sets the initial conditions of each game and runs the game functions
function newGame() {
  getLetters();
  hangmanGame();
  remainingCorrectGuesses = currentWordArray.length;
  // remainingWrongGuesses = 6;
  document.getElementById("game-outcome").innerHTML = "";
  document.getElementById("game-begin").innerHTML = "Good Luck!";
  document.getElementById("guesses-remaining").innerHTML = remainingWrongGuesses;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("word-blanks").innerHTML = blanksArray.join(' ')
}

//This function resets the arrays after each game
function reset() {
  currentWordArray.length = 0;
  blanksArray.length = 0;
  alreadyGuessed.length = 0;
  words.shift();
}

// This function sets the currentWord variable, pushes each letter into the currentWordArray, and puts a blank into blanksArray for each letter, joining them into one string for display in the html:
function getLetters() {
  currentWord = words[0];
  for (i = 0; i < currentWord.length; i++) {
    currentWordArray.push(currentWord.charAt(i));
    blanksArray.push('_');
  }
}

// This is the main game function
function hangmanGame() {

  document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();
    var wrongUserGuess;

    if (currentWordArray.includes(userGuess)) {
      var wrongUserGuess = false;
    } else {
      wrongUserGuess = true;
    }

    for (i = 0; i < currentWordArray.length; i++) {
      if (userGuess === currentWordArray[i]) {
        blanksArray.splice(i, 1, currentWordArray[i]);
        currentWordArray.splice(i, 1, "narf");
        document.getElementById("word-blanks").innerHTML = blanksArray.join(' ');
        remainingCorrectGuesses--;
      }
    }

    if (alreadyGuessed.includes(userGuess)) {

    } else if (wrongUserGuess) {
      alreadyGuessed.push(userGuess);
      remainingWrongGuesses--;
    }

    if (remainingCorrectGuesses <= 0) {
      wins++;
      document.getElementById("wins").innerHTML = wins;
      document.getElementById("game-outcome").innerHTML = "YOU WIN!";
      document.getElementById("game-begin").innerHTML = "Press Any Key to Play Again";
      reset();
      document.onkeyup = function () {
        newGame();
      }
      console.log(words[0]);
    }

    if (remainingWrongGuesses <= 0) {
      losses++;
      document.getElementById("losses").innerHTML = losses;
      document.getElementById("game-outcome").innerHTML = "YOU LOSE!";
      document.getElementById("game-begin").innerHTML = "Press Any Key to Play Again";
      document.getElementById("word-blanks").innerHTML = currentWord;
      reset();
      document.onkeyup = function () {
        newGame();
      }
      console.log(words[0]);
    }

    document.getElementById("guesses-remaining").innerHTML = remainingWrongGuesses;
    document.getElementById("already-guessed").innerHTML = alreadyGuessed.join(', ');
  }

}


// This starts the game
document.onkeyup = function () {
  newGame();
}