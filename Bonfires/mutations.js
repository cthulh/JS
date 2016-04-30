function mutation(arr) {
	var string_x = arr[0].toLowerCase();
	console.log(string_x);
	var string_y = arr[1].toLowerCase();
	console.log(string_y);
	var counter = 0;
  	for (var i = 0; i < string_y.length; i++){
  		console.log(string_y.charAt(i));
  		console.log("string_x.search(string_y.charAt(i)) = " + string_x.search(string_y.charAt(i)));
  		if (string_x.search(string_y.charAt(i))>=0) counter++;
  }
  console.log(counter);
  if (counter===string_y.length) return true;
  return false;
}

console.log(mutation(["hello", "hel"]));