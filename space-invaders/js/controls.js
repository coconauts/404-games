// Handle keyboard controls
var keysDown = {};

var KEY_UP =38, KEY_DOWN =40, KEY_LEFT =37, KEY_RIGHT =39;

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

addEventListener("mousemove", function(evt) {
    hero.x = evt.pageX - 24 ;
}, false);

var lastShot = 0;
var SHOT_DELAY = 1000;

addEventListener("click", function(evt) {
    if (!hero.dead) {
      var now = new Date().getTime();
      if (lastShot  +SHOT_DELAY < now  ) {
        lastShot = now;
        playerShots.push({x:evt.pageX, y: hero.y});
      }
    }
}, false);


//Called from update.js
var controls = function(modifier){
  if (KEY_LEFT in keysDown) { // Player holding left
    hero.x -= hero.speed * modifier;
  }
  if (KEY_RIGHT in keysDown) { // Player holding right
    hero.x += hero.speed * modifier;
  }
}
