
//function to apply color black to tile being moused over
function changeColor() {
  this.style['background-color'] = "black";
};

//function to clear grid div and append a new grid to the parent #container-grid
function newGrid () { //function to 
  const grid = document.querySelector("#grid");
  grid.innerHTML = "";
  for (let i = 0; i < (gridSize ** 2); i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    grid.appendChild(tile);
  };
};

//function to apply mouseover effect to grid after being created
function addMouseOverEffect() {
  const tiles = document.querySelectorAll('.tile');
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('mouseover', changeColor);
  };
};

//declare variable for new grid button
const gridButton = document.querySelector('#new-grid');

//add functionality to new grid button: prompting for a number and then applying that number (gridSize) 
//to the grid css rule 
gridButton.addEventListener('click', () => {
  const grid = document.querySelector("#grid");
  gridSize = prompt("Which size grid? (max 100)");
  if (gridSize > 100) {
    alert("Specified grid too large! Submit value < 100.")
  }
  else if (gridSize < 0) {
    alert("Specified grid impossible. Negative, really?")
  }
  else {
    grid.style['grid-template-columns'] = "repeat(" + gridSize + ", 1fr)";
    grid.style['grid-template-rows'] = "repeat(" + gridSize + ", 1fr)";
    newGrid();
    addMouseOverEffect();
  } 
});

//declare variable for reset button
const resetButton = document.querySelector('#reset');

//add functionality to reset button: selecting all tiles in document and then applying original 
// background color
resetButton.addEventListener('click', () => {
  const tiles = document.querySelectorAll('.tile');
  for (let i = 0; i < tiles.length; i++) {
  tiles[i].style['background-color'] = "rgb(229, 73, 46)";
  }
});






