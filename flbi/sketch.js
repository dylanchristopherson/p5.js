var c;
var pipes = [];

function setup() {
  // put setup code here
  createCanvas(500,600);
  c = new Bird();
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

function keyPressed() {
  if (key == ' ') {  
    c.up();  
  }
}
