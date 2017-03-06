
function movingWrapPositionClass() {
  this.handleScreenWrap = function () {
    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = canvas.width;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = canvas.height;
    }
  }

  this.reset = function () {
    this.xv = 0.0;
    this.yv = 0.0;
  }

  this.move = function () {
    this.x += this.xv;
    this.y += this.yv;
    this.handleScreenWrap();
  }
} 