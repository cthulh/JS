/*
 #####Complete the method so that it does the following:
 
 Removes any duplicate query string parameters from the url
 Removes any query string parameters specified within the 2nd argument (optional array)
 */

function stripUrlParams(url, paramsToStrip){
  var main = url.slice(0,url.indexOf("?"));
  var q = url.slice(url.indexOf("?") + 1).split("&");
  var result = [];
  
  var isInArray = function (arr, el){
    var result = false;
    for(i = 0; i < arr.length; i++){
      //console.log("arr[i][0] :"+arr[i][0] + ", el :" + el);
      if (arr[i][0] === el) result = true;
    }
    return result;
  };
  //console.log("paramsToStrip is : " + paramsToStrip);
  //console.log("q array is : [" + q.toString() + "] with length : " + q.length);
  
  if (paramsToStrip) {
    var strip = paramsToStrip.join("");
    q = q.filter(function (el) {
      return strip.indexOf(el.toString()[0]) === -1;
    });
  }
  
  for (k = 0; k < q.length; k++){
    if (!isInArray(result, q[k][0])){
      result.push(q[k]);
    }
  }
  
  if (result.length === 0){
    //console.log(main);
    return main;
  } else {
    result = main + "?" + result.join("&");
    //console.log(result);
    return result;
  }
}
stripUrlParams('www.codewars.com?a=1&b=2');
stripUrlParams('www.codewars.com?a=1&b=2&a=2');
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b', 'a']);