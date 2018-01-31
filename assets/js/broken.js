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
var remainingGuesses = 0;
var alreadyGuessed = [];
// This function takes the currentWord, pushes each letter into the currentWordArray and then puts a blank into blanksArray for each letter; then, it joins them into one string for display in the html:
function getLetters() {

  for (i = 0; i < currentWord.length; i++) {
    currentWordArray.push(currentWord.charAt(i));
  }

  for (i = 0; i < currentWordArray.length; i++) {
    blanksArray.push('_');
  }
  displayWord = currentWordArray.join(' ');
  displayBlanks = blanksArray.join(' ');
}

// START GAME
document.onkeyup = function() {
  hangmanGame();
}

function hangmanGame() {

  document.onkeyup = function(event) {
    var userGuess = event.key;

    for (i = 0; i < currentWordArray.length; i++) {

      if (userGuess === currentWordArray[i]) {
        blanksArray.splice(i, 1, currentWordArray[i]);
        document.getElementById("word-blanks").innerHTML = blanksArray.join(' ');
      } 
      
      else if (userGuess !== currentWordArray[i] && !(userGuess in currentWordArray)) {
        alreadyGuessed.push(userGuess);
        document.getElementById("already-guessed").innerHTML = alreadyGuessed.join(', ');
      } 

    }
  }
    


// call the function:
 getLetters();
 // Test - it works!
//  console.log(displayWord);
//  console.log(displayBlanks);

// var html =
//           "<p>Wins: " + wins + "</p>" +
//           "<p>Current Word:</p>" +
//           "<p>" + blanksArray + "</p>" +
//           "<p>Number of Guesses Remaining:</p>" +
//           "<p>" + remainingGuesses + "</p>" +
//           "<p>Letters Already Guessed:</p>" +
//           "<p>" + alreadyGuessed + "</p>";

//         // Set the inner HTML contents of the #game div to our html string
//         document.querySelector("#game-content").innerHTML = html;

}