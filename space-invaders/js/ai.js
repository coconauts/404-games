var updateEnemies = function(){

  if (hasReachedEnd()) {
    changeEnemyDirection();
    return;
  }
  var enemyMovement;
  if (enemyDirection == LEFT) enemyMovement = -10;
  else enemyMovement = 10;

  for (var i = 0 ; i < enemies.length; i++){
    var enemy = enemies[i];
    enemy.x = enemy.x + enemyMovement ;
  }
}

var hasReachedEnd = function(){
  var threshold = 32;

  for (var i = 0 ; i < enemies.length; i++){
    var enemy = enemies[i];
    if (enemyDirection == RIGHT && enemy.x > canvas.width - threshold - 32) return true;
    else if (enemyDirection == LEFT && enemy.x < threshold) return true;
  }
  return false;
}

var changeEnemyDirection = function(){
  if (enemyDirection == LEFT) enemyDirection = RIGHT;
  else enemyDirection = LEFT;

  for (var i = 0 ; i < enemies.length; i++){
    var enemy = enemies[i];
    enemy.y = enemy.y + 30 ;
  }
}

var enemyShot = function(){
  var enemy = enemies[Math.floor(Math.random()*enemies.length)];
  enemyShots.push({x:enemy.x, y: enemy.y});
}
