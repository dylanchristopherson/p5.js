var circ;

function setup() {
  // put setup code here
  createCanvas(500,500);
  circ = new Circle();
}

function draw() {
  // put drawing code here
  background(51);
  circ.show();
}

function keyPressed() {
  console.log("Hit");
  if (keyCode == LEFT_ARROW) {
    circ.left();
  }
  else if (keyCode == DOWN_ARROW) {
    circ.down();
  }
  else if (keyCode == RIGHT_ARROW) {
    circ.right();
  }
  else if (keyCode == UP_ARROW) {
    circ.up();
  }

}



