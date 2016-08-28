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

for (var prop in bobSmith){
  document.write(prop + " : " + bobSmith[prop] + "<br>");
}

document.write("name Property of bobSmith : " + bobSmith.hasOwnProperty("name") + "<br>");
document.write("sayHi Property of bobSmith : " + bobSmith.hasOwnProperty("sayHi") + "<br>");

//extend Array prototype

Array.prototype.inArray = function (value) {
  for (i = 0; i< this.length; i = i +1){
    if(this[i] === value){
      return true;
    }
  }
  return false;
}

var sampArray = [1,2,3,4,5];

document.write("13 in sampArray?: " + sampArray.inArray(13) + "<br>");


// private properties

function SecretCode() {
  var secretNum = 78;
  
  this.guessNum = function(num) {
    if(num > secretNum) {
      return "Go lower!";
    } else if (num < secretNum) {
      return "Go higher!"
    } else {
      return "You guessed it!"
    }
  }
}

var secret = new SecretCode();
document.write("Value of secretNum : " + secret.secretNum + "<br>");
document.write("Is 70 the secret number? : " + secret.guessNum(70) + "<br>");
document.write("Is 10 the secret number? : " + secret.guessNum(10) + "<br>");
document.write("Is 700 the secret number? : " + secret.guessNum(700) + "<br>");
document.write("Is 78 the secret number? : " + secret.guessNum(78) + "<br>");

SecretCode.prototype.getSecret = function() {
  return this.secretNum;
}

document.write("Secret number is : " + secret.getSecret() + "<br>");