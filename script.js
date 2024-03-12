/*Potential improvements to implement: 
1. Verify user input
2. Make app mobile friendly
*/ 

let rowSize = 20;
let collumnSize = 20;
let totalValue = rowSize * collumnSize;
const containerWidth = 600;
const containerHeight = 600;

let fillerSize = containerWidth / rowSize

const container = document.querySelector('.container');
const promptButton = document.querySelector('#resizeButton');
const resetButton = document.querySelector('#resetButton');
const randomizerButton = document.querySelector('#randomizedColors');
const selector = document.querySelector('input');
const headerColors = document.querySelectorAll('.random-header');


createField();
randomizedColor();
userCustomColour();
randomizeLetterColor();

promptButton.addEventListener('click', () => {
    removeFields();
    size = parseInt(prompt('Define row size (number from 1 to 100, numbers over 100 may cause performance issues).'));
    rowSize = size;
    collumnSize = size;
    totalValue = rowSize * collumnSize
    fillerSize = containerWidth / rowSize
    createField();
    userCustomColour();
});

resetButton.addEventListener ('click', () => {
    softReset();
});

randomizerButton.addEventListener ('click', () => {
    randomizedColor();
});



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


// Random colors on hover - bonus exercise 1
function createField() {
    for(let i = 0; i < totalValue; i++) {
        let fill = document.createElement('div');
        fill.classList.add("fill");
        fill.style.height = `${fillerSize}px`;
        fill.style.width = `${fillerSize}px`;
        fill.style.margin = '0px';
        fill.style.padding = '0px';
        fill.style.border = '0px';
        container.appendChild(fill);
       
    };
};

function randomizedColor() {
    let field = document.querySelectorAll('.fill');
    let mouseIsDown = false;
    field.forEach((fill) => {

        fill.addEventListener('mousedown', () => {
            mouseIsDown = true;
            let red = colorRandomizer();
            let green = colorRandomizer();
            let blue = colorRandomizer();
            fill.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });

        fill.addEventListener('mouseup', () => {
            mouseIsDown = false;
        });

        fill.addEventListener('mouseenter', () => {
            if(mouseIsDown == true) {
                let red = colorRandomizer();
                let green = colorRandomizer();
                let blue = colorRandomizer();
                fill.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            
            };
        });

        fill.addEventListener('touchstart', () => {
            let red = colorRandomizer();
                let green = colorRandomizer();
                let blue = colorRandomizer();
                fill.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
        
    });
};

function softReset() {
    let field = document.querySelectorAll('.fill');
    field.forEach((fill) => {
        fill.style.backgroundColor = `rgb(255, 255, 255)`;
    });
};

function userCustomColour() {
    let field = document.querySelectorAll('.fill');
    let selector = document.querySelector('input');
    let mouseIsDown = false;
    selector.addEventListener('click', () => {
        field.forEach((fill) => {
            fill.addEventListener('mousedown', () => {
                mouseIsDown = true;
                fill.style.backgroundColor = selector.value;
            });

            fill.addEventListener('mouseup', () => {
                mouseIsDown = false;
            });

            fill.addEventListener('mouseenter', () => {
                if (mouseIsDown == true){
                    fill.style.backgroundColor = selector.value;
                }
            });

            fill.addEventListener('touchstart', () => {
                fill.style.backgroundColor = selector.value;
            });
        });
    });
    selector.addEventListener('change', () => {
        field.forEach((fill) => {
            fill.addEventListener('mousedown', () => {
                mouseIsDown = true;
            });

            fill.addEventListener('mouseup', () => {
                mouseIsDown = false;
            });

            fill.addEventListener('mouseenter', () => {
                if (mouseIsDown == true){
                    fill.style.backgroundColor = selector.value;
                }
            });

            fill.addEventListener('touchstart', () => {
                fill.style.backgroundColor = selector.value;
            });
        });
    });
    
};

function randomizeLetterColor() {
    headerColors.forEach((letter) => {
        letter.addEventListener('mouseenter', () => {
            let red = colorRandomizer();
            let green = colorRandomizer();
            let blue = colorRandomizer();
            letter.style.color = `rgb(${red}, ${green}, ${blue})`;
            letter.style.fontSize = '40px';
        });

        letter.addEventListener('mouseleave', () => {
            letter.style.fontSize = '32px';
        });
    });
};

/* Node removal function using forloop
function removeFields() {
    for(let i = 0; i < totalValue; i++) {
        let nodeRemoval = document.querySelector('.fill');
        container.removeChild(nodeRemoval);
    };


}*/

// selector.addEventListener('click', () => {
//     userCustomColour();
// })

// Each interaction makes the fields 10% darker - bonus exercise 2 
// function progressiveDarkening() {
//     for(let i = 0; i < totalValue; i++) {
//         let fill = document.createElement('div');
//         fill.classList.add("fill");
//         fill.style.height = `${fillerSize}px`;
//         fill.style.width = `${fillerSize}px`;
//         fill.style.margin = '0px'
//         fill.style.padding = '0px'
//         fill.style.border = '0px'
//         let red = 255;
//         let green = 255;
//         let yellow = 255;
//         fill.addEventListener('mouseenter', () => {
//             red -= 25.5;
//             green -= 25.5;
//             yellow -= 25.5;
//             fill.style.backgroundColor = `rgb(${red}, ${green}, ${yellow})`

//         });
//         container.appendChild(fill);
//     };
// };

/*   Fallback solution, mouseleave event for case user wants to create a trail
            fill.addEventListener('mouseenter', () => {
            let red = colorRandomizer();
            let green = colorRandomizer();
            let yellow = colorRandomizer();
            fill.style.backgroundColor = `rgb(${red}, ${green}, ${yellow})`;
        });
        
        
        fill.addEventListener('mouseleave', () => {
            fill.style.backgroundColor = 'white';
        });
        container.appendChild(fill); */