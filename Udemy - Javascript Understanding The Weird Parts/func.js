function greet() {
	console.log('hi');
}

greet();

greet.language = 'english';
console.log(greet.language);

var anonymousGreet = function() {
	console.log("hi!");
}

anonymousGreet();

function log(a) {
	a();
}

log(function() {
	console.log("hi");
});

// by value (primitives)

var a = 3;
var b;
b = 3;
a = 2;
console.log(a);
console.log(b);

// by reference (all objects (including functions))

var c = { greeting: "Hi"};
var d;

d = c;
c.greeting = "hello"; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters)

function changeGreeting(obj) {
	obj.greeting = "Hola";
}

changeGreeting(d); //mutate d
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)

c = { greeting: "howdy"}; // sets new address
console.log(c);
console.log(d);

// "this" in functions

function aFunc(){
	console.log(this);
}

var bFunc = function() {
	console.log(this);
}

aFunc();
bFunc();

var cObj = {
	name: "The c object",
	log: function() {
		var self = this;

		self.name = "Updated c object";
		console.log(self);

		var setname = function(newname) {
			self.name = newname;
		}

		setname("Updated again the c object");
		console.log(self);
	}
} 

cObj.log();