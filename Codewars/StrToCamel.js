/*
 Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 The first word within the output should be capitalized only if the original word was capitalized.
*/

function toCamelCase(str){
  var chrs = str.split("");
  for (var i = 0; i < chrs.length; i++){
    if (chrs[i] === "-" || chrs[i] === "_") {
      chrs[i] = "";
      chrs[i+1] = chrs[i+1].toUpperCase();
    }
  }
  return chrs = chrs.join("");
}

toCamelCase("the-stealth-warrior");
