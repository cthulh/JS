// starting position & width and height of rectangle
var x = 10, y = 10, w = 20, h = 30;
var canvas = document.getElementById("myCanvas");
var canvas2 = document.getElementById("myCanvas2");
// speed of movement of rectangle
var speed = 2;
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

var update = function() {

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
  var j = 0;
  var n = enemies.length;

  while (j< n) {
    enemies[j].y += enemies[j].speedY;
    j += 1;
  }
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

  // fill color
  ctx2.fillStyle = "#3333FF"
  // draw enemies on canvas 2
  var j = 0;
  var n = enemies.length;

  while (j < n) {
    ctx2.fillRect(enemies[j].x, enemies[j].y, enemies[j].w, enemies[j].h);
    j += 1;
  };
};

var step = function() {

  update();
  draw();

  window.requestAnimationFrame(step)
};
step();