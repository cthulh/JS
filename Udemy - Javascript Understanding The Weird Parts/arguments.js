function greet(firstname, lastname, language) {
	console.log("-------------"+arguments.length+" arguments passed---------------");
	console.log("Argumnets 1: "+firstname);
	console.log("Argumnets 2: "+lastname);
	console.log("Argumnets 3: "+language);
	console.log("Argumnets passed:")
	console.log(arguments);
}
greet();
greet("John");
greet("John", "Doe");
greet("John","Doe","English");
greet("John","Doe","English","EXTRA ARGUMENT");
greet("John","Doe","English","EXTRA ARGUMENT","John","Doe","English","EXTRA ARGUMENT","John","Doe","English","EXTRA ARGUMENT","John","Doe","English","EXTRA ARGUMENT");