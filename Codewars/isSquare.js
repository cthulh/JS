var isSquare = function(n){
  if ((""+Math.sqrt(n)).indexOf(".") === -1 && n >= 0){
    return true;
  } else {
    return false;
  }
}
isSquare(0);
isSquare(99);
isSquare(25);
isSquare(1);
