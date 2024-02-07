/*Potential improvements to implement: 
1. Verify user input
2. Add reset button (and implement reset function)
*/ 

let rowSize = 20;
let collumnSize = 20;
let totalValue = rowSize * collumnSize;
const containerWidth = 600;
const containerHeight = 600;

// Size of filllerSize is -2 because of the 1px borders on sides, otherwise it overflows
let fillerSize = containerWidth / rowSize

let container = document.querySelector('.container');
let promptButton = document.querySelector('button');

progressiveDarkening();


promptButton.addEventListener('click', () => {
    removeFields();
    size = parseInt(prompt('Define row size (integer from 1 to 100).'));
    rowSize = size;
    collumnSize = size;
    totalValue = rowSize * collumnSize
    fillerSize = containerWidth / rowSize - 2
    progressiveDarkening();
});

// Each interaction makes the fields 10% darker - bonus exercise 2 
function progressiveDarkening() {
    for(let i = 0; i < totalValue; i++) {
        let fill = document.createElement('div');
        fill.classList.add("fill");
        fill.style.height = `${fillerSize}px`;
        fill.style.width = `${fillerSize}px`;
        fill.style.margin = '0px'
        fill.style.padding = '0px'
        fill.style.border = '0px'
        let red = 255;
        let green = 255;
        let yellow = 255;
        fill.addEventListener('mouseenter', () => {
            red -= 25.5;
            green -= 25.5;
            yellow -= 25.5;
            fill.style.backgroundColor = `rgb(${red}, ${green}, ${yellow})`

        });
        container.appendChild(fill);
    };
};

// Node removal function using querySelectorAll and forEach method
function removeFields() {
    let nodeRemoval = document.querySelectorAll('.fill');
    nodeRemoval.forEach((node) => {
        container.removeChild(node);
    });
};

function colorRandomizer() {
   let number = Math.floor(Math.random()* 256);
   return number;
};


/* Random colors on hover - bonus exercise 1
function createField() {
    for(let i = 0; i < totalValue; i++) {
        let fill = document.createElement('div');
        fill.classList.add("fill");
        fill.style.height = `${fillerSize}px`;
        fill.style.width = `${fillerSize}px`;
        fill.style.margin = '0px';
        fill.style.padding = '0px';
        fill.style.border = '0px';
        let red = colorRandomizer();
        let green = colorRandomizer();
        let yellow = colorRandomizer();
        fill.addEventListener('mouseenter', () => {
            fill.style.backgroundColor = `rgb(${red}, ${green}, ${yellow})`
        });
        fill.addEventListener('mouseleave', () => {
            fill.style.backgroundColor = 'white';
        });
        container.appendChild(fill);
    };
}; */

/* Node removal function using forloop
function removeFields() {
    for(let i = 0; i < totalValue; i++) {
        let nodeRemoval = document.querySelector('.fill');
        container.removeChild(nodeRemoval);
    };


}*/