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



const randomNum = getRandomNumber (6);
let cont = 0;
//----funciones

function getRandomNumber (max){
    return Math.ceil(Math.random()*max);
} //---------------------------------------funciona
console.log("random number: " + randomNum);

//evento click en boton
button.addEventListener("click", handleClickButton);

function handleClickButton(){
    //comprobar el numero
    checkNum();
    
}

//checkNum();
function checkNum(){
    const num = parseInt (selectNum.value);
    console.log("the input numb " + num);
    if(num <1 || num > 6) {
        playText.innerHTML="El número tiene que ser de 1 a 6";
    }else if (num === randomNum){
        playText.innerHTML="¡Has ganado!";
    }else if(num!==randomNum){
        playText.innerHTML="Has perdido :("
    }
    }



    