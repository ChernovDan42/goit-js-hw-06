function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef=document.querySelector('body')
const widgetRef = document.querySelector('.widget');
const colorValueRef = document.querySelector('.color');
const changeBtn = document.querySelector('.change-color');

changeBtn.addEventListener('click', () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorValueRef.textContent = getRandomHexColor();
})

