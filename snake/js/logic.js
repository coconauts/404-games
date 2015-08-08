var BLOCK_SIZE = 16;

function update(){
  if (GAME_STATE.complete)	GAME_STATE.snake.update();
}

function initGameState(callback){
  GAME_STATE.grid = {};
  loadImagePixels("data/map.png", function(rows){
    rows.forEach(function(row, i){
      row.forEach(function(pixel, j){
        var cell = new Cell(i,j);
        if (isColor(pixel, BLACK))
          cell.content = 'BLOCK';
        else if (isColor(pixel, GREEN))
          cell.content = 'INVALID';
        else if (isColor(pixel, RED)){
          cell.content = 'SNAKE';
          GAME_STATE.snake = new Snake(cell);
        }
        GAME_STATE.grid[[i,j]] = cell;
        GAME_STATE.gameHeight = i;
        GAME_STATE.gameWidth = j;
      });
    });
    Grid.newFood();
    GAME_STATE.complete = true;
    callback();
  });
}

var GAME_STATE = {
  snake: null,
  grid: null,
  gameOver: false,
  gameHeight: 0,
  gameWidth: 0,
}

function Grid(){}

Grid.get = function(x,y){
  return GAME_STATE.grid[[x,y]];
}

Grid.set = function(x, y, content){
  var cell = GAME_STATE.grid[[x,y]];
  cell.content = content;
  return cell;
}

Grid.unset = function(x, y){
  var cell = GAME_STATE.grid[[x,y]];
  cell.content = null;
  return cell;
}

Grid.randomFree = function(){
  do{
    var row = Math.floor(Math.random() * GAME_STATE.gameHeight);
    var col = Math.floor(Math.random() * GAME_STATE.gameWidth);
    var cell = this.get(row,col);
  } while (cell.content);
  return cell;
}

Grid.newFood = function (){
  var freeCell = this.randomFree();
  freeCell.content = 'FOOD';
}

function Cell(x,y){
  this.x = x;
  this.y = y;
  this.content = null;
}


function Snake(initCell){
  this.body = [initCell];
  this.dir = {x: -1, y: 0};  // start moving to the left
}

Snake.prototype.head = function(){
  return this.body[0];
}

Snake.prototype.tail = function(){
  return this.body[-1];
}

Snake.prototype.move = function(dir){
  switch(dir){
    case 'l':
      this.dir = {x: -1, y: 0};
      break;
    case 'r':
      this.dir = {x: 1, y: 0};
      break;
    case 'u':
      this.dir = {x: 0, y: -1};
      break;
    case 'd':
      this.dir = {x: 0, y: 1};
      break;
  }
}

Snake.prototype.update = function(dir){
  // compute new position of the head
  var head = this.head();
  var dir = this.dir;
  var newX = head.x + dir.x;
  var newY = head.y + dir.y;
  var newHead = Grid.get(newX, newY);

  // check collisions

  // if food, grow (on the head)
  if (newHead.content == 'FOOD') {
    newHead.content = 'SNAKE';
    this.body.unshift(newHead);
    Grid.newFood();
  }

  // if block, die
  else if (newHead.content != null){
    GAME_STATE.game_over = true;
  }

  // else, move
  else {
    oldTail = this.body.pop();
    oldTail.content = null;

    newHead.content = 'SNAKE';
    this.body.unshift(newHead);
  }

}
