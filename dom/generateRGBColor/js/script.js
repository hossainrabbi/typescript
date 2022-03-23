"use strict";
window.onload = () => {
    main();
};
function main() {
    const generateBtn = document.getElementById('generate-btn');
    const container = document.getElementById('container');
    generateBtn.addEventListener('click', () => {
        container.style.backgroundColor = generateRGB();
    });
}
function generateRGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}
