// [kata 8] Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  var merged_arr = [];
  console.log("Array 1: " + arr1);
  console.log("Array 2: " + arr2);

  function add_whats_not_there(add_to,add_this) {
    for (var i = 0; i < add_this.length; i++){
      if (add_to.indexOf(add_this[i]) == -1) add_to.push(add_this[i]);
    }
    console.log(merged_arr);
  }
  add_whats_not_there(merged_arr,arr1);
  add_whats_not_there(merged_arr,arr2);
  merged_arr.sort(function(a,b){return a-b});
  console.log(merged_arr);
  console.log("--------------------------------");

  return merged_arr;
}

mergeArrays([1,2,3,4], [5,6,7,8]);
mergeArrays([1,3,5,7,9], [10,8,6,4,2]);

