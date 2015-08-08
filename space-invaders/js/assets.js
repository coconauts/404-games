/**
Ship and laser assets by Cpt_Flash
Available at: http://opengameart.org/content/space-ships-2-units
License: GPL 3.0
**/

// Background image
var bgReady = false;
var bgImage = new Image();

bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/32_player.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/32_enemy.png";

// Hero image
var shotReady = false;
var shotImage = new Image();
shotImage.onload = function () {
	shotReady = true;
};
shotImage.src = "images/32_laser_blue.png";

var shotRedReady = false;
var shotRedImage = new Image();
shotRedImage.onload = function () {
	shotRedReady = true;
};
shotRedImage.src = "images/32_laser_red.png";
