var updateEnemies = function(modifier){

  for (var i= 0; i < enemies.length; i++){
    var enemy = enemies[i];
    if (isCollidingBlocks(enemy,enemy.direction)){
      changeDirection(enemy);

    } else {
      move(enemy, modifier);
    }
  }
}

var changeDirection = function(enemy){
    var tol =  p(-5,0);
    var randomDirection = randomBetween(0, 3);
    switch(randomDirection){
      case 0: if (!isCollidingBlocks(enemy, LEFT, tol))  enemy.direction = LEFT;break;
      case 1: if (!isCollidingBlocks(enemy, RIGHT, tol))  enemy.direction = RIGHT;break;
      case 2: if (!isCollidingBlocks(enemy, UP, tol))  enemy.direction = UP;break;
      default: if (!isCollidingBlocks(enemy, DOWN, tol))  enemy.direction = DOWN;break;
    }
}
