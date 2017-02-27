var carPic = document.createElement("img");
var trackPicRoad = document.createElement("img");
var trackPicWall = document.createElement("img");
var trackPicGoal = document.createElement("img");
var trackPicTree = document.createElement("img");
var trackPicFlag = document.createElement("img");

var picsToLoad = 0;

function countLoadedImageAndLaunchIfReady() {
  picsToLoad--;
  if (picsToLoad <= 0) {
    loadingDoneSoStartGame();
  }
}

function loadImages() {
  var images = [
    { varName: carPic, theFile: "player1.png" },
    { varName: trackPicRoad, theFile: "track_road.png" },
    { varName: trackPicWall, theFile: "track_wall.png" },
    { varName: trackPicGoal, theFile: "track_goal.png" },
    { varName: trackPicTree, theFile: "track_tree.png" },
    { varName: trackPicFlag, theFile: "track_flag.png" }
  ];

  picsToLoad = images.length;

  for (var i = 0; i < images.length; i++) {
    beginLoadingImage(images[i].varName, images[i].theFile);
  }
}

function beginLoadingImage(imgVar, fileName) {  
  imgVar.onload = countLoadedImageAndLaunchIfReady;
  imgVar.src = "images/"+fileName;
}