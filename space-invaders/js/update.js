
// Update game objects
var update = function (modifier) {
	controls(modifier);

  for (var i = 0; i< playerShots.length; i++){
    var shot = playerShots[i];
    shot.y = shot.y - modifier * shotSpeed;

    for (var e= 0; e < enemies.length; e++){
      var enemy = enemies[e];
      if (collision(shot, enemy)) {
        console.log("Collision with enemy ", shot, enemy);
        playerShots.splice(i, 1);
        enemies.splice(e, 1);
        break;
      }
    }
  }

  for (var i = 0; i< enemyShots.length; i++){
    var shot = enemyShots[i];
    shot.y = shot.y + modifier * shotSpeed;

      if (collision(shot, hero)) {
        console.log("Collision with hero ", shot, hero);
        enemyShots.splice(i, 1);
        hero.dead = true;
      }
  }
  //updateEnemies();
	// Are they touching?
};

var collision = function(shot, enemy){
  return shot.x <= (enemy.x + 32)
		&& enemy.x <= (shot.x + 32)
		&& shot.y <= (enemy.y + 32)
		&& enemy.y <= (shot.y + 32)
}

//AI METHODS
setInterval(function(){updateEnemies()}, 500);

setInterval(function(){enemyShot()}, 1000);
