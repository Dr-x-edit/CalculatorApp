"use strict";

//Отримання елементів зі сторінки

//Конпчанські
const btns = document.querySelectorAll(".btn-calc");

//Контейнер кнопчанських
const calcConteiner = document.querySelector(".calc-container");

//Дисплей калькулятора
const calcDisplay = document.getElementById("form-control");

////////////////// work space //////////////////

console.log(btns);

console.log(calcConteiner);

console.log(calcDisplay);

class CalcApp {
  constructor() {
    calcConteiner.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        e.target.classList.contains("btn-calc") ||
        e.target.classList.contains("zero")
      ) {
        const input = e.target.firstChild.textContent.trim();
        if (input === "AC") {
          this.clearDisplay();
        } else {
          this.addNumberToScreen(input);
        }

        console.log(input.data);
      }
    });
  }
  clearDisplay() {
    calcDisplay.innerHTML = "";
  }
  addNumberToScreen(input) {
    // calcDisplay.innerHTML = input;
    calcDisplay.insertAdjacentText("beforeend", input);
  }
}

const calculatorApp = new CalcApp();
