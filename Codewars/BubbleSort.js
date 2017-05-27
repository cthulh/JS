var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(a)
{
  var swapped, n = 0;
  do {
    n += 1;
    console.log("-----------------Cycle " + n);
    swapped = false;
    for (var i=0; i < a.length-1; i++) {
      console.log("Comparing " + a[i] + " and " + a[i+1]);
      if (a[i] > a[i+1]) {
        var temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        swapped = true;
        console.log("Swapped!");
      }
      console.log("[" + a + "]");
    }
  } while (swapped);
  console.log("----------");
  console.log("Total cycles: " + n);
  console.log("Final array: [" + a + "]");
}

bubbleSort(a);
console.log(a);