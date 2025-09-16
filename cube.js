const colors = ['white', 'red', 'blue', 'green', 'orange', 'yellow'];
let cubeState = Array(54).fill(0); // 6 faces × 9 stickers

const container = document.getElementById('cube-container');

function renderCube() {
  container.innerHTML = '';
  cubeState.forEach((colorIndex, i) => {
    const square = document.createElement('div');
    square.className = 'square';
    square.style.backgroundColor = colors[colorIndex];
    square.onclick = () => {
      cubeState[i] = (cubeState[i] + 1) % colors.length;
      renderCube();
    };
    container.appendChild(square);
  });
}

function scrambleCube() {
  cubeState = cubeState.map(() => Math.floor(Math.random() * colors.length));
  renderCube();
}

renderCube();
