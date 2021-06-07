const body = document.querySelector('body');
const start = document.querySelector('.start');
const grid = document.createElement('div');
grid.classList.add('grid');
const lines = document.querySelector('#lines');
const clear = document.querySelector('#clear');

let measures = 256;

function randomNum(){
    return Math.floor(Math.random() * 255);
};

const mesaurement = ()=>{
    for (let i = 0; i < measures; i++) {
        let divGrid = document.createElement('div');
        divGrid.setAttribute('id', 'pixel');

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

lines.addEventListener('click', ()=>{
    let divGrid = document.querySelectorAll('#pixel');
    divGrid.forEach(pixel => {
        pixel.classList.toggle('div-grid');
    });
});

clear.addEventListener('click', ()=>{
    let altoXancho = parseInt(prompt('Alto y ancho de pixeles (ingresa el numero entero)'));
    if (altoXancho > 0 && altoXancho < 51) {
        grid.style.cssText = `grid-template-columns: repeat(${altoXancho}, 1fr); grid-template-rows: repeat(${altoXancho}, 1fr);`;
        measures = altoXancho * altoXancho;
        grid.innerHTML = '';
        mesaurement();
    }
    else{
        alert('Ingreso incorrecto. Vuelve a clickear "Clear" e ingresa un numero valido entre 1 y 50');
    }
    

})