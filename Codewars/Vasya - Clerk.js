// https://www.codewars.com/kata/vasya-clerk/train/javascript

function tickets(peopleInLine){
  var cashier = [[25,0],[50,0],[100,0]];
  var price = 25;
  var result = "YES";
  function processChange(note){
    console.log("Note payed in: " + note);
    if (note === 50){
      cashier[0][1] -= 1;
      console.log("Taken 25 from cashier.");
      console.log("25 notes in cashier: " + cashier[0][1]);
      addToCashier(50);
    } else if (note === 100) {
      if (cashier[1][1] > 0) {
        cashier[1][1] -= 1;
        console.log("Taken 50 from cashier.");
        console.log("50 notes in cashier: " + cashier[1][1]);
        cashier[0][1] -= 1;
        console.log("Taken 25 from cashier.");
        console.log("25 notes in cashier: " + cashier[0][1]);
        addToCashier(100);
      } else {
        cashier[0][1] -= 3;
        console.log("Taken 25 from cashier.");
        console.log("25 notes in cashier: " + cashier[0][1]);
        addToCashier(100);
      }

    }
    console.log("cashier[1][1] < 0 : " + (cashier[1][1] < 0));
    console.log("cashier[0][1] < 0 : " + (cashier[0][1] < 0));
    if (cashier[1][1] < 0 || cashier[0][1] < 0) result = "NO";
  }
  function addToCashier(note){
    for (i = 0 ; i < cashier.length ; i += 1){
      if (cashier[i][0] === note) cashier[i][1] += 1;
      console.log("Added " + note + " to cashier.");
      console.log(note + " notes in cashier: " + cashier[i][1]);
    }
  }

  for (person = 0; person < peopleInLine.length; person += 1){
    (peopleInLine[person] === price)? addToCashier(25) : processChange(peopleInLine[person]);
  }
  return result;
}

console.log(tickets([25, 25, 50, 50]));
console.log("----------------------");
console.log(tickets([25, 100]));
console.log("----------------------");
console.log(tickets([25,25,50,100,25,25,50,100,25,25,25,100,25,25,25,100,25,25,25,100,25,50,50,50]));
console.log("----------------------");