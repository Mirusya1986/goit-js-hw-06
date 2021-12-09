const body=document.body;
const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

 

function getRandomHexColor(event) {

randomHexColor = `${event.Target.value}`;

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// const onButton = event => {
//   console.log(event);
// } 
// body.addEventListener('click', onButton);