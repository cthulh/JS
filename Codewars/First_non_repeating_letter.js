/*
 Write a function named firstNonRepeatingCharacter that takes a string input,
 and returns the first character that is not repeated anywhere in the string.

 For example, if given the input 'stress', the function should return 't',
 since the letter t only occurs once in the string, and occurs first in the string.

 As an added challenge, upper- and lowercase letters are considered the same character,
 but the function should return the correct case for the initial letter.
 For example, the input 'sTreSS' should return 'T'.

 If a string contains all repeating characters, it should return the empty string ("").
 */
function firstNonRepeatingLetter(s) {
  function countOccu(str, letter){
    var arr = str.split("");
    var counter = 0;
    for (var k = 0; k < arr.length; k++){
      if (arr[k].toUpperCase() === letter.toUpperCase()) counter++
    }
    return counter;
  }

  var letters = s.split("");

  for (var i = 0; i < letters.length; i++){
    if (countOccu(s,letters[i]) === 1) return letters[i];
  }
  return "";
}

console.log(firstNonRepeatingLetter("stress"));