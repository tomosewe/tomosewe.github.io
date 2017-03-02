var canvas;
var canvasContext;
var player1 = new carClass();
var player2 = new carClass();

window.onload = function () {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  loadImages();
}

function loadingDoneSoStartGame() {
  // these next few lines set up our game logic and render to happen 30 times per second
  var framesPerSecond = 30;
  setInterval(function () {
    moveEverything();
    drawEverything();
  }, 1000 / framesPerSecond);

  player2.carInit(car2Pic, "Green Car");
  player1.carInit(carPic, "Blue Car");
  initInput();
}

function moveEverything() {
  player1.carMove();
  player2.carMove();
}

function drawEverything() {  
  drawTracks();
  player1.carDraw(); 
  player2.carDraw(); 
}