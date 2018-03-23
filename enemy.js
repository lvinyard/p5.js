var img;

function preload() {
  img = loadImage('images/zach2.png');
}

function enemy(x,y) {
 this.x = x;
 this.y = y;
 this.r = 25;

 this.xdir =1;


 this.toDelete = false;

 this.die = function(){
   this.toDelete = true;
 }

this.show = function() {
  ellipse(this.x+53,this.y+50, this.r*2,this.r*2);
  image(img,this.x,this.y);
  img.resize(100,100);


  }

this.shiftDown = function() {
  this.xdir*=-1;
  this.y+=this.r;
}

this.move = function() {
  this.x = this.x +this.xdir;
}


}
