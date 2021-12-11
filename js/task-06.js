const inputEl = document.querySelector('input');

const lengthInputEl = inputEl.dataset.length;
const lengthInput = Number.parseInt(lengthInputEl);
inputEl.addEventListener('focus', onInputElFocus);
inputEl.addEventListener('blur', onInputElBlur);

function onInputElFocus(event){
   
}



function onInputElBlur(event){
    if(event.currentTarget.value.trim().length === lengthInput){
               event.currentTarget.classList.remove('invalid');
               event.currentTarget.classList.add('valid');
            } else {
               event.currentTarget.classList.remove('valid');
               event.currentTarget.classList.add('invalid');
            }
}





 