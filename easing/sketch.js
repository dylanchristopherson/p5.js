var x = 0;
var y = 0;
var easing = 0.01;

function setup() {
  // put setup code here

  createCanvas(displayWidth, displayHeight);

}

function draw() {
  // put drawing code here
  background(51);
  var targetX = mouseX;
  x += (targetX - x) * easing;

  var targetY = mouseY;
  y += (targetY - y) * easing;

  ellipse(x, y, 12, 12);
  print(targetX + " : " + x);
}
