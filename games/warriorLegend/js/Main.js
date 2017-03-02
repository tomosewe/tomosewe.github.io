var canvas;
var canvasContext;
var player1 = new warriorClass();

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

  player1.init(playerPic, "Blue Car");
  initInput();
}

function moveEverything() {
  player1.move();
}

function drawEverything() {  
  drawRoom();
  player1.draw(); 
}