// [kata 8] Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  return arr1.concat(
    arr2
      .filter(function(el){return arr1.indexOf(el) == -1}))
      .sort(function(a,b){return a-b});
}

mergeArrays([1,2,3,4], [2,5,6,7,8]);
mergeArrays([1,3,5,7,9], [10,8,6,4,2]);

