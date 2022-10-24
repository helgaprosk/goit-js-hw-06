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

function createBoxes (amount) {
  amount = totalInputNumber;
  console.log(amount);

  for (let i = 1; i <= amount; i += 1) {
    let total = 0;
    if (!boxEl.firstChild) {
      total = 0;
      console.log('first');
    }
    else {
      total += i * 10;
      console.log('next');
    }

    const markup = document.querySelector('div')

    markup.style.backgroundColor = getRandomHexColor();
    markup.style.width = `${30+(i-1)*10}px`;
    markup.style.height = `${30+(i-1)*10}px`;
    boxEl.append(markup);
  }
}

function destroyBoxes() {
  boxEl.querySelectorAll('div').forEach(element =>element.remove())
}