window.libName = window.libName || "Lib2";
console.log(libName);

// objects
var firstNameProperty = "firstName";
var lastNameProperty = "lastName";

var person = new Object();

// add property with Computed Member Access
person["firstName"] = "Tony";
person[lastNameProperty] = "Alicea";
console.log(person);
console.log("First name = " + person[firstNameProperty]);

// dot operator
console.log(person.firstName + " " + person.lastName);

person.address = new Object();
person.address.street = "111 Main St";
person.address.city = "New York";
person.address.state = "NY";
console.log(person.address);
// computed member
console.log(person["address"]["city"]);

// object literal syntax

var ironman = {
  firstName: "Tony",
  lastName: "Stark"
};

console.log(ironman);

// objects on the fly

function greet(person) {
  console.log("Hi " + person.firstName + "!");
}
greet({
  firstName: "Frank",
  lastName: "Estine"
});
greet(ironman);


