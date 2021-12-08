
const btnMinusEl = document.querySelector('button[data-action="decrement"]');

const btnPlusEl =  document.querySelector('button[data-action="increment"]');

const spanRef = document.querySelector('span');

let counterValue = 0;

// btnMinusEl.addEventListener('click', () =>{
// counterValue -= 1;
// spanRef.innerHTML = counterValue;

// });
btnPlusEl.addEventListener('click', onbtnPlusEl);

function onbtnPlusEl ()
{
    counterValue += 1;
    spanRef.innerHTML = counterValue;
    };
    



     btnMinusEl.addEventListener('click', onBtnMinusElClick);

function onBtnMinusElClick () {
   counterValue -= 1;
   spanRef.innerHTML = counterValue;
};