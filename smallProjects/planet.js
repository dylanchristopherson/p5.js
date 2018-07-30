function Planet(posX, posY, sizeX, sizeY) {
  this.posx = posX;
  this.posy = posY; 

  this.show = function() {

  	ellipse(this.posx, this.posy, sizeX, sizeY);
  }
}