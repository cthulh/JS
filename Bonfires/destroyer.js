function destroyer(arr) {
	var args = arguments;
	var some_arr = [];
	for (i = 1; i < args.length; i++) {
		args[0] = args[0].filter(function(item){
			console.log("item is: " + item);
			console.log("argument is: " + args[i]);
			console.log("logic equals: " + item===args[i]);
			if (item===args[i]) {
				return false;
			} else {
				return true;
			}
		}); 
	}
	return args[0];
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));