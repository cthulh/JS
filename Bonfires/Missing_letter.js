function fearNotLetter(str) {
  console.log("-----------");
  var result = 0;
  // 1. iterate over string's letters
  for ( i = 0 ; i < str.length - 1 ; i += 1) {
    // 2. check the difference between current and next letter's utf-16 code values
    console.log("comparing: " + str.charCodeAt(i) + " & " + str.charCodeAt(i + 1));
    if (str.charCodeAt(i) + 1 !== str.charCodeAt(i + 1)) {
      // 3. if difference is greater than 1, return the missing character's value
      result = str.charCodeAt(i) + 1;
      break;
    }
  }
  console.log("missing value: " + result);
  // 4. if no missing values found in given character range, return undefined
  if (result === 0) return undefined;
    // 5. assign the value to result and return it
    str = String.fromCharCode(result);
  return str;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");

