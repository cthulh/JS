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



