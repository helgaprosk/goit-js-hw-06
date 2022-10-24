const inputText = document.querySelector("#font-size-control")
const spanText = document.querySelector("#text")

spanText.style.fontSize = `${inputText.value}px`;

//var1
inputText.addEventListener('input', event => {spanText.style.fontSize = `${inputText.value}px`})


//var2
inputText.addEventListener('input', onChangeTextRange)
function onChangeTextRange(event) {
    spanText.style.fontSize = `${inputText.value}px`
}