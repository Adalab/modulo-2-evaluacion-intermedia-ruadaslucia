"use strict";
//declarar constantes que me hace falta traer de html

//caja de seleccion
const select = document.querySelector('.js-selectBox');
//caja intro apuesta
const imputNum = document.querySelector('.js-inputNum');
//boton jugar
const button = document.querySelector('.js-button');
//texto cambiante
const playText = document.querySelector('.js-goPlay');
//texto saldo restante
const leftover = document.querySelector('.js-moneyLeft');



const randomNum = getRandomNumber (100);
let cont = 0;
//----funciones

function getRandomNumber (max){
    return Math.ceil(Math.random()*max);
} //funciona
console.log("random number: " + randomNum);

//evento click en boton
button.addEventListener("click", handleClickButton);

function handleClickButton(){
    //comprobar el numero
    checkNum();
    //con cada click aumenta el contador
    sumCont();
}

//checkNum();



//sumcont();