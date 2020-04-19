//Create an array for the computer and user to chose from
var alphabetArray = ("abcdefghijklmnopqrstuvwxyz").split("");

//Create variables to store all the info from the rounds
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var updatingUserGuess = "";

//STEP 1. User guesses a letter by pressing a key
//Create an event to compare computer and user guesses
document.onkeyup = function () {
    
    //Create a variable to store the user guess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    updatingUserGuess += userGuess;
    updatingUserGuess += ", ";

    //STEP 2. Computer choses a random letter from the alphabet
    //Create a variable to store the computer guess
    var computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];

    //Create a function to reset guesses remaining/reset game
    var resetGuesses = function () {
        guessesLeft = 9;
        updatingUserGuess = "";
    }

    //STEP 3. Compare user guess and computer guess
    //IF/ELSE statement ocurrs each time user presses a key
    if (guessesLeft > 0) {
        //We have not lost yet
        if (userGuess !== computerGuess) {
            //If user guesses wrong increment guesses, decrement guesses left
            guesses++;
            guessesLeft--;
            //Debugging statements
            console.log("Your guess: " + userGuess + " you loose");
            console.log("Guesses: "+ guesses);
            console.log("Guesses left: " + guessesLeft);
        }
        else {
            //If user guesses correctly increase wins and guesses, decrease guesses left and reset guesses to 0
            wins++;
            guesses++;
            guessesLeft--;
            resetGuesses();
            //Debugging statements
            console.log("Your guess: " + userGuess + " you win");
            console.log("Wins: " + wins);
            console.log("Guesses: "+ guesses);
            console.log("Guesses left: " +guessesLeft);
        }
    }
    else {
        //We lost so reset guesses to zero
        resetGuesses();
        console.log(losses++);
    }

    //STEP 4. Updated values are displayed in the html
    //Create html variable to display results to viewer
    var html = "<p><h2>Guess what letter I am thinking of</h2> Press a letter key to play!</p>" +
        "<p> WINS: " + wins + "</p>" +
        "<p> LOSSES: " + losses + "</p>" +
        "<p> YOUR GUESS: " + updatingUserGuess + "</p>" +
        "<p> GUESSES LEFT: " + guessesLeft + "</p>";
    document.querySelector('#game').innerHTML = html;
}
