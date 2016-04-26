function factorialize(num) {
  	var x = 0;
	var y = [];

	for (i=1; i<=num; i++) {
		y[i-1]=i;
	}

  	return y.reduce(function(prev,curr) {return prev*curr;},1);
}

console.log(factorialize(5));