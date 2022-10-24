const textInput = document.querySelector("#validation-input");

textInput.addEventListener('blur', onInputTextContent);

function onInputTextContent(event){
    if(event.currentTarget.value.length == textInput.getAttribute('data-length')){
       textInput.classList.add('valid');
        if(textInput.classList.contains('invalid')){
           textInput.classList.remove('invalid');  
        }
    } else {
        
        if(textInput.classList.contains('valid')){
            textInput.classList.remove('valid');  
        }
       textInput.classList.add('invalid');
    }

}
