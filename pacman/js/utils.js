var loadJSON = function (path, success, error)
{
    var oReq = new XMLHttpRequest();
    oReq.onload = function reqListener () {
      jsonData = JSON.parse(this.responseText);
      //console.log("Loading JSON data", jsonData);
      success(jsonData);
    };;
    oReq.open("get", path, true);
    oReq.send();
}

var p = function(x,y){   return {x: x, y: y};  }

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
          //console.log("Pixel ", pixel);
        }
     }

     canvas.remove();
     callback(pixels);
  };

}
var randomBetween = function(f, to){
  return Math.floor(Math.random() * (to + 1)) + f;
}
