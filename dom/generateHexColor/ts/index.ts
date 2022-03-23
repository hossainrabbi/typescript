window.onload = () => {
  main();
};

function main() {
  const container = document.querySelector('main') as HTMLElement;
  const input = document.getElementById('input-item') as HTMLInputElement;
  const generateBtn = document.getElementById(
    'generate-btn'
  ) as HTMLButtonElement;

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
