function pairElement(str) {
  // 1. start empty array for storing result pairs
  var result_arr = [];
  // 2. define default pairs
  var DEFAULT_PAIRS = [["A","T"],["T","A"],["C","G"],["G","C"]];
  // 3. split input into individual elements
  var input_elements = str.split("");
  // 4. for each element find a matching element in the predefined array
  for ( i = 0 ; i < input_elements.length ; i += 1) {
    for ( j = 0 ; j < DEFAULT_PAIRS.length ; j += 1) {
      if (input_elements[i] === DEFAULT_PAIRS[j][0]) {
        // 5. add a complete pair to a result array
        result_arr.push([input_elements[i],DEFAULT_PAIRS[j][1]]);
      }
    }
  }
  // 6. return the result array
  str = result_arr;
  console.log(str);
  return str;
}

pairElement("GCG");
