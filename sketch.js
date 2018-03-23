//Preload vars and function
var img = [];
var sounds = [];

function preload() {
  img[0] = loadImage('images/zach2.png');
	img[1] = loadImage('images/tractor1.png');
	sounds[0] = loadSound("sounds/kappa_2.mp3");
	sounds[1] = loadSound("sounds/pew.mp3");
}

//VARS
var ship;
var enemies = [];
var bullets = [];

//Create Canvas and adds ship
function setup() {
	createCanvas(600,400);
	ship = new Ship();
	for (var i =0; i <5 ; i++) {
			enemies[i] = new enemy(i*80+80,60);
 	}
}

//Function draw

function draw() {
background(51);
ship.show();
ship.move();

	//calls to show and move bullets
		for (var i =0; i <bullets.length ; i++) {
				bullets[i].show();
				bullets[i].move();
  //checks if bullets and enemies collide and then calls to splice them, plays kappa sound
				for (var j =0; j <enemies.length ; j++) {
						if (bullets[i].hits(enemies[j])) {
							enemies[j].die();
							 bullets [i].done();
							console.log("HIT");
							sounds[0].play();
						}
				}
		}

		//checks to see if enemies get to edge of screen, then moves them down and chnages direction
			var edge= false;
		for (var i =0; i <enemies.length ; i++) {
				enemies[i].show();
				enemies[i].move();

				if(enemies[i].x > width||enemies[i].x <0){
					edge = true;
			  	}
			if(enemies[i].y == 346){
				//	youlose();
			}
		}
			if(edge) {
			for (var i = 0; i <enemies.length;i++){
				enemies[i].shiftDown();
				}
			}




			for (var i =bullets.length-1; i >=0 ; i--) {
				if(bullets[i].toDelete){
					bullets.splice(i,1);
				}
			}
				for (var i =enemies.length-1; i >=0 ; i--) {
					if(enemies[i].toDelete){
						enemies.splice(i,1);
					}
				}


}

//CONTROLS

	//If let go of arrow key then ship stops
function keyReleased(){
	if(key!== ' ')
	ship.setDir(0);
}

	//Sets bounds for ships x movement
	if(ship.x > width-25 || ship.x <25){
				ship.setDir(0);
			}


	//If space key is hit, fire bullet and play pew sound

function keyPressed() {

	if (key === ' '){
		var bullet = new Bullet(ship.x,height);
		bullets.push(bullet);
	sounds[1].play();
	}

	//Uses right and left arrows to change direction

	if (keyCode === RIGHT_ARROW) {
		ship.setDir(1);
	} else if (keyCode === LEFT_ARROW) {
		ship.setDir(-1);
	}
}
