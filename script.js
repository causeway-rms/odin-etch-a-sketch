const container = document.querySelector('.container');
for (let i = 0; i < 256; i++) {
    const pixels = document.createElement('div');
    container.appendChild(pixels);
    pixels.setAttribute('class', 'pixels');
}

const cells = document.getElementsByClassName('pixels');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseenter', function() {
        cells[i].classList.add('change-color');
    })
}