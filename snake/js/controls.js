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
var controls = function(){
  if (KEY_LEFT in keysDown)  GAME_STATE.snake.move('l');
  if (KEY_RIGHT in keysDown)  GAME_STATE.snake.move('r');
	if (KEY_UP in keysDown)  GAME_STATE.snake.move('u');
	if (KEY_DOWN in keysDown)  GAME_STATE.snake.move('d');
}
