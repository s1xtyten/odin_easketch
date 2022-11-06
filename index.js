const grid = document.querySelector('#container');
let tileContent = 1;


for (let i = 0; i < 256; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.innerHTML = tileContent;
  grid.appendChild(tile);
  tileContent += 1;
};

const tile = document.getElementsByClassName('tile');

function changeColor() {
  this.style['background-color'] = "black";
};

for (let i = 0; i < tile.length; i++) {
  tile[i].addEventListener('mouseover', changeColor);
};






