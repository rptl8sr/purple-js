function calcIsEnabled() {
  const bothInputsNotEmpty = !!firstNumber.value && !!secondNumber.value;
  const notZeroDivide = sign.textContent !== '÷' || secondNumber.value !== '0';
  equalButton.disabled = !(bothInputsNotEmpty && notZeroDivide)
}

function updateExpression() {
  expression.textContent = `${firstNumber.value || '...'} ${sign.textContent} ${secondNumber.value || '...'} =`;
}


const form = document.querySelector("form");
const firstNumber = document.getElementsByName("firstNumber")[0];
const secondNumber = document.getElementsByName("secondNumber")[0];
const sign = document.getElementById("sign");
const buttons = document.getElementsByClassName("form__button");
const equalButton = document.getElementsByClassName("form__equal")[0];
const result = document.getElementById("result");
const expression = document.getElementById("expression");

// initial state
equalButton.disabled = true;
buttons[0].classList.add("active");

// switch math operators
[...buttons].forEach((button) => {
  button.addEventListener("click", (e) => {
    [...buttons].forEach((button) => {
      button.classList.remove("active");
    });

    e.target.classList.add("active");
    sign.textContent = e.target.textContent;
    sign.dataset.sign = e.target.dataset.sign;
    
    calcIsEnabled();
    updateExpression();
    result.textContent = '...';
  });
});

// input number
[firstNumber, secondNumber].forEach((input) => {
  input.addEventListener("input", () => {
    calcIsEnabled();
    updateExpression();
    result.textContent = '...';
  });
});

// equal button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.textContent = eval(firstNumber.value + sign.dataset.sign + secondNumber.value);
  form.reset();
});



