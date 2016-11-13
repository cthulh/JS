/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/
function sumAll(arr) {
  var lBound = Math.min(arr[0], arr[1]);
  var uBound = Math.max(arr[0], arr[1]);
  var newarr = [];
  var counter = lBound;
  while (counter <= uBound) {
    newarr.push(counter);
    counter = counter + 1;
  }
  return newarr.reduce(function(prev,curr,currI,newarr){
    return prev + curr;
  });
}

sumAll([1, 4]);
