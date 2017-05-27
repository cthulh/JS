function dashatize(num) {
  // Safety checks
  num = num.toString().replace(/-/g,"");
  console.log("Entry: " + num);
  console.log("Is it a number? " + (parseInt(num)? "yes" : "no" )); // 0 returns a "no"
  if (!parseInt(num)){
    if (parseInt(num) === 0) return '0';
    return 'NaN';
  }
  // Define a dashifing function
  function dashify(el, i, arr){
    if (parseInt(el) % 2 !== 0) {
      if (i > 0 && i < arr.length - 1) {
        return "-" + el + "-";
      } else if (i === 0 && i !== arr.length - 1){
        return el + "-";
      } else if (i !== 0 && i === arr.length - 1){
        return "-" + el;
      } else {
        return el;
      }
    } else {
      return el;
    }
  }
  // 1. Convert argument to array
  var result = num.split("");
  // 2. Iterate over the array manipulating odd numbers with a pre and suffix of "-"
  result = result.map(dashify);
  // 3. Merge to string and remove double dashes
  result = result.join("").replace(/--/g,"-");
  console.log("Result: " + result);
  return result;
}

dashatize(5311);
dashatize(86320);
dashatize(-1);
dashatize(0);
dashatize(NaN);