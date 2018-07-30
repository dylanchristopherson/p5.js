//This is two different programs
//1 is an attempt at a solarsystem
//2 is an articulating arm from the p5.js book
//Both implement translation and rotation


//solar system
var angle = 0.0
var mangle = 0.0
var centerX = 350;
var centerY = 350;
var earth, emoon, mercury, mars, mmoon;

//articulating arm
var angleAA = 0.0;
var angleDirection = 1;
var speed = 0.05;

//ballWallBouncing
var ball;

function setup() {
  
  //solar system
  createCanvas(700, 700);
  earth = new Planet(100,100,30,30);
  mercury = new Planet(0,50, 20, 20);
  mars = new Planet(-200, 200, 40, 40)
  emoon = new Moon();
  mmoon = new Moon();

  //ballWallBouncing
  ball = new ballBounce();
}

function draw() {

//  solarSystem();
//  articulatingArm();


  ball.show();
  ball.update();
}

function solarSystem() {
  background(255,0,0);
  translate(centerX, centerY);
  rotate(angle);
  ellipse(0,0, 60, 60);
  earth.show();  
  mercury.show();
  mars.show();

  mmoon.show(mars)
  emoon.show(earth);

  angle += 0.01;
}

function articulatingArm() {
  background(204);
  translate(20,25); //Move to starting position
  rotate(angleAA);
  strokeWeight(12);
  line(0,0,40,0);
  translate(40,0);  //Move to next joint
  rotate(angle * 2.0);
  strokeWeight(6);
  line(0,0,30,0);
  translate(30,0);
  rotate(angle * 2.5);
  strokeWeight(3);
  line(0,0,20,0);

  angle += speed * angleDirection;
  if((angle > QUARTER_PI) || (angle < 0)) {
    angleDirection *= -1;
  }
}

 