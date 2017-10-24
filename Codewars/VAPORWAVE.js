// [kata 8] Convert string to V  A  P  O  R  W  A  V  E

function vaporcode(string) {
  return string.toUpperCase().split("").filter(function(el){return el !== " "}).join("  ");
}