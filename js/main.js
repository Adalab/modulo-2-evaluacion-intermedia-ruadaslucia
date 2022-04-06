'use strict';

const selectNumber = document.querySelector('.js-selectBox');
const inputBet = document.querySelector('.js-inputNum');

const leftover = document.querySelector('.js-moneyLeft');

const button = document.querySelector('.js-button');
const resetButton = document.querySelector('.js-resetButton');

const playText = document.querySelector('.js-goPlay');

const winningMessage = '¡Has ganado el doble de lo apostado &#128513;';
const losingMessage = 'Has perdido lo apostado &#128557;';

const maxNumber = 6;
const randomNumber = getRandomNumber(maxNumber);
console.log(randomNumber);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

button.addEventListener('click', handleClickButton);
resetButton.addEventListener('click', resetGame);

function handleClickButton(event) {
  event.preventDefault();
  let money = parseInt(inputBet.value);
  let leftoverMoney = parseInt(leftover.innerText);
  let selectedNumber = parseInt(selectNumber.value);

  if (selectedNumber === randomNumber) {
    win(money, leftoverMoney);
  } else {
    lose(money, leftoverMoney);
  }
}

function resetGame() {
  selectNumber.value = '-1';
  inputBet.value = '';
  leftover.innerText = '50';
  playText.innerText = '¡Vamos a jugar!';
}

function win(money, leftoverMoney) {
  playText.innerHTML = winningMessage;
  leftoverMoney = leftoverMoney + money * 2;
  leftover.innerHTML = leftoverMoney;
}

function lose(money, leftoverMoney) {
  playText.innerHTML = losingMessage;
  leftoverMoney = leftoverMoney - money;
  leftover.innerHTML = leftoverMoney;
}
