/*
 You are going to be given an array of integers.
 Your job is to take that array and find an index N where the sum of the integers to the left
 of N is equal to the sum of the integers to the right of N.
 If there is no index that would make this happen, return -1.
 */
function findEvenIndex(arr)
{
  console.log("Entry: " + arr);
  function sum(a, b){
    return a + b;
  }
  for (i = 1; i < arr.length - 1; i += 1){
    console.log("Index: " + i);
    console.log("Before index: " + arr.slice(0, i));
    console.log("After index: " + arr.slice(i + 1));
    if (arr.slice(0, i).reduce(sum, 0) === arr.slice(i + 1).reduce(sum, 0)) return i;
  }
  return -1;
}

console.log("Returns: " + findEvenIndex([1,2,3,4,3,2,1]));