const PLAYER_MOVE_SPEED = 3.0;

function warriorClass() {
  this.keyHeld_North = false;
  this.keyHeld_South = false;
  this.keyHeld_West = false;
  this.keyHeld_East = false;

  this.setupControls = function (northKey, eastKey, southKey, westKey) {
    this.controlKeyForNorth = northKey;
    this.controlKeyForSouth = southKey;
    this.controlKeyForWest = westKey;
    this.controlKeyForEast = eastKey;
  }

  this.init = function (whichGraphic, whichName) {
    this.myBitmap = whichGraphic;
    this.myName = whichName;
    this.reset();
  }

  this.reset = function () {
    this.x = 75
    this.y = 75;
    this.speed = 0;
    this.ang = -0.5 * Math.PI;

    if (this.homeX == undefined) {
      for (var i = 0; i < roomGrid.length; i++) {
        if (roomGrid[i] == TILE_PLAYER) {
          var tileRow = Math.floor(i / ROOM_COLS);
          var tileCol = i % ROOM_COLS;
          this.homeX = tileCol * TILE_W + 0.5 * TILE_W;
          this.homeY = tileRow * TILE_H + 0.5 * TILE_H;
          roomGrid[i] = TILE_GROUND;
          break;
        }
      }
    }
    this.x = this.homeX;
    this.y = this.homeY;
  }

  this.move = function () {
    var nextX = this.x;
    var nextY = this.y;

    if (this.keyHeld_North) {
      nextY -= PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_East) {
      nextX += PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_South) {
      nextY += PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_West) {
      nextX -= PLAYER_MOVE_SPEED;
    }

    var walkingIntoTileType = getTileAtPixelCoord(nextX, nextY);

    if (walkingIntoTileType == TILE_GROUND) {
      this.x = nextX;
      this.y = nextY;
    } else if (walkingIntoTileType == TILE_GOAL) {
      document.getElementById("debugText").innerHTML = this.myName + " won";
      this.reset();
    }
  }

  this.draw = function () {
    drawBitmapCenteredAtLocationWithRotation(this.myBitmap, this.x, this.y, 0.0);
  }

}