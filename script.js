const container = document.querySelector('.container');
const resetButton = document.getElementById('reset')

resetButton.addEventListener('click', () => {

    let newGridNumber = 0;
    do {
        newGridNumber = prompt('Number?');
    } while (newGridNumber > 100 || newGridNumber <= 0);

    const rowdivs = document.querySelectorAll('.rowdiv');
    for (const rowdiv of rowdivs){
        container.removeChild(rowdiv);  
    }
    setGrids(newGridNumber);
});


function setGrids(numberOfGrid) {
    for (let i = 0; i < numberOfGrid; i++){
        const rowdiv = document.createElement('div');
        rowdiv.classList.add('rowdiv');
        for (let j = 0; j < numberOfGrid; j++){
            const grid = document.createElement('div');
            grid.classList.add('grid');
            rowdiv.appendChild(grid);
        }
        container.appendChild(rowdiv);
    }

    container.addEventListener('mouseover', event => {
        const target = event.target;
        const color = setColor();
        target.style.backgroundColor = `#${color['red']}${color['green']}${color['blue']}`;
    });
}
function setColor() {
    const MAX = 0xFF;

    let rgbScheme = {
        'red': 0,
        'blue': 0,
        'green': 0,
    }

    let setRandInt = (n) => {
        return Math.floor(Math.random() * n);
    }

    for (const color in rgbScheme){
        rgbScheme[color] = setRandInt(MAX).toString(16);
    }
    return rgbScheme;
}
setGrids(16);

