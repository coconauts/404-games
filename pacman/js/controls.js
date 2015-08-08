// Handle keyboard controls
var keysDown = {};

var KEY_UP =38, KEY_DOWN =40, KEY_LEFT =37, KEY_RIGHT =39;

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


//Called from update.js
var controls = function(modifier){
  if (KEY_LEFT in keysDown && !isCollidingBlocks(player, LEFT, p(-5,0)))  player.direction = LEFT;
  if (KEY_RIGHT in keysDown && !isCollidingBlocks(player,RIGHT, p(5,0)))  player.direction = RIGHT;
	if (KEY_UP in keysDown && !isCollidingBlocks(player,UP, p(0,-5)))  player.direction = UP;
	if (KEY_DOWN in keysDown && !isCollidingBlocks(player,DOWN, p(0,5)))  player.direction = DOWN;
}
