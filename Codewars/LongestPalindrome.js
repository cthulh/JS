// https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript

longestPalindrome=function(s){
  // 1. If passed string is empty, result = 0, if there is at least 1 character, that is currently the longest palindrome
  var result = (s.length > 0)? 1 : 0;
  // 2. Helper functions
  // a) function to count how many potential palindrome end characters we have in the string
  // hint: palindrome has to start and end with the same character, that's the premise here
  function occuranceOf(letter, str){
    var counter = 0;
    for ( i = 0 ; i < str.length ; i += 1){
      if (str[i] === letter) counter += 1;
    }
    return counter;
  }
  // b) function to check is substring is a palindrome by comparing characters from both ends, meeting in the middle
  function isPalindrome(str){
    var len = str.length;
    for (k = 0 ; k < len/2 ; k +=1){
      if (str[k] !== str[len - 1 - k]) return false;
    }
    console.log("String: " + str + " is a palindrome!");
    return true;
  }
  // 3. Process the passed string
  for ( j = 0 ; j < s.length - 1 ; j += 1){
    // set a potential palindrome start character
    var start = s[j];
    // count how many potential ending positions we have
    var how_many = occuranceOf(start, s.slice(j + 1));
    //console.log("Letter: " + start + ", occurs: " + how_many + " times in " + s.slice(j + 1));
    // for each potential ending, produce a substring
    for (x = 1 ; x <= how_many ; x +=1){
      var ind = s.slice(j + 1).indexOf(start);
      // tested substring begins at j (where we currently test a beginning of a potential palindrome)
      // and it ends and the index of one of the potential end characters (+2 is due to fact that both ind and j are 0 based)
      var test_str = s.slice(j, ind + j + 2);
      console.log(test_str);
      // if tested substring is a palindrome, and its length surpasses any previously found palindromes
      // this becomes the longest palindrome
      if (isPalindrome(test_str) && test_str.length > result) result = test_str.length;
    }
  }
  console.log(result);
  return result;
};

//test cases

longestPalindrome("ererbaabcdb");
console.log("--------------");
longestPalindrome("a");
console.log("--------------");
longestPalindrome("aa");
console.log("--------------");
longestPalindrome("aab");
console.log("--------------");
longestPalindrome("baa");