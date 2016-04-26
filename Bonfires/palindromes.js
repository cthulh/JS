function palindrome(str) {
  var reversed = str.split('').reverse().join('');
  if (str.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase()===reversed.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase()) {
  	return true;
  } else {
  	return false;
  }
}



console.log(palindrome("never odd or even"));