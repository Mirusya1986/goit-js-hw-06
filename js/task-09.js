
function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanColor = document.querySelector('.color');
const buttonChangeColor = document
.querySelector('.change-color')
.addEventListener('click', onbuttonChangeColorClick);

function onbuttonChangeColorClick(){
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColor.textContent = color;
  console.log(spanColor.textContent);
}


