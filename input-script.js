let colorInput = document.getElementById('color')
console.log(colorInput);

let submitButton = document.querySelector('.color-input > button')
let colorHeading = document.querySelector('header > h1')
submitButton.addEventListener('click', () => {
    console.log(colorInput.value);
    color = colorInput.value;
    colorHeading.innerText = `${colorInput.value}`
    colorInput.value = '';
})
