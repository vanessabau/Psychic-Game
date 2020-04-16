//Create an array for the computer and user to chose from
var alphabetArray = ("abcdefghijklmnopqrstuvwxyz").split("");

//Create variables to store all the info from the rounds
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var updatingUserGuess = "";

//Create an event to compare computer and user guesses
document.onkeyup = function () {

    //Create a variable to store the user guess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    updatingUserGuess += userGuess;
    updatingUserGuess += ", ";

    //Create a variable to store the computer guess
    var computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];

    //Create a functino to reset guesses remaining/reset game
    var resetGuesses = function () {
        guessesLeft = 9;
        updatingUserGuess = "";
    }

    //IF/ELSE statement ocurrs each time user presses a key
    if (guessesLeft > 0) {
        if (userGuess !== computerGuess) {
            console.log("Your guess: " + userGuess + " you loose");
            console.log(losses++);
            console.log(guesses++)
            console.log(guessesLeft--)
        }
        else {
            console.log("Your guess: " + userGuess + " you win");
            console.log(wins++);
            console.log(guesses++);
            console.log(guessesLeft--);
            resetGuesses();
        }
    }
    else {
        resetGuesses();
    }

    //Create html variable to display results to viewer
    var html = "<p><h2>Guess what letter I am thinking of</h2> Press a letter key to play!</p>" +
        "<p> WINS: " + wins + "</p>" +
        "<p> LOSSES: " + losses + "</p>" +
        "<p> YOUR GUESS: " + updatingUserGuess + "</p>" +
        "<p> GUESSES LEFT: " + guessesLeft + "</p>";
    document.querySelector('#game').innerHTML = html;
}
