var c;
var pipes = [];

function setup() {
  // put setup code here
  createCanvas(500,600);
  c = new Circle();
  pipes.push(new Pipe());
}

function draw() {
  // put drawing code here
 
  background(51);               

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  for (var i = pipes.length-1; i >= 0; i--) {
	  
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  

    pipes[i].hits(c);
  }
  c.update();
  c.show();
 
}

function Circle() {
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

  this.hits = function(Circle) {
    if (Circle.y < this.topp || Circle.y > height-this.bottom) {
      console.log("x", this.x);
      console.log("w", this.w);
      if ((Circle.x > this.x) && (Circle.x < this.x + this.w)) {
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

function keyPressed() {
  if (key == ' ') {  
    c.up();  
  }
}
