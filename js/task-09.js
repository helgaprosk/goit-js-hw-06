function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('button.change-color');
const body = document.querySelector('body');
const colorValue = document.querySelector('span.color');

btnChangeColor.addEventListener('click', element => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;

});
