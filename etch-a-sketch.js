let container = document.getElementById('container');

let div = document.createElement('div');
div.classList = 'cell';


for (let i=0; i<(16*16); i++) {
    container.appendChild(div.cloneNode());
}

let divs = document.getElementsByClassName('cell');