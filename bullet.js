
function Bullet(x,y) {
 this.x = x;
 this.y = y;
 this.r = 8;
 this.toDelete = false;

 this.done = function(){
   this.toDelete = true;
 }

this.show = function() {
  noStroke();
  noFill();
  ellipse(this.x+10,this.y+20,this.r*2,this.r*2);
  image(img[1],this.x,this.y);
  img[1].resize(40,40);

  }

  this.hits = function(enemy){
    var d = dist(this.x,this.y, enemy.x+13,enemy.y+25 );
    if (d < this.r + enemy.r) {
      return true;
    }else {
      return false;
    }
  }

  this.move = function(){
    this.y = this.y-5;
  }

}
