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
button.addEventListener("click", handleClickButton);
function handleClickButton(){
    let selectedNumber=parseInt(selectNumber.value);
}