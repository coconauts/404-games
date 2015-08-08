//http://gamedev.stackexchange.com/questions/13774/how-do-i-detect-the-direction-of-2d-rectangular-object-collisions
var collision = new Collision();

var RIGHT = { x: 1, y: 0};
var LEFT = { x: -1, y: 0};
var UP = { x: 0, y: -1};
var DOWN = { x: 0, y: 1};

function Collision(){

  this.onCollisionChange  = function(ojb1, obj2, size, callback) {
    var isColliding = false;
    setInterval(
      function(){
        var beforeStatus = isColliding;
        isColliding = collision(obj1, obj2, size);
        if (beforeStatus != isColliding) callback();
      }, 100);
  }

  this.isCollidingDirection = function(obj1, obj2, direction, offset){
    switch(direction){
      case LEFT:  return collision.containsLeft(obj1, obj2, SIZE, offset); break;
      case RIGHT: return collision.containsRight(obj1, obj2, SIZE, offset); break;
      case UP: return collision.containsUp(obj1, obj2, SIZE, offset); break;
      case DOWN:  return collision.containsDown(obj1, obj2, SIZE, offset); break;
      default: console.log("Undefined direction");
    }
  }

  this.contains = function(obj, p, size){
    var contains =  p.x > obj.x && p.x < (obj.x + size) &&
      p.y > obj.y && p.y < (obj.y + size);
    return contains;
  }

  this.collision = function(obj1, obj2, size){
    return obj1.x <= (obj2.x + size)
  		&& obj2.x <= (obj1.x + size)
  		&& obj1.y <= (obj2.y + size)
  		&& obj2.y <= (obj1.y + size)
  }

  this.containsLeft = function(obj1, obj2, size, offset){
    return this.contains(obj1, addCoords(middlePoints(obj2, size).left, offset) , size);
  }
  this.containsRight = function(obj1, obj2, size, offset){
    return this.contains(obj1,  addCoords(middlePoints(obj2, size).right, offset), size);
  }
  this.containsUp = function(obj1, obj2, size, offset){
    return this.contains(obj1,  addCoords(middlePoints(obj2, size).top, offset), size);
  }
  this.containsDown = function(obj1, obj2, size, offset){
    return this.contains(obj1, addCoords( middlePoints(obj2, size).bottom, offset), size);
  }

  var addCoords = function(point, offset) {
    return p(point.x + offset.x, point.y + offset.y);
  }

  var middlePoints = function(obj, size){
    var middleX = (obj.x + obj.x + size) / 2; //(obj.x *2 + size) / 2;   ?
    var middleY = (obj.y + obj.y + size) / 2;
    return {
      left: p(obj.x, middleY),
      right: p(obj.x + size , middleY),
      top: p(middleX, obj.y),
      bottom: p(middleX, obj.y + size),
    }
  }
}
