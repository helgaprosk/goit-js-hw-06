const btnMin = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

let  counterValue = 0;

btnMin.addEventListener ("click", onBtnMinClick);
btnPlus.addEventListener("click", onBtnPlusClick);

function onBtnMinClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function onBtnPlusClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}