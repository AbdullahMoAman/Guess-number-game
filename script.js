'use strict';

let secretNumber = Math.trunc(Math.random() * 30) + 1;
console.log(secretNumber);

let score = 5;
let highScore = 0;

document.querySelector('.score').textContent = '5';

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const correctGuess = () => {
  displayMessage('Wait ...');
  setTimeout(() => {
    displayMessage('Correct Guess 👏👏');
    document.querySelector('.message').style.fontSize = '35px';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.borderRadius = '30px';
    document.querySelector('.number').textContent = secretNumber;
  }, 2000);
};

const wrongGuess = () => {
  document.querySelector('.score').textContent = '0';
  document.querySelector('.message').style.fontSize = '35px';
  displayMessage('Wrong guess ❌❌');
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = 'red';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there isn't number
  if (!guess) {
    displayMessage('No Number !!');

    // When guess is correct
  } else if (guess === secretNumber) {
    correctGuess();
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'less !' : 'more !');
      document.querySelector('.message').style.fontSize = '40px';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      wrongGuess();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // - Empty the input
  document.querySelector('.guess').value = '';

  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';

  score = 5;

  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 30) + 1;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').style.borderRadius = '0px';
});
