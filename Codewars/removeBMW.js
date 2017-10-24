// [kata 8] Remove all occurrences of b,m,w,B,M,W

function removeBMW(str){
  var err = new Error();
  err.name = "(IllegalArgumentException in Groovy)";
  err.message ="This program only works for text.";
  if (typeof str !== "string") {
    throw err;
  }

  var rm = "bmwBMW".split("");
  return str.split("").filter(function(el){return rm.indexOf(el) == -1 }).join("");
}

removeBMW("bmwvolvoBMW");