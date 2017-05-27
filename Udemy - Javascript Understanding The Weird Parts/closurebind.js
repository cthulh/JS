var person = {
  firstname: "John",
  lastname: "Doe",
  getFullName: function() {
    return (this.firstname + " " + this.lastname);
  }
};

var logName = function(lang1, lang2){
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + ", " + lang2);
  console.log("----------");
};

var logPersonName = logName.bind(person);

logPersonName("en");

logName.call(person,"en","es"); // accepts listed arguments
logName.apply(person,["en","es"]); // accepts an array of arguments

(function(lang1, lang2){
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + ", " + lang2);
  console.log("----------");
}).apply({
  firstname: "Bob",
  lastname: "Smug",
  getFullName: function() {
    return (this.firstname + " " + this.lastname);
  }
},["dfdfdfd","erererer"].reverse());

// function borrowing

var person2 = {
  firstname: "Hank",
  lastname: "Higgs"
};

console.log(person.getFullName.apply(person2) + " borrowed a function from person object!");

// function currying

function multiply(a, b){
  return a*b;
}

var multiplyByTwo = multiply.bind(this, 2); // permanently sets first parameter in a copied function to 2
// var multiplyByTwo = multiply.bind(this, 2, 2); permanently sets both parameters in a copied function to 2
var multiplyTwoByThree = multiply.bind(this, 2, 3); // sets both parameters
console.log(multiplyByTwo(11));
console.log(multiplyTwoByThree());
console.log(multiplyTwoByThree(11)); // extra parameter is ignored