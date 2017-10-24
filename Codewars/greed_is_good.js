/*
 Greed is a dice game played with five six-sided dice.
 Your mission, should you choose to accept it,
 is to score a throw according to these rules.
 You will always be given an array with five six-sided dice values.

 A single die can only be counted once in each roll.
 For example, a "5" can only count as part of a triplet
 (contributing to the 500 points) or as a single 50 points,
 but not both in the same roll.
 */

function score(dice) {
  var result = 0;
  var points = {
    triplets: {
      1: 1000,
      6: 600,
      5: 500,
      4: 400,
      3: 300,
      2: 200
    },
    singles: {
      1: 100,
      5: 50
    }
  };
  var count = 0;
  function check_repeats(arr){
    console.log("Passed array: " + arr);
    if (arr.length = 0) return result;
    var item = arr[0];
    // Count how many repetitions of the item in the passed array
    for (var i = 0 ; i < arr.length; i++){
      if (arr[i] === item) count = count + 1;
    }
    console.log("item : " + item + ", repetitions: " + count);
    // Add points
    /*
    if (count === 5)  {
      if (points.triplets[item]) result += points.triplets[item];
      if (points.singles[item]) result += points.singles[item]*2;
    } else if (count === 4) {
      if (points.triplets[item]) result += points.triplets[item];
      if (points.singles[item]) result += points.singles[item];
    } else if (count === 3) {
      if (points.triplets[item]) result += points.triplets[item]
    } else if (count === 2) {
      if (points.singles[item]) result += points.singles[item]*2;
    } else if (count ===1) {
      if (points.singles[item]) result += points.singles[item];
    }*/
    // Delete all instances of this item from arr and pass the remainder to recursive func
    arr = arr.join("").replace(item,"").split("");
      check_repeats(arr);
  }
  check_repeats(dice);
}

console.log(score([2, 3, 4, 6, 2]));
