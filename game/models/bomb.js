// Declaration of bullet data.
function Bomb(game){
	this.game = game;
	//this.sprite = 10;
	this.sprite = null;
	this.speed = 350;
	this.type = null;
	this.maxDistance = 750;
	this.explosionTime = 3;
	//this.stopped = true;
	var timer;
}


// Initializes the bullet sprites.
Bomb.prototype.render = function(type){
	this.sprite = this.game.add.sprite(null, null, 'bomb');

	// sets sprite properties
	this.sprite.alpha = 0; // invisible sprite
	this.game.physics.arcade.enable(this.sprite); // enables physics on sprite
};

// Loads the bomb sprite
Bomb.prototype.load = function(type){
	this.render(type);
	timer = game.time.create(false)
	timer.start();
}

// Stops the bomb movement.
Bomb.prototype.stop = function(){
	//this.stopped = true;
	this.sprite.body.acceleration.x = -10;
	this.sprite.body.acceleration.y = -10;
	
	// tests to find the error 
	
	//this.sprite.acceleration.x = 0;
	//this.sprite.acceleration.y = 0;
	//this.sprite.body.velocity.x = 0;
	//this.sprite.body.velocity.y = 0;
}


// Moves the bomb's sprite with a given speed and direction.
Bomb.prototype.move = function(speed, direction){
	switch (direction) {
		//Vertical=0; Horizontal=1
		case 0:
			this.sprite.body.velocity.y = speed;
			break;
		case 1:
			this.sprite.body.velocity.x = speed;
			break;
	}
}

// Set the initial position of the bullet's sprite.
Bomb.prototype.setBodyPosition = function(x, y){
	this.sprite.x = x;
	this.sprite.y = y;
}

// Checks the direction and handles the movement.
Bomb.prototype.handleMovement = function(initialX, initialY, direction){
	

	switch(direction){
		case "Up":
			this.move(-this.speed, 0);
			break;
		case "Down":
			this.move(this.speed, 0);
			break;
		case "Left":
			this.move(-this.speed, 1);
			break;
		case "Right":
			this.move(this.speed, 1);
			break;
	}
}


Bomb.prototype.dissapear = function(){
	this.sprite.alpha = 0;
}

// Start the shot of the bullet
Bomb.prototype.throw = function(x, y, direction){

	this.stop();
	this.setBodyPosition(x, y);
	this.handleMovement(x, y, direction);
	this.sprite.alpha = 1;	
	setTimeout(explode,500);

	//timer.add(500, this.stop, this.game);
	//timer.add(1000, this.dissapear, this.game);

}
function explode(){
	alert('BOOM');
	this.sprite.body.delete;
}
