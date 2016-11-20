function validatePIN (pin) {
  var regex = /^\d+$/;
  var str = pin.toString();
  if (str.length === 4 || str.length === 6) {
    return regex.test(str);
  } else {
    return false;
  }
}

console.log(validatePIN(1234));
console.log(validatePIN(12345));
console.log(validatePIN(12346));
console.log(validatePIN(123477));
console.log(validatePIN("123s"));
console.log(validatePIN(123));