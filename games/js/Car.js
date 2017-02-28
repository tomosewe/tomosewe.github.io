const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.03;
const MIN_TURN_SPEED = 0.5;

function carClass() {
  this.carX = 75
  this.carY = 75;
  this.carSpeed = 0;
  this.carAng = -0.5 * Math.PI;
  
  this.keyHeld_Gas = false;
  this.keyHeld_Reverse = false;
  this.keyHeld_TurnLeft = false;
  this.keyHeld_TurnRight = false;

  this.setupControls = function(forwardKey, backKey, leftKey, rightKey){
    this.controlKeyForGas = forwardKey;
    this.controlKeyForReverse = backKey;
    this.controlKeyForTurnLeft = leftKey;
    this.controlKeyForTurnRight = rightKey;
  }

  this.carInit = function (whichGraphic) {
    this.myBitmap = whichGraphic
    this.carReset();
  }

  this.carReset = function () {
    for (var i = 0; i < trackGrid.length; i++) {
      if (trackGrid[i] == TRACK_PLAYER) {
        var tileRow = Math.floor(i / TRACK_COLS);
        var tileCol = i % TRACK_COLS;
        this.carX = tileCol * TRACK_W + 0.5 * TRACK_W;
        this.carY = tileRow * TRACK_H + 0.5 * TRACK_H;
        trackGrid[i] = TRACK_ROAD;
        break;
      }
    }
  }

  this.carMove = function() {
    if (Math.abs(this.carSpeed) > MIN_TURN_SPEED) {
      if (this.keyHeld_TurnLeft) {
        this.carAng -= TURN_RATE * Math.PI;
      }

      if (this.keyHeld_TurnRight) {
        this.carAng += TURN_RATE * Math.PI;
      }
    }

    if (this.keyHeld_Gas) {
      this.carSpeed += DRIVE_POWER;
    }

    if (this.keyHeld_Reverse) {
      this.carSpeed -= REVERSE_POWER;
    }

    var nextX = this.carX + Math.cos(this.carAng) * this.carSpeed;
    var nextY = this.carY + Math.sin(this.carAng) * this.carSpeed;

    if (checkForTrackAtPixelCoord(nextX, nextY)) {
      this.carX = nextX;
      this.carY = nextY;
    } else {
      this.carSpeed = -0.5 * this.carSpeed;
    }

    this.carSpeed *= GROUNDSPEED_DECAY_MULT;
  }

  this.carDraw = function() {
    drawBitmapCenteredAtLocationWithRotation(this.myBitmap, this.carX, this.carY, this.carAng);
  }

}