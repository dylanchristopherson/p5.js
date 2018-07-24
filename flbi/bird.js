function Bird() {
  this.x = 150;    // x position
  this.y = 10;     // y position
  this.gravity = .6;     // gravity
  this.velocity = 0;    // velocity
  this.lift = -20;

  this.update = function() {

    this.velocity += this.gravity;
    this.velocity *= 0.9
    this.y += this.velocity;
 
    if(this.y >= height) {
      this.y = height;
      this.velocity = 0;
    }
   
    if(this.y <= 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
 
  this.show = function() {
    ellipse(this.x, this.y, 30, 30);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

}
