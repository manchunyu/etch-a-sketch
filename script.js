const numberOfGrid = 5 ;
const container = document.querySelector('.container');


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
    event.target.style.backgroundColor = 'black';
})