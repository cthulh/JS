/*
 you have to write a function that will accept an array of numbers, in which you will need to check whether any combination of 3 numbers sum to 0.
 You are allowed to use a number more than once, as long as you use only 3 numbers total (e.g. 0+0+1 ).

 If a value of 0 is possible return true.
 Otherwise, if there is no possible combination of 3 numbers that sum to 0 return false.
 */

function isMagicThree(array) {
  var result = false;
  if (array.indexOf(0) !== -1) return true;
  // check slot x2 with each other number
  function isThree(arr){
    var el = arr[0];
    console.log("Passed: " + arr.toString());
    for (var i = 1; i < arr.length; i++){
      console.log("Sum of " + el + " + " + el + " + " + arr[i] + " = " + (el*2+arr[i]));
      if (el*2 + arr[i] === 0) {
        return true;
      };
    }
  }
  for (var i = 0; i < array.length; i++){
    var tempval = 0;
    if (i===0){
      if (isThree(array) === true) return true;
    } else {
      tempval = array[0];
      array[0] = array[i];
      array[i] = tempval;
      if (isThree(array) === true) return true;
    }
  }
  // check slot x1 with each other number
  function isThreeRecurs(el,arr){
    var temparr = [];
    if (arr.length === 3) {
      return arr[0] + arr[1] + arr[3];
    } else {

    }
  }


  return false;
}

isMagicThree([-10, 4, 5, 7, 3]);
/*
-10 -10 4   4 4 5
-10 -10 5   4 4 7
-10 -10 7   4 4 3
-10 -10 3   4 4 -10
-10 4 4    4 5 7
-10 5 5    4 5 3
-10 7 7
-10 3 3
-10 4 5
-10 4 7
-10 4 3
 */
isMagicThree([0]);
isMagicThree([2]);
isMagicThree([1,1]);
isMagicThree([-1,1]);