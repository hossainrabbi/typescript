"use strict";
window.onload = () => {
    main();
};
function main() {
    const container = document.querySelector('main');
    const input = document.getElementById('input-item');
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', function () {
        const generateColor = generateHexColor();
        input.value = generateColor;
        container.style.backgroundColor = generateColor;
        input.style.color = generateColor;
    });
}
function generateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
