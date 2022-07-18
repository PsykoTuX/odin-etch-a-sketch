let container = document.getElementById('container');

let div = document.createElement('div');
div.classList = 'cell';

let clear = document.getElementById('clear');
let changeDimension = document.getElementById('changeDimension');
let divs = document.querySelectorAll("div.cell");
let erase = document.getElementsByClassName('cell');

function generateGrid () {
    let size = prompt ("Choose the dimension of the grid: up to 100 squares per side.");
    for (let i= erase.length-1; i>=0; --i) {
        erase[i].remove();
    }

    for (let i=0; i<(size*size); i++) {
        container.appendChild(div.cloneNode());
    }

    container.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
    container.style.setProperty('grid-template-rows',    `repeat(${size}, 1fr)`);

    divs = document.querySelectorAll("div.cell");
    divs.forEach((div) => {
        div.addEventListener('mouseover',() => {
            div.classList.add('toggled')
        })
    });

}


function reset () {
    divs.forEach((div) => {
    div.classList.remove('toggled')
        });

    };




clear.addEventListener('click', () => {
reset ()
})

changeDimension.addEventListener('click', () => {
reset ()
generateGrid()
})