// starting position & width and height of rectangle
var x = 10, y = 10, w = 20, h = 30;
var canvas = document.getElementById("myCanvas");
// speed of movement of rectangle
var speed = 2;
var ctx = canvas.getContext("2d");
// color zones
var blueZone, greenZone;

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
};

var draw = function() {
  ctx.clearRect(0,0,500,300);
  if (blueZone) {
    ctx.fillStyle = "#3333FF";
  } else if (greenZone) {
    ctx.fillStyle = "#00CC66";
  } else {
    ctx.fillStyle = "rgb(200, 0, 100)";
  }
  ctx.fillRect(x, y, w, h);
}

var step = function() {

  update();
  draw();

  window.requestAnimationFrame(step)
};
step();