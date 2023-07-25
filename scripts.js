const generateButton = document.querySelector("#generate-button");
const colorsDiv = document.querySelector(".colors");

generateButton.addEventListener("click", generateColors);

function generateColors() {
  colorsDiv.innerHTML = "";
  //gera as cores
  for (let i = 0; i < 5; i++) { // gera paleta de 5 cores de cada vez
    const color = generateRandomColor();
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    const colorName = document.createElement("p"); // imprime as cores
    colorName.innerText = color;
    colorName.style.color = color; // gera o nome na cor da paleta
    colorDiv.appendChild(colorName);
    colorsDiv.appendChild(colorDiv);
  }
}

// Gera as cores de forma aleatória
function generateRandomColor() {
  const letters = "0123456789ABCDEF"; // possibilidades
  let color = "#"; // Toda cor começa com este simbolo #
  for (let i = 0; i < 6; i++) {  // 
    color += letters[Math.floor(Math.random() * 16)];// criação de cores válidas
  }
  return color;
}
