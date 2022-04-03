"use strict";
//declarar constantes que me hace falta traer de html

//caja de seleccion
const selectNum = document.querySelector('.js-selectBox');
//caja intro apuesta
const inputNum = document.querySelector('.js-inputNum');
//boton jugar
const button = document.querySelector('.js-button');
//texto cambiante
const playText = document.querySelector('.js-goPlay');
//texto saldo restante
const leftover = document.querySelector('.js-moneyLeft');
//boton try again
const btnReset =document.querySelector('.js-tryAgain');

const maxNum=6;
const randomNum=getRandomNumber(maxNum);

const winningMessage = "¡Has ganado el doble de lo apostado";
const losingMessage = "Has perdido lo apostado:(";
//----funciones

function getRandomNumber (max){
    return Math.ceil(Math.random()*max);
} //---------------------------------------funciona

//evento click en boton
button.addEventListener("click", handleClickButton);

function handleClickButton(){
    //comprobar el numero
    
    let selectedNumber = parseInt(selectNumber.value);
    checkNum();
    counterMoney();
    
}

//checkNum();
function checkNum(){
    if (num === randomNum){
        playText.innerHTML="¡Has ganado el doble de lo apostado";
    }else{
        playText.innerHTML="Has perdido lo apostado :(";
    }
}

function counterMoney(){
    
    const money=parseInt(inputNum.value);
    const number = parseInt (selectNum.value);

    console.log("money left is: " + money);
    if(number === randomNum){
        leftover.innerHTML="Saldo: " + (leftover*2);
    }else if(number!==randomNum){
        leftover.innerHTML="Saldo: " + (leftover-inputNum);
    }
}



    