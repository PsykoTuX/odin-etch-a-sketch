let container = document.getElementById('container');

let div = document.createElement('div');
div.classList = 'cell';


for (let i=0; i<(16*16); i++) {
    container.appendChild(div.cloneNode());
}

const divs = document.querySelectorAll("div.cell");


divs.forEach((div) => {
    div.addEventListener('mouseover',() => {
div.classList.add('toggled')

    })

});

