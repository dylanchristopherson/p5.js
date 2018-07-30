function Moon() {
  this.x = 20;
  this.y = 20

  this.show = function(Planet) {
  	translate(Planet.posx, Planet.posy);
  	rotate(angle * -4);
  	ellipse(this.x, this.y, 10, 10);
  }

  this.out = function () {
  	console.log("px", Planet.posx);
  	console.log("py", Planet.posy);
  }
}