function Pipe() {
  this.topp = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;
  this.highlight = false;

  this.show = function() {

    if (this.highlight == true) {
      fill(255, 0, 0);
    }
    else {
      fill(255,255,255);
    }

    rect(this.x, 0, this.w, this.topp);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.hits = function(bird) {
    if (bird.y < this.topp || bird.y > height-this.bottom) {
      if ((bird.x > this.x) && (bird.x < this.x + this.w)) {
        this.highlight = true;
        return true;
      }	    
    }
    this.highlight = false;
    return false;
  }



  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
  //return this.x < -w
}
