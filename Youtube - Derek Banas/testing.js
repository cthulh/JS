function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  var list = "";
  return function(number, location) {
    count++;
  
    zones.push(location);
    list = list.concat(location,"\n");
    
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" + number + " have been spotted at the " + location + "!\n" + "This is alert #" + count + " today for " + obstacle + " danger.\n" + "Current danger zones are:\n" + list);
  };
}

var sharks = warningMaker("sharks");
console.log(sharks(2,"Barracuda"));
console.log(sharks(2,"Lovestone"));
console.log(sharks(2,"Sham"));
            