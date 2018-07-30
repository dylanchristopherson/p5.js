function ballBounce() {
  this.x = 350;
  this.y = 350;

  this.xspeed = 6;
  this.yspeed = -3;

  this.show = function() {
    background(51);
    ellipse(this.x, this.y, 15, 15);	
  }
  this.update = function() {
    
    this.x += this.xspeed;
    this.y += this.yspeed;

    if(this.x > width || this.x < 0) {
    	this.xspeed *= -1;
    }
    if(this.y > height || this.y < 0) {
    	this.yspeed *= -1;
    }

  }

}