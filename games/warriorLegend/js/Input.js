const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

function initInput() {
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);  
  
  player1.setupControls(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
  //player2.setupControls(KEY_LETTER_W, KEY_LETTER_S, KEY_LETTER_A, KEY_LETTER_D);
}

function keyPressed(evt) {
  setKeyHoldState(evt.keyCode, player1, true);
  //setKeyHoldState(evt.keyCode, player2, true);
  evt.preventDefault();
}

function keyReleased(evt) {  
  //document.getElementById("debugText").innerHTML="KeyCode Released:"+evt.keyCode;
  setKeyHoldState(evt.keyCode, player1, false);
  //setKeyHoldState(evt.keyCode, player2, false);
}

function setKeyHoldState(thisKey, thisPlayer, setTo) {
  if (thisKey == thisPlayer.controlKeyForNorth) {
    thisPlayer.keyHeld_North = setTo;
  }  
  if (thisKey == thisPlayer.controlKeyForEast) {
    thisPlayer.keyHeld_East = setTo;
  }
  if (thisKey == thisPlayer.controlKeyForSouth) {
    thisPlayer.keyHeld_South = setTo;
  }
  if (thisKey == thisPlayer.controlKeyForWest) {
    thisPlayer.keyHeld_West = setTo;
  }
}