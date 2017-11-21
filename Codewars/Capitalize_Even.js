/*
Given a string, capitalize the letters that occupy even indexes
and odd indexes separately, and return as shown below.
Index 0 will be considered even.*/

function capitalize(s){
  let capitalized = [];
  let cap_even = s.split("").map((el, index, arr) => {if (index % 2 === 0){
    return el.toUpperCase();
  } else {
    return el;
  }
}).join("");
  let cap_odd = s.split("").map((el, index, arr) => {if (index % 2 !== 0){
    return el.toUpperCase();
  } else {
    return el;
  }
}).join("");
  capitalized.push(cap_even,cap_odd);
  console.log(capitalized);
  return capitalized;
};

capitalize("abcdef");
capitalize("codewars");
capitalize("abracadabra");
capitalize("codewarriors");
