A collection of simple 404-themed games made with
[canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial).
Ideal to embed in your 404 page!
As seen on [coconauts.net](http://coconauts.net/404).

## How to embed them in a page

Copy the folder for your desired game, and then use an `iframe`
pointing to the relative path of that folder.

    <iframe src="path/to/space-invaders" id='404-game'
            width="512" height="500" scrolling="none" frameborder="0"></iframe>

## I can't decide, can't I have a random one every time?

Then you'll need a little js snippet:

```
  var randomBetween = function(f, to){
    return Math.floor(Math.random() * to) + f;
  }
  var randomGame = function(){
    var games = ["pacman", "space-invaders", "snake"];
    var randomGame = randomBetween(0,games.length);
    return games[randomGame];
  }
  var src = "path/to/games/folder/" + randomGame();
  document.getElementById('404-game').src = src;
```

Have fun!
