var address = {
  street: "No street",
  city: "No city",
  state: "No state",
  
  get getAddress(){
    return this.street + ", " + this.city + ", " + this.state;
  },
  
  set setAddress(theAddress){
    var parts = theAddress.toString().split(", ");
    this.street = parts[0] || "";
    this.city = parts[1] || "";
    this.state = parts[2] || "";
  }
}

address.setAddress = "123 main st, Pittsburgh, PA";

document.write("Address : " + address.getAddress + "<br>");
document.write("City : " + address.city + "<br>");

// depricated version

function Coordinates(){
  this.latitude = 0;
  this.longtitude = 0;
}

Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function(){
  return "Lat : " + this.latitude + ", Long : " + this.longtitude;
});
Object.__defineSetter__.call(Coordinates.prototype, "setCoords", function(coords){
  var parts = coords.toString().split(", ");
  this.latitude = parts[0] || "";
  this.longtitude = parts[1] || "";
});

var testCoords = new Coordinates;
testCoords.setCoords = "40.22, 78.55";
document.write("Coordinates : " + testCoords.getCoords + "<br>");

// define property version

function Point(){
  this.xPos = 0;
  this.yPos = 0;
}

Object.defineProperty(Point.prototype, "pointPosition", {
  get: function(){
    return "X : " + this.xPos + ", Y : " + this.yPos;
  },
  set: function(thePoint){
    var parts = thePoint.toString().split(", ");
    this.xPos = parts[0] || "";
    this.yPos = parts[1] || "";
  }
});

var aPoint = new Point();

aPoint.pointPosition = "100, 200";
document.write("Point Position : " + aPoint.pointPosition + "<br>");

// ECMA 5.1 version

var Circle = function(radius) {
  this._radius = radius;
}

Circle.prototype = {
  set radius(radius) {this._radius = radius;},
  get radius() {return this._radius;},
  get area() { return Math.PI * (this._radius * this._radius);}
};

var circ = new Circle(10);

circ.radius = 15;

document.write("A circle with radius " + circ.radius + " has an area " + circ.area.toFixed(2) + "<br>");

