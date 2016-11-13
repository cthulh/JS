function translatePigLatin(str) {
  // 1. array of consonants
  var CONSONANTS = "qwrtypsdfghjklzxcvbnm".split("");
  console.log(CONSONANTS);
  // 2. array of vowels
  var VOWELS = "euioa".split("");
  console.log(VOWELS);
  // 3. get array of words from entry
  var str_arr = str.split(" ");
  console.log(str_arr);
  // 4. iterate through the array of words and check if first letter consonant or vowel
  for (var i = 0 ; i < str_arr.length ; i = i + 1) {
    var vowel_pos = 0;
    var word = str_arr[i];
    //    a) if vowel: add "way" to end of word
    console.log("word: " + word);
    console.log("first letter of the word: " + word[0]);
    console.log("if vowel: " + (VOWELS.indexOf(word[0]) === -1 ? "no" : "yes"));
    console.log("if consonant: " + (CONSONANTS.indexOf(word[0]) === -1 ? "no" : "yes"));
    if (VOWELS.indexOf(word[0]) !== -1) {
      word = word + "way";
    }
    if (CONSONANTS.indexOf(word[0]) !== -1) {
      vowel_pos += 1;
      //    b) if consonant: iterate over the letters to check if next is also consonant until reaches a vowel
      for (j = 1 ; j < word.length ; j = j + 1) {
        if (VOWELS.indexOf(word[j]) === -1) {
          vowel_pos += 1;
        } else {
          break;
        }
      }
      // then move that consonant or cluster of consonants to end of word, and add "ay" to end of word
      word = word.substr(vowel_pos) + word.substr(0,vowel_pos) + "ay";
    }
    str_arr[i] = word;
  }
  // 5. merge all words back into a string and return it
  str = str_arr.join(" ");
  console.log(str);
  return str;
}

translatePigLatin("consonant");
