function truncateString(str, num) {
  if (num>=str.length) return str;
  if (str.length>3 && num>3) return str.slice(0,num-3)+"...";
  return str.slice(0,num)+"...";
}

console.log(truncateString("Absolutely Longer", 2));