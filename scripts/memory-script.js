var clickRes = document.getElementById("click-result");
var old_Target;

function setUpNewGame() {
  const gameBoard = document.getElementById("game-board");

  for (let i = 0; i < 4; i++) {
    let rowEl = document.createElement('div');
    rowEl.setAttribute("class", "row");
    for (let j = 0; j < 4; j++) {
      let one_cellEl = document.createElement('div');
      one_cellEl.setAttribute("class", "col-sm one-cell");
      rowEl.appendChild(one_cellEl);
    }
    gameBoard.appendChild(rowEl);
  }
  document.body.appendChild(gameBoard);
  setUpImagesInCells();
  gameBoard.addEventListener('click', checkImageClicks);

}

function setUpImagesInCells() {
  const cellsOnBoard = document.querySelectorAll(".one-cell");
  for (let i = 0; i < cellsOnBoard.length; i++) {
    let oneCell = cellsOnBoard[i];
    let availablePics = getAvailablePics();
    let randomPicId = generateARandomPictureId(availablePics.length);
    let cellImgObj = availablePics[randomPicId - 1];
    let imgHtml = '<img src="' + cellImgObj.url + '">';
    cellImgObj.onBoard = cellImgObj.onBoard + 1;
    oneCell.innerHTML = imgHtml;
  }
}

function generateARandomPictureId(availablePicsArrayLength) {
  return Math.floor(Math.random() * availablePicsArrayLength) + 1;
}

function getAvailablePics() {
  return pictures.filter(pic => pic.onBoard < 2);
}

function checkImageClicks() {
  if (old_Target === null || old_Target === undefined) {
    old_Target = event.target;
  }
  else {
    if (old_Target.src === event.target.src) {
      clickRes.innerText = "yay!! you got it !!";
    }
    else {
      clickRes.innerText = "nope :( Try again ";
    }
    old_Target = null;
  }

}


const pictures = [
  {
    id: 1,
    url: "imgs/chinawall.jpg",
    onBoard: 0
  },
  {
    id: 2,
    url: "imgs/colloseum.png",
    onBoard: 0
  }, {
    id: 3,
    url: "imgs/eiffel.jpg",
    onBoard: 0
  }, {
    id: 4,
    url: "imgs/empirestate.png",
    onBoard: 0
  }, {
    id: 5,
    url: "imgs/petersburg.jpg",
    onBoard: 0
  }, {
    id: 6,
    url: "imgs/pisatower.jpg",
    onBoard: 0
  }, {
    id: 7,
    url: "imgs/pyramids.jpg",
    onBoard: 0
  }, {
    id: 8,
    url: "imgs/taj.png",
    onBoard: 0
  }

]


