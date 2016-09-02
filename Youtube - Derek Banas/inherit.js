function Animal(){
  this.name = "Animal";
  
  this.toString = function(){
    return "My name is " + this.name;
  };
}

function Canine(){
  this.name = "Canine";
}

function Wolf(){
  this.name = "Wolf";
}

Canine.prototype = new Animal();
Wolf.prototype = new Canine();

Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var arcticWolf = new Wolf();

document.write(arcticWolf.toString() + "<br>");
document.write("Wolf instance of Animal : " + (arcticWolf instanceof Animal) + "<br>");

Animal.prototype.sound = "Grrrrrr";
Animal.prototype.getSound = function(){
  return this.name + " says " + this.sound;
}
Canine.prototype.sound = "Woof";
Wolf.prototype.sound = "Grrrr Woof";

document.write(arcticWolf.getSound() + "<br>");

function Rodent() {
  this.name = "Rodent";
}

function Rat() {
  this.name = "Rat";
}

Rodent.prototype = new Animal();
Rat.prototype = Rodent.prototype;
Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var caneRat = new Rat();

document.write(caneRat.toString() + "<br>");

function extend(Child, Parent){
  var Temp = function(){};
  Temp.prototype = Parent.prototype;
  Child.prototype = new Temp();
  Child.prototype.constructor = Child;
}

function Deer(){
  this.name = "Deer";
  this.sound = "Snort";
}

extend(Deer, Animal);

var elk = new Deer();

document.write(elk.getSound() + "<br>");

// parent object methods

function Vehicle(name){
  this.name = "Vehicle";
}

Vehicle.prototype = {
  drive: function(){
    return this.name + " drives forward";
  },
  stop: function(){
    return this.name + " stops";
  }
}

function Truck(name){
  this.name = name;
}

Truck.prototype = new Vehicle;
Truck.prototype.constructor = Truck;
Truck.prototype.drive = function(){
  var driverMsg = Vehicle.prototype.drive.apply(this);
  
  return driverMsg += " through a field";
}

var jeep = new Truck("Jeep");
document.write(jeep.drive() + "<br>");
document.write(jeep.stop() + "<br>");