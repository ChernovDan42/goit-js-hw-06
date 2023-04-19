const inputRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text')


inputRef.addEventListener('input', () => {
    spanTextRef.style.fontSize = `${inputRef.value}.px`;
})

