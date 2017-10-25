/*
 you have to write a function that will accept an array of numbers, in which you will need to check whether any combination of 3 numbers sum to 0.
 You are allowed to use a number more than once, as long as you use only 3 numbers total (e.g. 0+0+1 ).

 If a value of 0 is possible return true.
 Otherwise, if there is no possible combination of 3 numbers that sum to 0 return false.
 */

function isMagicThree(array) {
  var perm_counter = 0;
  console.log("Passed: " + array.toString());
  for (let i = 0; i < array.length; i++){
    for (let k = 0; k < array.length; k++){
      for (let j = 0; j < array.length; j++){
        let tempval = array[i] + array[k] + array[j];
        console.log(array[i] + " + " + array[k] + " + " + array[j] + " = " + tempval);
        console.log(++perm_counter);
        if (tempval === 0) return true;
      }
    }
  }

  return false;
}

isMagicThree([-10, 4, 5, 7, 3]);
isMagicThree([0]);
isMagicThree([2]);
isMagicThree([1,1]);
isMagicThree([-1,1]);
isMagicThree([1,2,3,4]);