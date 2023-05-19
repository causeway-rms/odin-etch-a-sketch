// Makes the grid size dynamic with user input

const gridSize = prompt('Enter the desired grid size (Must be 1 to 100): ');
const cellCount = gridSize * gridSize;
const cellHeight = 100 / gridSize;
const cellWidth = 100 / gridSize;

// Constructs the grid according to user input

const container = document.querySelector('.container');
for (let i = 0; i < cellCount; i++) {
    const pixels = document.createElement('div');
    container.appendChild(pixels);
    pixels.setAttribute('class', 'pixels');
    pixels.style.width = `${cellWidth}%`;
    pixels.style.height = `${cellHeight}%`;
}

// Makes the grid cells change color when mouse hovers over

const cells = document.getElementsByClassName('pixels');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseenter', function() {
        cells[i].classList.add('change-color');
    })
}