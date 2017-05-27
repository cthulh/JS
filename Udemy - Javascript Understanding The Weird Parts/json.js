var libName = "json";
console.log("-------------------------------" + libName);

var objectLiteral = {
	firstname: 'Mary',
	isAProgrammer: true
};

console.log(JSON.stringify(objectLiteral));
var jsonString = '{ "firstname": "Mary", "isAProgrammer": true }';
var jsonValue = JSON.parse(jsonString);

console.log(jsonValue);