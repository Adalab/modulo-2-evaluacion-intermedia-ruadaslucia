"use strict";
const selectNumber=document.querySelector('.js-selectBox');
const bet=document.querySelector('.js-input');
const playButton=document.querySelector('.jsplayButton');
const text=document.querySelector('.js-goPlay');
const initialMoney=document.querySelector('.js-money');

const winText= "Has ganado el doble de lo apostado :)";
const loseText="Has perdido lo apostado :(";

const maxNumber=6;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(maxNumber); 


button.addEventListener("click", handleClickButton);
function handleClickButton(){
    let selectNumber=parseInt(selectNumber.value);
    let money = parseInt(bet.value);
    let leftoverMoney = parseInt(initialMoney.value);
    checkNumber(selectNumber);
    counterMoney(leftoverMoney, money, selectNumber);
}
function checkNumber(selectedNumber){
    if (selectNumber === randomNumber){
        playText.innerHTML=winText;
    }else { 
        playText.innerHTML=loseText;
    }
}