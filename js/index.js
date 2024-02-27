"use strict";

//Отримання елементів зі сторінки

//Конпчанські
const btns = document.querySelectorAll(".btn-calc");

//Контейнер кнопчанських
const calcConteiner = document.querySelector(".calc-container");

//Дисплей калькулятора
const calcDisplay = document.getElementById("form-control");

//li-шки
const historyList = document.querySelector(".list-group");

////////////////// work space //////////////////

// console.log(btns);

// console.log(calcConteiner);

// console.log(calcDisplay);

class CalcApp {
  result;
  event;
  constructor(calcConteiner, calcDisplay, historyList) {
    this.clearDisplay();

    calcConteiner.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        e.target.classList.contains("btn-calc") ||
        e.target.classList.contains("zero")
      ) {
        const input = e.target.firstChild.textContent.trim();
        // console.log(input === "AC");
        if (input === "AC" && calcDisplay.textContent === "0") {
          console.log(input === "AC" && calcDisplay.textContent === "0");
          historyList.innerHTML = "";
        } else if (input === "AC") {
          this.clearDisplay();
        } else if (input === ".") {
          calcDisplay.insertAdjacentText("beforeend", ",");
        } else if (input === "X") {
          calcDisplay.insertAdjacentText("beforeend", "*");
        } else if (input === "=") {
          this.getDisplayData();
          // this.addNumberToScreen();
        } else {
          this.addNumberToScreen(input);
        }

        // console.log(input);
      }
    });
  }
  clearDisplay() {
    calcDisplay.innerHTML = "0";
  }
  addNumberToScreen(input) {
    if (calcDisplay.textContent === "0") {
      calcDisplay.innerHTML = "";
    }

    calcDisplay.insertAdjacentText("beforeend", input);
  }

  getDisplayData() {
    this.result = calcDisplay.textContent;
    calcDisplay.innerHTML = eval(this.result);
    historyList.insertAdjacentHTML(
      "beforeend",
      `<li class="list-group-item">${this.result} = ${eval(this.result)}</li>`
    );

    console.log(this.result);
  }
}

const calculatorApp = new CalcApp(calcConteiner, calcDisplay, historyList);
