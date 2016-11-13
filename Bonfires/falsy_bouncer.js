function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(item){
  	if (item) {
  		return true;	
  	} else {
  		return false;
  	}
  });
}

console.log(bouncer([7, "ate", "", false, 9]));