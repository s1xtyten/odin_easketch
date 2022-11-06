const grid = document.querySelector('#grid');


for (let i = 0; i < 256; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  grid.appendChild(tile);
};

const tile = document.getElementsByClassName('tile');

function changeColor() {
  this.style['background-color'] = "black";
};

for (let i = 0; i < tile.length; i++) {
  tile[i].addEventListener('mouseover', changeColor);
};






