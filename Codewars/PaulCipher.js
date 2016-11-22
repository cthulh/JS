// https://www.codewars.com/kata/paul-cipher-and-kevin-arnold/train/javascript

function encode(input) {
  var str = input.toUpperCase().split("").map(function(letter, ind, arr){
    var prev_letter = "";
    var new_position = 0;
    console.log(letter + " parseInt(letter) !== letter : " + (parseInt(letter) != letter));
    if (parseInt(letter) != letter && ind > 0) {
      for (i = ind - 1; i >= 0 ; i -= 1){
        if (parseInt(arr[i]) != arr[i]) {
          prev_letter = arr[i];
          break;
        }
      }
      console.log("[" +ind +"] To be moved by " + (prev_letter.charCodeAt(0)-64) + " ; char: " + prev_letter);
      new_position = letter.charCodeAt(0)+(prev_letter.charCodeAt(0)-64);
      console.log(new_position);
      new_position = (new_position - 64 > 26)? ((new_position - 64) % 26) + 64 : new_position;
      console.log(new_position);
      return String.fromCharCode(new_position);
    } else {
      return letter;
    }

  }).join("");
  console.log(str);
  return str;
}
function decode(input) {
  return input;
}

// test cases

var test;
(encode("He1lo") === "HM1QA")? test = true : test = false;
console.log(test);
(decode("HM1QA") === "He1lo")? test = true : test = false;
console.log(test);
console.log("H".charCodeAt(0)-64);
console.log("E".charCodeAt(0)-64);
console.log("1".charCodeAt(0));
console.log("L".charCodeAt(0)-64);
console.log("O".charCodeAt(0)-64);
console.log("Z".charCodeAt(0)-64);

