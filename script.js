const container = document.querySelector('.container');
for (let i = 0; i < 256; i++) {
    const pixels = document.createElement('div');
    container.appendChild(pixels);
    pixels.setAttribute('class', 'pixels');
}