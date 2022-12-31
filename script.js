'use strict';


const secretNumber = Math.trunc(Math.random() * 20) + 1;
//The secret number is created using the random function
let score = 20;
//Maximum score is 20
let highScore = 0;
//Initially the high score is 0

//This function sets the message in the message element with the message that we send
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//The below callBack is for checking once the ckheck button is clicked
document.querySelector('.check').addEventListener('click', function () {
  //Guess contain s the entered number by user in Number format
  const guess = Number(document.querySelector('.guess').value);
  //When no input given by the user
  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    //When the guess is the correct number the victory message is displayed
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');
    //The number element will display our correct number
    document.querySelector('.number').textContent = secretNumber;
    //The background color is set to green upon victory
    document.querySelector('body').style.backgroundColor = '#60b347';
    //The width of the number element is set to 30rem
    document.querySelector('.number').style.width = '30rem';
    //If score is more than highScore, then highScore is set to our new score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      //The highScore is displayed
    }
  }
  //If the guessed number is not equal to the secretNumber
  else if (guess !== secretNumber) {
    //If score hasn't yet reached 0 yet, then the message is displayed according to our predicted score
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too Low!');
      //Score is reduced by 1 on the wrong prediction
      score--;
      //The reduced score is displayed on the score element
      document.querySelector('.score').textContent = score;
    }
    //if the score has reached 0, then the messgae of game lost is displayed
    //And the score is displayed i.e. 0
    else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//This eventListener is used to start a new game once again is clicked and everything is set to initial conditions
document.querySelector('.again').addEventListener('click', function () {
  //Initial score is 20
  score = 20;
  //Dispalymessage function is called with this message
  displayMessage('Start guessing...');
  //Score is set to 20 again
  document.querySelector('.score').textContent = score;
  //? is displayed on the number button
  document.querySelector('.number').textContent = '?';
  //The guess value is again set to empty
  document.querySelector('.guess').value = '';
  //The background color is set to initial(black-grey) again
  document.querySelector('body').style.backgroundColor = '#222';
  //The width of the number button is again set to 15rem
  document.querySelector('.number').style.width = '15rem';
});
