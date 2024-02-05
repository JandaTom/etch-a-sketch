const rowSize = 16;
const collumnSize = 16;
const totalValue = rowSize * collumnSize;
const containerWidth = 600;
const containerHeight = 600;

// Size of filllerSize is -2 because of the 1px borders on sides, otherwise it overflows
let fillerSize = containerWidth / rowSize - 2

let container = document.querySelector('.container');
for(let i = 0; i < totalValue; i++) {
    let fill = document.createElement('div');
    fill.classList.add("fill");
    fill.style.height = `${fillerSize}px`;
    fill.style.width = `${fillerSize}px`;
    container.appendChild(fill);
}