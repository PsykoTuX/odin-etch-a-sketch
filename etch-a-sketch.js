//Declare variables

let container = document.getElementById('container');
let div = document.createElement('div');
div.classList = 'cell';
let clear = document.getElementById('clear');
let changeDimension = document.getElementById('changeDimension');
let divs = document.querySelectorAll("div.cell");
let erase = document.getElementsByClassName('cell');
let size = 0

// Set up the grid that appears on the landing page
function initialGrid (initialSize) {
    for (let i=0; i<(initialSize*initialSize); i++) {
        container.appendChild(div.cloneNode());
    }

    container.style.setProperty('grid-template-columns', `repeat(${initialSize}, 1fr)`);
    container.style.setProperty('grid-template-rows',    `repeat(${initialSize}, 1fr)`);

    divs = document.querySelectorAll("div.cell");
    divs.forEach((div) => {
        div.addEventListener('mouseover',() => {
            div.classList.add('toggled')
        })
    });
}
//Call the initial grid function (16x16)
initialGrid(16);


// Function permitting to change the dimensions of the grid.
function generateGrid () {
    size = prompt ("Choose the dimension of the grid: up to 100 squares per side.");
    size = parseInt(size);
    if ((size>100 || size <0 || Number.isInteger(size)==false))  {
        alert('What you typed was not an integer comprised between 0 and 100, please specify the dimensions again.');
        generateGrid();
    }
    else {
        for (let i= erase.length-1; i>=0; --i) {
            erase[i].remove();
        }
        for (let i=0; i<(size*size); i++) {
            container.appendChild(div.cloneNode());
        }

        //Adjust the CSS grid template to the dimensions of the grid.
        container.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
        container.style.setProperty('grid-template-rows',    `repeat(${size}, 1fr)`);

        //Add the hovering effect ('activate' the cells)
        divs = document.querySelectorAll("div.cell");
        divs.forEach((div) => {
            div.addEventListener('mouseover',() => {
                div.classList.add('toggled')
            })
        });
}

}

//Reset the cells to their initial (blank state)
function reset () {
    divs.forEach((div) => {
    div.classList.remove('toggled')
        });

    };

//Call the above function by clicking on the clear button.
clear.addEventListener('click', () => {
reset ()
})

//Call the generateGrid function by clicking on the Change dimensions button. 
changeDimension.addEventListener('click', () => {
reset ()
generateGrid()
})