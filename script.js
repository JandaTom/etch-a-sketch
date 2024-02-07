let rowSize = 20;
let collumnSize = 20;
let totalValue = rowSize * collumnSize;
const containerWidth = 600;
const containerHeight = 600;
// Size of filllerSize is -2 because of the 1px borders on sides, otherwise it overflows
let fillerSize = containerWidth / rowSize - 2

let container = document.querySelector('.container');
let promptButton = document.querySelector('button');

createField();


promptButton.addEventListener('click', () => {
    removeFields();
    size = parseInt(prompt('Define row size (integer from 1 to 100).'));
    rowSize = size;
    collumnSize = size;
    totalValue = rowSize * collumnSize
    fillerSize = containerWidth / rowSize - 2
    createField();
});

function createField() {
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
}



/* Node removal function using forloop
function removeFields() {
    for(let i = 0; i < totalValue; i++) {
        let nodeRemoval = document.querySelector('.fill');
        container.removeChild(nodeRemoval);
    };


}*/

// Node removal function using querySelectorAll and forEach method
function removeFields() {
    let nodeRemoval = document.querySelectorAll('.fill');
    nodeRemoval.forEach((node) => {
        container.removeChild(node);
    });
}