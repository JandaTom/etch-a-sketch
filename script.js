let rowSize = 40;
let collumnSize = 40;
const totalValue = rowSize * collumnSize;
const containerWidth = 600;
const containerHeight = 600;

//prompt('Hello user!');
let container = document.querySelector('.container');
let promptButton = document.querySelector('button');


promptButton.addEventListener('click', () => {
    size = prompt('Define row size (integer from 1 to 100).');
})


// Size of filllerSize is -2 because of the 1px borders on sides, otherwise it overflows
let fillerSize = containerWidth / rowSize - 2


for(let i = 0; i < totalValue; i++) {
    let fill = document.createElement('div');
    fill.classList.add("fill");
    fill.style.height = `${fillerSize}px`;
    fill.style.width = `${fillerSize}px`;
    fill.addEventListener('mouseenter', () => {
        fill.style.backgroundColor = 'blue';
    });
    fill.addEventListener('mouseleave', () => {
        fill.style.backgroundColor = 'white';
    });
    container.appendChild(fill);
};