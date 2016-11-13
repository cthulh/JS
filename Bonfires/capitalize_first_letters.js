function titleCase(str) {
   return str.split(" ").map(function(item){return item.charAt(0).toUpperCase()+item.slice(1).toLowerCase();}).join(" ");
}

console.log(titleCase("I'm a little tea pot"));