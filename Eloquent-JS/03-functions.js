function min(a, b) { if (a < b) return a;    return b;}

function isEven(number) {   var temp = number; if (number===0) {      return true;    } else if ((number===1) || (number===-1)) {      return false;    } else {     return isEven(temp-2);    }   }

function countBs(str) {    var findChar = "B";    var result = 0;    for (var i = 0; i < str.length; i++) {     if (str.charAt(i)===findChar) result++    }   return result;}function countChar(str, findChar) {    var result = 0;    for (var i = 0; i < str.length; i++) {     if (str.charAt(i)===findChar) result++    }   return result;}

