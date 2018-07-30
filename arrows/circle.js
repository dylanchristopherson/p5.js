function Circle() {
  this.x = width/2;
  this.y = height/2;

  this.show = function () {
    ellipse(this.x, this.y, 15, 15);
  }

  this.up = function() {
    this.y -= 10;
    console.log(this.y);
  }

  this.down = function() {
    this.y += 10;
  }

  this.left = function() {
    this.x -= 10;
  }

  this.right = function() {
    this.x += 10;
  }

}
