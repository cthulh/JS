// starting position
var x = 10, y = 10, w = 20, h = 30;
var canvas = document.getElementById("myCanvas");
var speed = 2;
var ctx = canvas.getContext("2d");

var update = function() {
  x += speed; 
  console.log(x);
};

var draw = function() {
  ctx.clearRect(0,0,500,300);
  ctx.fillStyle = "rgb(200, 0, 100)";
  ctx.fillRect(x, y, w, h);
}

var step = function() {

  update();
  draw();

  window.requestAnimationFrame(step)
};
step();