var c;

function setup() {
  // put setup code here
  createCanvas(400,400);
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
  this.g = .1;     // gravity
  this.a = 0;

  this.update = function() {
    
    this.g = this.g + (this.g * .1);
    this.y = this.y + 2 + this.g;
   
 
 // this.y = mouseY;
    if(this.y >= height) {
      this.y = height;
    }
    if(this.y <= 0) {
      this.y = 0;
    }
  }
 
  this.show = function() {
    ellipse(this.x, this.y, 25, 15);
  }

  this.up = function() {
    this.y = this.y - 50;
    this.g = .1;
  }

}

function keyPressed() {
  c.up();  
}
