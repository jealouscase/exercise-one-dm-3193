const button = document.getElementsByClassName('js-button');
const counter = document.getElementsByClassName('js-counter');

button[0].addEventListener('click', () => {
    counter[0].innerHTML = parseInt(counter[0].innerHTML) + 1;
});