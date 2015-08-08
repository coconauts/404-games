// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	controls();
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

//var canvas = document.createElement('canvas');
//document.body.appendChild(canvas);



setInterval(function(){update()}, 300);

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame =
	(
		w.requestAnimationFrame ||
		w.webkitRequestAnimationFrame ||
		w.msRequestAnimationFrame ||
		w.mozRequestAnimationFrame
	);

// Let's play this game!
var then = Date.now();
initGameState(main);
