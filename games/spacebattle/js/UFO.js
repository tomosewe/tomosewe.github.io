const UFO_SPEED = 1.9;
const UFO_TIME_BETWEEN_CHANGE_DIR = 85;

ufoClass.prototype = new movingWrapPositionClass();
function ufoClass() {
  this.init = function (whichGraphic) {
    this.myBitmap = whichGraphic;
    this.reset();
  }

  this.superclassReset = this.reset;
  this.reset = function () {
    this.superclassReset();
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.cyclesTilDirectionChange = 0;
  }

  this.superclassMove = this.move;
  this.move = function () {
    this.superclassMove();

    this.cyclesTilDirectionChange--;
    if (this.cyclesTilDirectionChange <= 0) {
      var randAng = Math.random() * Math.PI * 2.0;
      this.xv = Math.cos(randAng) * UFO_SPEED;
      this.yv = Math.sin(randAng) * UFO_SPEED;
      this.cyclesTilDirectionChange = UFO_TIME_BETWEEN_CHANGE_DIR;
    }
  }

  this.draw = function () {
    drawBitmapCenteredAtLocationWithRotation(this.myBitmap, this.x, this.y, 0);
  }
} 