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

class CalcApp {
  _fristVariable;
  _secondVariable;
  _operator;
  _result;
  _input;
  constructor(calcConteiner, calcDisplay, historyList) {
    this.clearDisplay();

    calcConteiner.addEventListener("click", this._displayData.bind(this));
  }
  // Встановлення за замовчуванням 0 на дисплеї калькулятора
  clearDisplay() {
    calcDisplay.innerHTML = "0";
  }

  // Відображення, введених користувачем, даних
  _displayData(e) {
    e.preventDefault();
    this.addVariable(e);
  }

  displayVariable(e, display) {
    this._input = e.target.firstChild.textContent.trim();
    if (calcDisplay.textContent === display) {
      calcDisplay.innerHTML = "";
    }
    calcDisplay.insertAdjacentText("beforeend", this._input);
  }
  // Записуємо дані до змінних

  addVariable(e, fristVariable, secondVariable, operator) {
    if (!this._fristVariable && !this._operator) {
      if (e.target.classList.contains("btn-num")) {
        this.displayVariable(e, "0");
      }
      if (
        e.target.classList.contains("btn-operator-divide") ||
        e.target.classList.contains("btn-operator-multiply") ||
        e.target.classList.contains("btn-operator-add") ||
        e.target.classList.contains("btn-operator-subtract")
      ) {
        this._operator = e.target.firstChild.textContent.trim();
        this._fristVariable = calcDisplay.textContent;

        console.log(this._operator);
        console.log(this._fristVariable);
      }
    }
    if (this._fristVariable && this._operator) {
      calcDisplay.innerHTML = this._fristVariable;
      console.log(calcDisplay.textContent);
      this.displayVariable(e, calcDisplay.textContent);
    }
  }

  // addVariable(e, fristVariable, secondVariable, operator) {
  //   if (e.target.classList.contains("btn-num")) {
  //     this._input = e.target.firstChild.textContent.trim();
  //     if (calcDisplay.textContent === "0") {
  //       calcDisplay.innerHTML = "";
  //     }
  //     calcDisplay.insertAdjacentText("beforeend", this._input);
  //   }
  //   if (
  //     e.target.classList.contains("btn-operator-divide") ||
  //     e.target.classList.contains("btn-operator-multiply") ||
  //     e.target.classList.contains("btn-operator-add") ||
  //     e.target.classList.contains("btn-operator-subtract")
  //   ) {
  //     this._operator = e.target.firstChild.textContent.trim();
  //     this._fristVariable = calcDisplay.textContent;

  //     console.log(this._operator);
  //     console.log(this._fristVariable);
  //   }
  //   if (this._fristVariable && this._operator) {
  //     calcDisplay.innerHTML = this._fristVariable;
  //     if (e.target.classList.contains("btn-num")) {
  //       this._input = e.target.firstChild.textContent.trim();
  //       if (calcDisplay.textContent === this._fristVariable) {
  //         calcDisplay.innerHTML = "";
  //       }
  //       calcDisplay.insertAdjacentText("beforeend", this._input);
  //     }
  //   }
  // }

  // getDisplayData() {
  //   this.result = calcDisplay.textContent;
  //   calcDisplay.innerHTML = eval(this.result);
  //   historyList.insertAdjacentHTML(
  //     "beforeend",
  //     `<li class="list-group-item">${this.result} = ${eval(this.result)}</li>`
  //   );

  //   console.log(this.result);
}
// }

const calculatorApp = new CalcApp(calcConteiner, calcDisplay, historyList);
