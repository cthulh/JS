(function() {
  console.log("----------------------Immediately Invoked Function Expression");
	var firstname = "John";

	(function (name) {
		var greeting = "Hello";
		console.log(greeting + " " + name);
	}(firstname));
})();