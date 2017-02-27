var carPic = document.createElement("img");
var trackPicRoad = document.createElement("img");
var trackPicWall = document.createElement("img");

var picsToLoad = 3;

function countLoadedImageAndLaunchIfReady() {
  picsToLoad--;
  if (picsToLoad <= 0) {
    loadingDoneSoStartGame();
  }
}

function loadImages() {
  carPic.onload = countLoadedImageAndLaunchIfReady;
  carPic.src = "player1.png";

  trackPicRoad.onload = countLoadedImageAndLaunchIfReady;
  trackPicRoad.src = "track_road.png";

  trackPicWall.onload = countLoadedImageAndLaunchIfReady;
  trackPicWall.src = "track_wall.png";
}