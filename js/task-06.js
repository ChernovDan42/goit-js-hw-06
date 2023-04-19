const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener("blur", () => {

    if (inputRef.value.length !== Number(inputRef.dataset.length)) {
        inputRef.classList.add('invalid');
    } else if (inputRef.classList.contains('invalid') || inputRef.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.replace('invalid', 'valid');
    } else {
        inputRef.classList.add('valid');
    }
});