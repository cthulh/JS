function rot13(str) {
	var alph1 = "ABCDEFGHIJKLM";
	var alph2 = "NOPQRSTUVWXYZ";
	var alph_norm = alph1+alph2;
	var alph_reverse = alph2+alph1;
  return arr = str.split("").map(function(item){
  	if ("!\"',.;: ?".indexOf(item)>=0) {
  		return item;
  	} else {
  		if (alph1.search(item)>=0) {
  			return alph_norm.charAt(alph_norm.indexOf(item)+13);
  		} else if (alph2.search(item)>=0) {
  			return alph_reverse.charAt(alph_reverse.indexOf(item)+13);
  		}
  	}
  }).join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));