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
  // clear();   
 
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  for (var i = pipes.length-1; i >= 0; i--) {
	  
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  

    if (pipes[i].hits(c)) {
      console.log("HIT");
    }
  }

  background(51);               
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
  this.higlight = false;

  this.show = function() {
    fill(255);

    if(this.hightlight == true) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.topp);
    rect(this.x, height-this.bottom, this.w, this.bottom);
i
  }

  this.hits = function(Circle) {
    if (Circle.y < this.top || Circle.y > height -this.bottom) {
      if (Circle.x > this.w && Circle.x < this.x + this.w) {
        this.hightlight = true;
	return true;
      }	    
    }
//`	  this.hightlight = false;
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
