"use strict";
//---------------------constantes

const selectNum = document.querySelector('.js-selectBox');
const inputNum = document.querySelector('.js-inputNum');
const button = document.querySelector('.js-button');
const playText = document.querySelector('.js-goPlay');
const leftover = document.querySelector('.js-moneyLeft');


//const para los mensajes
const winningMessage = "¡Has ganado el doble de lo apostado";
const losingMessage = "Has perdido lo apostado:(";



const maxNum = 6;
const randomNumber = getRandomNumber(maxNum); 

//---------------------funciones

//ranmdom number
function getRandomNumber (max){
    return Math.ceil(Math.random()*max);
}
//evento click en los botones
button.addEventListener("click", handleClickButton);

//funcion manejadora
function handleClickButton(){
    let selectedNumber = parseInt(selectNum.value);
    let money = parseInt(inputNum.value);
    let leftoverMoney = 50;//parseInt(leftover.value);
    checkNum(selectedNumber);
    counterMoney(leftoverMoney, money, selectedNumber);
    
}
//check the selected num with the random
function checkNum(selectedNumber){
    if (selectedNumber === randomNumber){
        playText.innerHTML=winningMessage;
    }else { 
        playText.innerHTML=losingMessage
    }
}

function counterMoney(leftOverMoney, money, selectedNumber){
    let totalMoney = leftOverMoney;
    if(selectedNumber === randomNumber){
        totalMoney = totalMoney + (inputNum*2);
    }else { 
        totalMoney = totalMoney - money;
    }

    leftover.innerHTML="Saldo: " + totalMoney;
}