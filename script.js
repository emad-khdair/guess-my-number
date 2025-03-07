'use strict';

/*
1. Generate a random number between 1 and 20.
2. Handle button clicks:
    1. Check if the user entered a guess. If not, display the message 'No Number'!
    2. If the guess is correct, display the message 'Correct guess'!
    3. If the guess is incorrect, display if it is too high or too low and decrease the score.
    4. If the score exceeds the high score, update the high score.
3. Handle the "Again" button click:
    1. Reset the current score.
    2. Keep the highest score.
    3. Generate a new random number.
*/

// Generate a random number between 1 and 20
let secretNumber = Math.floor(Math.random() * 20 + 1);

// Store the user's guess
let userGuess;

// Initialize the score
let updatedScore = 20;

// Store the highest score
let highestScore = 0;

// If no guess is entered
const noGuess = () => {
  if (!userGuess) {
    document.querySelector('.message').textContent = 'No Number!!';
  }
};

// If the guess is correct
const correctGuess = () => {
  if (userGuess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct guess!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
  }

  // Update the high score if the current score is higher
  if (updatedScore > highestScore) {
    highestScore = updatedScore;
    document.querySelector(
      '.highscore'
    ).textContent = `🥇 Highscore: ${highestScore}`;
  }
};

// If the guess is incorrect (too high or too low)
const wrongGuess = () => {
  if (userGuess !== secretNumber) {
    document.querySelector('.message').textContent =
      userGuess > secretNumber
        ? 'Wrong Guess! Too high'
        : 'Wrong Guess! Too Low';
    updatedScore--;
    document.querySelector('.score').textContent = updatedScore;
  }

  // End the game if the score drops below 1
  if (updatedScore < 1) {
    document.querySelector('.score').textContent = 'Game Over!!';
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
};

// Event listener for the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  // Get the user's guess
  userGuess = Number(document.querySelector('.guess').value);

  // Check if no guess was entered, or if the guess is correct/incorrect
  if (!userGuess) {
    noGuess();
  } else if (userGuess === secretNumber) {
    correctGuess();
  } else {
    wrongGuess();
  }
});

// Function to reset the game
const resetGame = () => {
  updatedScore = 20; // Reset the score to 20
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = updatedScore;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
};

// Event listener for the "Again" button
document.querySelector('.again').addEventListener('click', resetGame);
