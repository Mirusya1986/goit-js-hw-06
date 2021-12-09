 const inputEl = document.querySelector('#font-size-control');
 const textEl = document.querySelector('#text');




//  function onRangeChange (event){
//     textEl.style.fontSize = `$[event.currentTarget.value]px`;
//  }
 
const onRangeChange = (event) => textEl.style.fontSize = `${event.currentTarget.value}px`;

inputEl.addEventListener('input', onRangeChange);




