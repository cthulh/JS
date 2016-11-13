function chunkArrayInGroups(arr, size) {
	var new_arr = [];
	for (var i = 0; i < arr.length; i += size){
		new_arr.push(arr.slice(i,i+size));
	}
	return new_arr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));