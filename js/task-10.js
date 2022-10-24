function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxEl = document.querySelector('#boxes')
const inputEl = document.querySelector('number')


inputEl.AddEventListener('input', onInputNumber)
createBtn.AddEventListener('click', createBoxes)
destroyBtn.AddEventListener('click', destroyBoxes)


let totalInputNumber = 0

function onInputNumber (event) {
  totalInputNumber = event.currentTarget.value;
}