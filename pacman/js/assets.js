var setImage = function(img){
	var i = new Image();
	i.src = img;
	return i;
};

// Hero image
var playerImageClose =  setImage("images/32_player_close.png");
var playerImageOpen = setImage("images/32_player_open.png");

var monsterImage = setImage("images/enemy_red.png");

var dotImage = setImage("images/32_dot.png");

var backgroundImage = {};
backgroundImage.center = setImage("images/bg_center.png");
backgroundImage.left = setImage("images/bg_left.png");
backgroundImage.right = setImage("images/bg_right.png");
backgroundImage.down = setImage("images/bg_down.png");
backgroundImage.up = setImage("images/bg_up.png");
