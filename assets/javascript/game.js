
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text")
var yourGuessesSoFarText = document.getElementById("guessesSoFar-text")

  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
// console.log(computerGuess);

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;
  guessesSoFar.push(userGuess)


// Game logic
  if (userGuess === computerGuess) {
    wins++;
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    // console.log(computerGuess);
    guessesLeft = 9;
    guessesSoFar = [];
  }
  // Otherwise
  else {
    guessesLeft--
    if (guessesLeft === 0) {
      losses++;
      computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
      // console.log(computerGuess);
      guessesLeft = 9;
      guessesSoFar = [];
    }
  }

  // Display the user and computer guesses, and wins/losses/ties.
  userChoiceText.textContent = "Your current guess " + userGuess;
  yourGuessesSoFarText.textContent = "Your guesses so far: " + guessesSoFar;
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
  // computerChoiceText.textContent = "The computer chose: " + computerGuess;

}