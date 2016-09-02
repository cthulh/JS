window.addEventListener('load', function(){
  
  // starting position & width and height of rectangle
  var x = 10, y = 10, w = 20, h = 30;
  var canvas = document.getElementById("myCanvas");
  var canvas2 = document.getElementById("myCanvas2");

  // canvas2 size
  var GAME_WIDTH = 640;
  var GAME_HEIGHT = 360;
  // speed of movement of rectangle
  var speed = 2;
  var playerAlive = true;
  var ctx = canvas.getContext("2d");
  var ctx2 = canvas2.getContext("2d");
  // color zones
  var blueZone, greenZone;
  var enemies = [
    {
      x: 100, // x coord
      y: 100, // y coodr
      speedY: 1, // horizontal increment
      w: 40, // width
      h: 40 // height
    },
    {
      x: 260, // x coord
      y: 100, // y coodr
      speedY: 2, // horizontal increment
      w: 40, // width
      h: 40 // height
    },
    {
      x: 380, // x coord
      y: 100, // y coodr
      speedY: 3, // horizontal increment
      w: 40, // width
      h: 40 // height
    },
    {
      x: 450, // x coord
      y: 100, // y coodr
      speedY: 7, // horizontal increment
      w: 40, // width
      h: 40 // height
    }
  ];

  // player object
  var player = {
    x: 10,
    y: 160,
    speedX: 2,
    w: 40,
    h: 40,
    isMoving: false
  };

  var goal = {
    x: 610,
    y: 160,
    w: 40,
    h: 40,
  };

  // move player
  var movePlayer = function(){
    player.isMoving = true;
  };
  // stop player
  var stopPlayer = function(){
    player.isMoving = false;
  };

  // event listener to move player
  canvas2.addEventListener("mousedown", movePlayer);
  canvas2.addEventListener("mouseup", stopPlayer);
  canvas2.addEventListener("touchstart", movePlayer);
  canvas2.addEventListener("touchend", stopPlayer);

  var update = function() {

    // check if player reached the goal
    if (checkCollision(player, goal)) {
      playerAlive = false;
      alert("You Won!");
      window.location = "";
    }

    // player
    if (player.isMoving) {
      player.x += player.speedX;
    }

    if (x >= 270) {
      // rectangle reaches the right-hand border
      x = 270;
      // reversing direction of the rectangle
      speed = -speed;
    } else if (x <= 10) {
      // rectangle reaches starting position
      x = 10;
      // reversing direction again
      speed = -speed;
    }
    // incrementing position of rectangle at each re-draw of canvas
    x += speed; 

    // define color
    blueZone = x > 0 && x < 100;
    greenZone = !blueZone && x < 200;

    // update position of enemies on canvas 2

    /*var j = 0;
    var n = enemies.length;

    while (j< n) {
      enemies[j].y += enemies[j].speedY;
      j += 1;
    };*/
    enemies.forEach(function(enemy,index){
      enemy.y += enemy.speedY;
      // check for collision with player
      if (checkCollision(player, enemy)) {
        // stop game 
        playerAlive = false;
        alert("Game Over");
        // refresh browser = reset game
        window.location = "";
      }
      // check for borders
      if (enemy.y <= 10) {
        enemy.y = 10;
        enemy.speedY *= -1;
      } else if (enemy.y >= GAME_HEIGHT - enemy.h - 10) {
        enemy.y = GAME_HEIGHT - enemy.h - 10;
        enemy.speedY *= -1;
      }
    });
  };

  var draw = function() {
    ctx.clearRect(0,0,500,300);
    ctx2.clearRect(0,0,640,360);
    if (blueZone) {
      ctx.fillStyle = "#3333FF";
    } else if (greenZone) {
      ctx.fillStyle = "#00CC66";
    } else {
      ctx.fillStyle = "rgb(200, 0, 100)";
    }
    ctx.fillRect(x, y, w, h);

    // draw player on canvas2
    ctx2.fillStyle = "#00FF00";
    ctx2.fillRect(player.x, player.y, player.w, player.h);

    // draw goal
    ctx2.fillStyle = "#000000";
    ctx2.fillRect(goal.x, goal.y, goal.w, goal.h);

    // draw enemies on canvas 2
    // fill color
    ctx2.fillStyle = "#3333FF"
    /*var j = 0;
    var n = enemies.length;

    while (j < n) {
      ctx2.fillRect(enemies[j].x, enemies[j].y, enemies[j].w, enemies[j].h);
      j += 1;
    };*/
    enemies.forEach(function(enemy,index){
      ctx2.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
    });
  };

  var step = function() {

    update();
    draw();

    if (playerAlive) {
      window.requestAnimationFrame(step)
    }
  };
  // check collisionvar
  var checkCollision = function(rect1, rect2) {
  var closeOnWidth = Math.abs(rect1.x - rect2.x) <= Math.max(rect1.w, rect2.w);
  var closeOnHeight = Math.abs(rect1.y - rect2.y) <= Math.max(rect1.h, rect2.h);

  return closeOnWidth && closeOnHeight;
  };
  // start game
  step();
});