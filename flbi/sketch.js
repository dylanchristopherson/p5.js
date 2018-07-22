var c;
var WIDTH = 400;
var HEIGHT = 400


function setup() {
  // put setup code here
  createCanvas(WIDTH,HEIGHT);
  c = new Circle();
}

function draw() {
  // put drawing code here
  // clear();   

  background(51);               
  c.update();
  c.show();
  
}

function Circle() {
  this.x = 150;    // x position
  this.y = 10;     // y position
  this.gravity = .1;     // gravity
  this.velocity = 0;    // velocity
  this.lift = -10;

  this.update = function() {
    
    this.velocity += this.gravity; 
    this.y += this.velocity;
 
 
 // this.y = mouseY;
    if(this.y >= HEIGHT) {
      this.y = HEIGHT;
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

function keyPressed() {
  if (key == ' ') {  
    c.up();  
  }
}
