console.log("------------------------------- functions");
function greet() {
	console.log('hi');
}

greet();
// functions are objects, you can assign properties to them
greet.language = 'english';
console.log(greet.language);

// can't call anonymousGreet() prior to setting the variable as it doesn't get hoisted like normal functions
var anonymousGreet = function() { // no NAME property
	console.log("hi!"); // CODE property
};
// invokes the CODE property of the function object assigned to this variable
anonymousGreet();

function log(a) {
	a(); // invokes passed function
}
var passableFunc = function() {
  console.log("hi, from a passed function!");
};

log(passableFunc); // pass a function as parameter without invocation ()


console.log("-------- by value (primitives)");
var a = 3; // var a points to value 3
var b;
b = a; // var b points to a copy of value that a points to, to a clone, a brand new address in memory
a = 2; // var a now points to a different address in memory
console.log("var a = " + a);
console.log("var b = " + b); // var b still points to value 3 even though var a was changed

console.log("-------- by reference (all objects (including functions))");

var c = { greeting: "C object says Hi"};
console.log("Object C");
console.log(c);
var d;

d = c; // object D now points to the same address in memory as object C
console.log("Object D");
console.log(d);
console.log("----");
c.greeting = "C object now says hello"; // mutate
console.log("Object C");
console.log(c);
console.log("Object D");
console.log(d);
console.log("----");

console.log("-------- by reference (even as parameters)");

function changeGreeting(obj) {
	obj.greeting = "Hola";
}

changeGreeting(d); //mutate d
console.log("Object C");
console.log(c);
console.log("Object D");
console.log(d);

// equals operator sets up new memory space (new address)
console.log('c = { greeting: "howdy"}; // sets new address');
c = { greeting: "howdy"}; // sets new address
console.log("Object C");
console.log(c);
console.log("Object D");
console.log(d);

console.log("--------------------- *this* in functions");

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