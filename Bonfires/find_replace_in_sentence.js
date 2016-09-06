/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/
function myReplace(str, before, after) {
  var arr = [];
  arr = str.split(" "); // Split to array without spaces, so it's easy to find and replace by element
  console.log(arr);
  console.log("Find: " + before + ", Replace with: " + after);
  console.log(after.toLowerCase());
  console.log(after[0].toUpperCase() + after.slice(1));
  var arr_len = arr.length; // BOOM! Performance boost! The loop doesn't have to calculate it every tick. I know, right?
  for (var i = 0; i < arr_len; i = i + 1) {
    console.log("arr[i] === before : "+(arr[i] === before));
    console.log("arr[i].toLowerCase !== arr[i] :"+(arr[i].toLowerCase() !== arr[i]));
    console.log("(arr[i].toLowerCase : "+(arr[i].toLowerCase()));
    console.log("arr[i].toLowerCase === arr[i] :"+(arr[i].toLowerCase() === arr[i]));
    if (arr[i] === before && arr[i].toLowerCase() === arr[i]){
      arr[i] = after.toLowerCase();
    } else if (arr[i] === before && arr[i].toLowerCase() !== arr[i]) {
      arr[i] = after[0].toUpperCase() + after.slice(1);
    }
  }

  str = arr.join(" ");
  console.log(str);
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
