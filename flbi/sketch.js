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
  this.x = mouseX;
  this.y = mouseY;

  this.update = function() {
    this.x = mouseX;
    this.y = mouseY;
  }
 
 this.show = function() {
    ellipse(this.x, this.y, 10, 10);
  }

}
