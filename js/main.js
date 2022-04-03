"use strict";

const selectNumber = document.querySelector('.js-selectBox');
const inputNumber = document.querySelector('.js-inputNum');
const button = document.querySelector('.js-button');
const playText = document.querySelector('.js-goPlay');
const leftover = document.querySelector('.js-moneyLeft');
const moneyText=document.querySelector('.js-saldo');
const winningMessage = "¡Has ganado el doble de lo apostado :)";
const losingMessage = "Has perdido lo apostado :(";

const maxNumber = 6;
const randomNumber = getRandomNumber(maxNumber); 

function getRandomNumber (max){
    return Math.ceil(Math.random()*max);
}
console.log(randomNumber);


button.addEventListener("click", handleClickButton);


function handleClickButton(){
    let selectedNumber = parseInt(selectNumber.value);
    let money = parseInt(inputNumber.value);
    let leftoverMoney = parseInt(leftover.value);
    checkNum(selectedNumber);
    counterMoney(leftoverMoney, money, selectedNumber);
    
}

function checkNum(selectedNumber){
    if (selectedNumber === randomNumber){
        playText.innerHTML=winningMessage;
    }else { 
        playText.innerHTML=losingMessage
    }
}

function counterMoney(leftOverMoney, money, selectedNumber, ){
    
    let totalMoney = leftOverMoney;
    if(selectedNumber === randomNumber){
        totalMoney = totalMoney + (money*2);
    }else { 
        totalMoney = totalMoney - money;
    }
    leftover.innerHTML=`Saldo:` + totalMoney;
}
