var loadImagePixels = function(image, callback){

  var img = new Image();
  img.src = image;
  img.onload = function() {
     console.log("Image " + image + " loaded " + img.width + "x" +img.height);
     var canvas = document.createElement('canvas');
     document.body.appendChild(canvas);

     var ctx = canvas.getContext('2d');
     canvas.width  = img.width;
     canvas.height = img.height;
     ctx.drawImage(img, 0, 0);
     img.style.display = 'none';
     var imgData = ctx.getImageData(0,0,canvas.width, canvas.height);

     var pixels = [];
     for(i=0;i<img.width;i++){
      pixels[i] = [];
       for(j=0;j<img.height;j++){
          var pixel = ctx.getImageData(i, j, 1, 1).data;
          pixels[i][j] = {r: pixel[0], g: pixel[1], b: pixel[2], a: pixel[3]};
        }
     }
     canvas.remove();
     callback(pixels);
  };
}

var BLACK = {r: 0, g: 0, b: 0};
var WHITE = {r: 255, g: 255, b: 255};
var YELLOW = {r: 255, g: 255, b: 0};
var GREEN = {r: 0, g: 255, b: 0};
var ORANGE = {r: 255, g: 127, b: 0};
var CYAN = {r: 0, g: 255, b: 255};
var RED = {r: 255, g: 0, b: 0};
var PINK = {r: 255, g: 0, b: 255};

var pixelIsColor = function(pixels, x, y, color){
  try{
    return isColor(pixels[x][y], color);
  } catch (e){return false; }
}

var isColor = function(rgb, color) {
  return rgb.r == color.r && rgb.g == color.g && rgb.b == color.b;
}
