const body = document.querySelector('body');
const start = document.querySelector('.start');
const grid = document.createElement('div');
grid.classList.add('grid');

let measures = 256;

function randomNum(){
    return Math.floor(Math.random() * 255);
};

const mesaurement = ()=>{
    for (let i = 0; i < measures; i++) {
        let divGrid = document.createElement('div');
        divGrid.classList.add('div-grid');

        divGrid.onmouseover = ()=>{
            divGrid.style.cssText = `background-color: rgb(${randomNum()},${randomNum()},${randomNum()});`;
        };

        grid.appendChild(divGrid);
    }
};

//Aca empieza el juego
start.addEventListener('click', ()=>{
    body.removeChild(start);
    body.appendChild(grid);
    mesaurement();
});