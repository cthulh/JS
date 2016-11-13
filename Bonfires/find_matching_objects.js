/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
*/
function whatIsInAName(collection, source) {
  // scoop matching objects into below array
  var arr = [];
  var properties = Object.keys(source);
  var counter;
  // Loop through objects in 1st argument
  for (var i = 0; i < collection.length; i = i +1) {
    counter = 0;
    // Loop through properties in 2nd argument
    for (var j = 0; j < properties.length; j = j +1) {
      // If object has the property and value add to array
      console.log("Object: "+i+", Property: "+properties[j]+", Value: "+collection[i][properties[j]]+"|| Source Property Value: "+source[properties[j]]);
      // If object has the same property value as the source object, count it
      if (collection[i][properties[j]]===source[properties[j]]){
          counter = counter + 1;
          console.log("Counter: "+counter+", j: "+j);
        }
        // If it's the end of the loop and the number of matched properties equals all properties in source object add object to result array
      if ((j+1===properties.length) && (counter-1 === j)) {
          arr.push(collection[i]);
          console.log("Added");
      }
    }
  }
  
  // Only change code above this line
  console.log("-------------------------------------------");
  return arr;

}

whatIsInAName(
    [
    { first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
    ]
    , 
    { last: "Capulet" });
whatIsInAName(
    [
    { "a": 1, "b": 2 }, 
    { "a": 1 }, 
    { "a": 1, "b": 2, "c": 2 }
    ]
    , 
    { "a": 1, "b": 2 });
