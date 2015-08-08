// Game objects
var hero = {};
var playerShots = [];
var enemyShots = [];

var shotSpeed = 200;

var RIGHT = 1, LEFT = 0;
var enemies = [];
var enemyDirection = RIGHT;
var loadEnemy = function(offset, json){
  var size = 32;

  for (var i = 0; i< json.length; i++){
    var pos = json[i];
    var enemy = {x: offset.x + pos.x * size, y: offset.y + pos.y * size}  ;
    enemies.push(enemy);
  }
}

loadJSON('enemies.json',
   function(data) {

       loadEnemy({ x: 50, y: 50 }, data.four);
       loadEnemy({ x: 180, y: 50 }, data.zero);
       loadEnemy({ x: 300, y: 50 }, data.four);
     },
   function(xhr) { console.error(xhr); }
);
