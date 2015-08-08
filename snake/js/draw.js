// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var SIZE = 32;

Cell.prototype.draw = function(){
	switch(this.content){
    case 'SNAKE':
			ctx.fillStyle="gray";
			break;
    case 'BLOCK':
			ctx.fillStyle="black";
			break;
		case 'FOOD':
		  ctx.fillStyle="silver";
      break;
  }
	if (this.content && this.content != 'INVALID'){
		ctx.fillRect(this.x*BLOCK_SIZE, this.y*BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
	}
}

// Draw everything
var render = function () {
	if (GAME_STATE.game_over) {
		ctx.fillStyle = "rgb(250, 0, 0)";
		ctx.font = "48px Helvetica";
		ctx.textAlign = "center";
		ctx.textBaseline = "top";
		ctx.fillText("Game Over", canvas.width / 2, canvas.height * 2 / 3);
	}
	else {
		// draw the background
		ctx.fillStyle="white";
		ctx.fillRect(0,0,canvas.width,canvas.height);

		// draw game state
		Object.keys(GAME_STATE.grid).forEach(function(key){
			GAME_STATE.grid[key].draw();
		});
	}
};
