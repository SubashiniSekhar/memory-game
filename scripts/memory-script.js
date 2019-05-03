var clickRes = document.getElementById("click-result");
var old_Target;
const gameBoard = document.getElementById("game-board");
var numberOfAttempts = 0;
var timer;
var numStars = 3;

function playGame() {
  setUpNewGame();
  if (timer != undefined){
    clearInterval(timer);
  }
  gameBoard.addEventListener('click', checkImageClicks);
  setTimer();
  decideStars();
}

function setUpNewGame() {
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
}

function setUpImagesInCells() {
  const cellsOnBoard = document.querySelectorAll(".one-cell");
  for (let i = 0; i < cellsOnBoard.length; i++) {
    let oneCell = cellsOnBoard[i];
    let availablePics = getAvailablePics();
    let randomPicId = generateARandomPictureId(availablePics.length);
    let cellImgObj = availablePics[randomPicId - 1];
    let imgHtml = '<img src="' + cellImgObj.url + '" class="pic closecards">';
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

function openACard(element) {
  element.classList.remove("closecards");
}

function checkImageClicks() {
  if (old_Target === null || old_Target === undefined) {
    old_Target = event.target;
  }
  else if (old_Target != event.target) {
    if (old_Target.src === event.target.src) {
      clickRes.innerHTML = "<div class=\"alert alert-success\">" + "<strong> yay !!you got it!! </strong></div> ";
      openACard(old_Target);
      openACard(event.target);
      checkForAnyCloseCards();

    }
    else {
      clickRes.innerHTML = "<div class=\"alert alert-danger\">" + " <strong> nope: ( Try again ! </strong></div>";
    }
    numberOfAttempts++;
    decideStars();
    document.getElementById("attempts").value = numberOfAttempts;
    old_Target = null;
  }

}

function checkForAnyCloseCards() {
  let anyClosedCards = document.querySelectorAll(".closecards");
  if (anyClosedCards.length == 0) {
    document.getElementById("gameoverDialog").showModal();
    clearInterval(timer);
  }
}

function setTimer() {
  var seconds = 0;
  var minutes = 0;
  timer = setInterval(function(){
    document.getElementById("timer").value = minutes +" : "+seconds;
    seconds++;
    if (seconds>60){
      minutes++;
      seconds = 0;
    }
  },1000);

}

function decideStars() {
  document.getElementById("stars").innerHTML = "";
  if (numberOfAttempts > 10 && numberOfAttempts < 15){
    numStars = 2;
  }
  else if(numberOfAttempts >= 15 && numberOfAttempts <= 20){
    numStars = 1;
  }
  else if(numberOfAttempts > 20 ){
    numStars = 0;
  }
  for(i=0;i<numStars;i++){
    document.getElementById("stars").innerHTML+="<span class='glyphicon glyphicon-star'></span>";
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


