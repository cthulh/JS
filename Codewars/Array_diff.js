function array_diff(a, b) {
  for (var i = 0; i < b.length; i++){
    for (var k = 0; k < a.length; k++){
      var index = a.indexOf(b[i]);
      if (index > -1) a.splice(index,1);
    }
  }
  return a;
}

array_diff([1,1,1,2,2,2,3,3,1,2,3],[2]);
