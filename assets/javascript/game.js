var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var userChoice = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var userChoiceText = document.getElementById("userchoice-text");


document.onkeyup = function (event) {

  var userGuess = (String.fromCharCode(event.keyCode)).toLowerCase();

  var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

  if (userGuess === computerGuess) {
    wins++;
    resetVariables();
  } else if (guesses > 0) {
    guesses--;
    userChoice.push(userGuess);
  } else {
    losses++;
    resetVariables();
  }

  function resetVariables() {
    userChoice = [];
    guesses = 9;
  }

  winsText.textContent = wins;
  lossesText.textContent = losses;
  guessesLeftText.textContent = guesses;
  userChoiceText.textContent = userChoice;
};
