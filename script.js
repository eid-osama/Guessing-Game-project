'use strict';

let randomeNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (score > 1) {
    if (!guess) {
      displayMessage('🚫 No nummber!');
    } else if (guess === randomeNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = randomeNumber;
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > 20 || guess < 1) {
      displayMessage('⛔ Number must be between 1 and 20');
    } else if (guess !== randomeNumber) {
      displayMessage(guess < randomeNumber ? '📉 too low' : '📈 too high');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('💥 you lost the game');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomeNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
