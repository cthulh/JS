// https://www.codewars.com/kata/paul-cipher-and-kevin-arnold/train/javascript
function encode(input) {
  if (input == null || input == "") return "";
  input = input.toUpperCase();
  var str = input.toUpperCase().split("");
  var result = [], prev_letter = "";
  var regex = /[A-Z]/;
  for (letter = 0 ; letter < str.length ; letter += 1){
    console.log("Is letter: " + regex.test(str[letter]));
    console.log("First letter position: " + input.indexOf(input.match(regex)));
    if (regex.test(str[letter]) && letter > input.indexOf(input.match(regex))) {
      for (i = letter - 1; i >= 0 ; i -= 1){
        if (regex.test(str[i])) {
          prev_letter = str[i];
          break;
        }
      }
      console.log("prev: " + prev_letter);
      console.log("[" + letter + "] To be moved by " + (prev_letter.charCodeAt(0) - 64) + " ; char: " + prev_letter);
      var new_position = str[letter].charCodeAt(0) + (prev_letter.charCodeAt(0) - 64);
      console.log(new_position);
      new_position = (new_position - 64 > 26) ? ((new_position - 64) % 26) + 64 : new_position;
      console.log(new_position);
      result.push(String.fromCharCode(new_position));
    } else {
      result.push(str[letter]);
      console.log("result : " + result);
    }
  }
  console.log("["+result+"]");
  return result.join("");
}
function decode(input) {
  if (input == null || input == "") return "";
  input = input.toUpperCase();
  var str = input.toUpperCase().split("");
  var result = [], prev_letter = "";
  var regex = /[A-Z]/;
  for (letter = 0 ; letter < str.length ; letter += 1){
    if (regex.test(str[letter]) && letter > input.indexOf(input.match(regex))) {
      for (i = letter - 1; i >= 0 ; i -= 1){
        if (regex.test(result[i])) {
          prev_letter = result[i];
          break;
        }
      }
      console.log("prev: " + prev_letter);
      console.log("[" + letter + "] To be moved by " + (prev_letter.charCodeAt(0) - 64) + " ; char: " + prev_letter);
      var new_position = str[letter].charCodeAt(0) - (prev_letter.charCodeAt(0) - 64);
      console.log(new_position);
      new_position = (new_position < 65) ? new_position + 26 : new_position;
      console.log(new_position);
      result.push(String.fromCharCode(new_position));
    } else {
      result.push(str[letter]);
      console.log("result : " + result);
    }
  }
  console.log("["+result+"]");
  return result.join("");
}

// test cases

var test;
(encode("5ddc4ddf-7a47-44d3-8eda-3171860dc938") === "5DHG4GHJ-7G47-44E3-8IIE-3171860EG938")? test = true : test = false;
console.log(test);
(decode("HM1QA") === "HE1LO")? test = true : test = false;
console.log(test);

