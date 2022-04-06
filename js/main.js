'use strict';

const selectNumber = document.querySelector('.js-selectBox');
const inputNumber = document.querySelector('.js-inputNum');

const leftover = document.querySelector('.js-moneyLeft');

const button = document.querySelector('.js-button');
const resetButton = document.querySelector('.js-resetButton');

const playText = document.querySelector('.js-goPlay');

const winningMessage = '¡Has ganado el doble de lo apostado :)';
const losingMessage = 'Has perdido lo apostado :(';

const maxNumber = 6;
const randomNumber = getRandomNumber(maxNumber);
console.log(randomNumber);

let leftoverMoney = parseInt(leftover.innerText);

//funcion numero aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//eventos sobre los botones
button.addEventListener('click', handleClickButton);
resetButton.addEventListener('click', handleClickButton);

//funcion manejadora que reune a las demas funciones
function handleClickButton() {
  let selectedNumber = parseInt(selectNumber.value);
  let money = parseInt(inputNumber.value);

  checkNum(selectedNumber);
  counterMoney(leftoverMoney, money, selectedNumber);
}

//funcion que comprueba el numero aleatorio con el input del usuario
function checkNum(selectedNumber) {
  if (selectedNumber === randomNumber) {
    playText.innerHTML = winningMessage;
  } else {
    playText.innerHTML = losingMessage;
  }
}

//funcion que suma y resta las ganancias y las perdidas
function counterMoney(leftOverMoney, money, selectedNumber) {
  if (selectedNumber === randomNumber) {
    leftOverMoney = leftOverMoney + money * 2;
  } else {
    leftOverMoney = leftOverMoney - money;
  }
  leftover.innerHTML = leftOverMoney;
}
//borrar los comentarios y los console.log
//usar dos funciones win(); y  lose(); y en ellas meter respectivamente el mensaje de ganar  o perder y la operacion de suma o de resta.
function win() {}
