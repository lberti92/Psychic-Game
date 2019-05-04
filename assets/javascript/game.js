var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guesses = 9;
var userChoice = [];

// Create variables that hold references to the places in the HTML where we want to display things.

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var userChoiceText = document.getElementById("userchoice-text");


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];


  if (userGuess === computerGuess) {
    wins++;
  }else if (guesses > 0){ 
    guesses--;
    userChoice.push(userGuess);
    }
  else {
  losses++;
}



console.log(computerGuess)
console.log(userGuess)
console.log(guesses)
console.log(userChoice)

  // Display the user and computer guesses, and wins/losses/ties.

  winsText.textContent = wins;
  lossesText.textContent = losses;
  guessesLeftText.textContent = guesses;
  document.getElementById("userchoice-text").textContent= userChoice.toString();


};
