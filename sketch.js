let bubbles = [];
//let unicorn;

function setup() {
	createCanvas(600, 400);
	for (let i = 0; i < 20; i++){
		let x = random(width);
		let y = random(height);
		let r = random (10,50);
		bubbles[i]=  new Bubble(x,y,r);
	}
	//unicorn = new Bubble(400,200,100);
}


function draw() {
 background(0);



	for ( let b of bubbles){
		b.show();
		b.move();

		let overlappin = false;
		for(let other of bubbles){
		if (b !== other && b.intersects(other)){
			overlappin = true;
		}

	}
		if(overlappin){
			b.changeColor(255);
		}else {
			b.changeColor(0);
		}

}
}

class Bubble {
	constructor (x,y,r){

		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;

	}

	intersects(other) {

		let d = dist(this.x, this.y , other.x, other.y)
	  if ( d < this.r + other.r){
			return true;
	  } else {
			return false;
		}

	}

	rollover(x,y) {
		let d = dist(x,y,this.x, this.y)
		if (d <this.r){
			return true
			//console.log("CLICKED ON BUBBLE");
		} else {
		return false;
		}
	}

	changeColor(bright){
		this.brightness = bright;
	}

 move() {
	this.x = this.x + random(-2,2);
	this.y = this.y + random(-2,2);
}

show() {
	stroke(255);
	strokeWeight(4);
	fill(this.brightness, 125);
	ellipse(this.x,this.y, this.r *2);
	//image(flower, this.x, this.y)
}

//////////////////






//HEllo my name is lucashello my name is luicas


/////








///////


///////

}
