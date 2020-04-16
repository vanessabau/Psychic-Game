# Psychic-Game

OVERVIEW 
This is a letter guessing game that compares a user's choice of letter with a randomized letter selection by the computer. If the user guesses correctly they win, if the user gueeses incorrectly they loose. The user is given 9 guesses. After the user wins OR they guess incorrectly 9 times, the available guesses is reset to zero. 
The game score is kept then updated and displayed in the browser.  The score displays number of wins, losses, the user's guess, and the number of guesses remaining. 

BUILDING THE GAME
I referenced a Rock Paper Sciccors "rps" game we built as a class project for structure (link to my finished rps game below) and modified the if/else statements and variables to reflect the game differences. 

One of the first things that was fun to learn was how to create an array of all the letters of the alphabet without typing each letter out "a", - I was happy to find there was a way to do this with one string on code (reference below).

I chose to first focus on game functionality. I built everything in html first, then styled in css, finally I cut and pasted the script into a .js file to create the javascript.

Most of the game I was able to adjust to reflect the needed parameters. The elements that are proving challenging are below.

CHALLENGES
* I had trouble resetting the guesses after the user guesses incorrectly 9 times. My tutor helped me update my if/else statement to check before running if the user has guesses left. By starting with this checking method if there were guesses left it ran through the comparison - if there were no guesses left the resetGuesses function is called.
* I also had trouble displaying all 9 of the user's guesses. My tutor helped me create an adiitional variable updatingUserGuess and add it to my userGuess variable so with a += and again with a " ," to display all the user gueses with spaces and commas. This was also added to my resetGuesses function so that the list of user guesses resets with the game.
* We (the tutor and I) used information from stack overflow to help see how to add characters to a string to display ther user guesses.


Reference to Rock Paper Scissors game activity: (https://vanessabau.github.io/RPS-game/023-rpsgame-Activity)

Help with building an array of the letters of the alphabet: (http://actionsnippet.com/?p=13)

Help with Resetting score to zero: (https://stackoverflow.com/questions/50849061/how-do-i-get-the-your-guesses-section-to-reset-after-either-a-win-or-until-the)

Resource for adding letters to a string: (https://stackoverflow.com/questions/5754712/add-characters-to-a-string-in-javascript)

Read.me guidance: (https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)