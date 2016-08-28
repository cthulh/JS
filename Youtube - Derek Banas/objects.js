function Person(name, street) {
  this.name = name;
  this.street = street;
  
  this.info = function () {
    return "My name is " + this.name + " and I live on " + this.street;
  }
  
}

var bobSmith = new Person("Bob Smith", "234 Main Street");

document.write(bobSmith.info() + "<br>");
document.write("Bob is a person object = " + (bobSmith instanceof Person) + "<br>");

function changeName(person) {
  person.name = "Sue Smith";
}

changeName(bobSmith);

document.write("Bob became " + bobSmith.name + "<br>");

Person.prototype.sayHi = function () {
  return "Hi, I'm " + this.name;
}

document.write(bobSmith.sayHi() + "<br>");