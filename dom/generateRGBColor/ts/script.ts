window.onload = () => {
  main();
};

function main() {
  const generateBtn = document.getElementById(
    'generate-btn'
  ) as HTMLButtonElement;
  const container = document.getElementById('container') as HTMLDivElement;

  generateBtn.addEventListener('click', () => {
    container.style.backgroundColor = generateRGB();
  });
}

function generateRGB() {
  const red: number = Math.floor(Math.random() * 255);
  const green: number = Math.floor(Math.random() * 255);
  const blue: number = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
