var BLACK = {r: 0, g: 0, b: 0};
var WHITE = {r: 255, g: 255, b: 255};
var YELLOW = {r: 255, g: 255, b: 0};
var GREEN = {r: 0, g: 255, b: 0};
var ORANGE = {r: 255, g: 127, b: 0};
var CYAN = {r: 0, g: 255, b: 255};
var RED = {r: 255, g: 0, b: 0};
var PINK = {r: 255, g: 0, b: 255};

var addEnemy = function(x, y){
  var enemy = {
    direction: DOWN,
    speed: 100,
    x: x,
    y: y
  };
  enemies.push(enemy);
}

var bg = function(x, y , dirs) {
  return {
    x: x * SIZE,
    y: y * SIZE,
    directions: dirs
  }
}

loadImagePixels("data/map.png", function(pixels){

  pixelBackground(pixels);

  for(i=0;i<pixels.length;i++){
      for(j=0;j<pixels[i].length;j++){
          var pixel = pixels[i][j];
          if (isColor(pixel,WHITE)) {} //White
          else if (isColor(pixel,BLACK)) blocks.push(p(i*SIZE,j*SIZE));
          else if (isColor(pixel,YELLOW))  dots.push(p(i*SIZE,j*SIZE));
          else if (isColor(pixel,GREEN)) { player.x =i*SIZE ; player.y =j*SIZE; }

          else if (isColor(pixel,RED) || isColor(pixel,CYAN) || isColor(pixel,PINK) || isColor(pixel,ORANGE)) { addEnemy(i* SIZE, j*SIZE) }

          else console.log("Unrecognized color in position "+i+"x"+j,pixel);
      }
  }
});

var pixelBackground = function(pixels, x, y){
  var type = "undefined";
  for(i=0;i<pixels.length;i++){
      for(j=0;j<pixels[i].length;j++){
        var pixel = pixels[i][j];
        if (isColor(pixel,BLACK)) {

        var dirs = [];

        if (pixelIsBlock(pixels, i -1, j) ) dirs.push("left");
        if (pixelIsBlock(pixels,i +1, j)) dirs.push("right");
        if (pixelIsBlock(pixels,i, j-1)) dirs.push("up");
        if (pixelIsBlock(pixels,i, j +1)) dirs.push("down");

        //console.log("Adding bg item " , i, j , dirs);
        background.push(bg(i,j,dirs));
      }
    }
  }
}
var pixelIsBlock = function(pixels, x, y){
  try{
    return isColor(pixels[x][y], BLACK);
  } catch (e){return false; }
}

var isColor = function(rgb, color) {
  return rgb.r == color.r && rgb.g == color.g && rgb.b == color.b;
}
