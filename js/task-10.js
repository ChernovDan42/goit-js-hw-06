function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes');

 


function createBoxes(amount) {
  let size = 30;
  const elements = []
  

  for (let i = 0; i < amount; i += 1){
    const divElement = document.createElement('div');
    divElement.style.width = `${size}px`;
    divElement.style.height = `${size}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    size += 10;
    elements.push(divElement)
  }
  
  boxesRef.append(...elements)
}
  

createBtnRef.addEventListener('click', () => {
  createBoxes(inputRef.value)
} )

function destroyBoxes() {
  boxesRef.innerHTML = '';
}


destroyBtnRef.addEventListener('click', () => {
  destroyBoxes()
}
)