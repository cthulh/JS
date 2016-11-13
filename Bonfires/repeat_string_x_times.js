function repeatStringNumTimes(str, num) {
  if (num>0) return str.repeat(num);
  //return empty string if num if negative
  return "";
}

repeatStringNumTimes("abc", 3);