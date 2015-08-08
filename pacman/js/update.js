var playerSpriteTimeout ;
// Update game objects
var update = function (modifier) {
	controls(modifier);

	if (player.dead || isCollidingBlocks(player,player.direction)){
		clearTimeout(playerSpriteTimeout);
		player.isMoving = false;
	} else {
		if (!player.isMoving) {
			player.isMoving = true;
			playerSpriteTimeout = setInterval(function(){
				player.sprite = (player.sprite +1) %2;
			}, 250);
		}
		move(player, modifier);
	}
	updateEnemies(modifier); //AI

	//Enemy collision
	for (var i= 0; i < enemies.length; i++){
    var enemy = enemies[i];
    if (collision.collision(enemy, player, SIZE)) player.dead = true;
  }
	//Eating dots
	for (var i= 0; i < dots.length; i++){
    var dot = dots[i];
    if (collision.collision(dot, player, SIZE / 2)) dots.splice(i, 1);
  }
};

var move = function(obj, modifier){

  obj.x  = obj.x + obj.direction.x * obj.speed  * modifier;
  obj.y =  obj.y + obj.direction.y * obj.speed * modifier;

  if (obj.y < 0 ) obj.y = canvas.height;
  else if (obj.y > canvas.height ) obj.y = 0 ;
}

var isCollidingBlocks = function(obj, direction, offset){
	if (!offset) offset = p(0,0);
		for (var i=0; i < blocks.length; i++){
		var block = blocks[i];

		var isColliding = collision.isCollidingDirection(block, obj, direction, offset);
		if (isColliding) return true;
	}
	return false;
}
