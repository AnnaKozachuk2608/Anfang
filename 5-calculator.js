"use strict"

// Левое число
let left  = ""
// Правое число
let right = ""
// Операция
let next  = ""

//Эта функция вызывается каждый раз при
//нажатии кнопки на калькуляторе;
//с аргументом `n` дабы отличить нажатую кнопку
function NumPressed(n){
  if (n === "+"){
    if (left === "") {
      console.log("левое число еще не введено")
    }
    else {
      next = "+";
    }
  }
  else if (n==="-") {
    //TODO Homework
  }
  else if (n === "=") {
    // Проверяем, что оба числа и операция введены
    if(left !== "" && right !== "" && next !== "")
    {
     if (next === "+")
     {
       let itog = Number(left) + Number(right);
       //Отображаем `itog` заменяя им текст написанный в текстовом поле "privet"
       document.getElementById("privet").setAttribute("value", itog);
     }
    }
    else {
      console.log ("Неверный ввод");

    }
  }
  else if (n === "C") {
    //TODO Homework
  }
  else { // Нажата кнопка с цифрой
    if (next === "") {
      // Ввод левого числа
      left = left + n;
    }
    else {
      // Ввод правого числа
      right = right + n;
    }
  }
}

//(1) Эта функция возовется сразу после загруки веб-страницы в браузере
function rechner(){
  document.getElementById("privet").setAttribute("value", "Привет, как дела ?");
  document.getElementById("privet").style.color="red";
}

//Это (1) обеспечивается как раз следующей строчкой:
window.onload=rechner;

