// produce one array made of unique entries from input arrays in the original order

function uniteUnique(arr) {
  
  // 1. flatten all input arrays into one array or iterate over all items of all arrays and add them to new array
  var result_arr = [];
  for ( i = 0 ; i < arguments.length ; i += 1) {
    for (j = 0 ; j < arguments[i].length ; j += 1) {
      result_arr.push(arguments[i][j]);
    }
  }
  console.log(result_arr);

  // function to count occurrences of input in an array
  function how_many_times(elem, arr) {
    var counter = 0;
    for (i = 0 ; i < arr.length ; i +=1) {
      if (arr[i] === elem) counter += 1;
    }
    return counter;
  }
  
  // 2. iterate over the array (in reversed order) of all items and delete items that appear more than once
  for ( k = result_arr.length - 1 ; k >= 0 ; k -= 1) {
    console.log(result_arr[k] + " appears this many times in the array: " + how_many_times(result_arr[k],result_arr));
    if (how_many_times(result_arr[k],result_arr) > 1) result_arr.splice(k,1);
  }
  
  // 3. return an array with unique items
  console.log(result_arr);
  return result_arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
