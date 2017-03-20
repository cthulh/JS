/*
 Function to collect numbers that fulfill x = sum(n1^1, n2^2, n3^3 ... nk^k) where n1..nk are consecutive digits of integer x ,
 that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range.
 */

function sumDigPow(a, b) {
    var result = [];
    if (b < a) {
        console.log("Second integer is smaller than the first");
        return result;
    }
    for (var i = a; i <= b; i++){
        var k = i.toString().split("");
        console.log(k);
        var total = 0;
        for (var l = 0; l < k.length; l++){
            total += Math.pow(k[l],l+1);
            console.log("total: " + total);
        }
        if (i === total) result.push(i);
    }
    console.log(result);
    return result;
}

sumDigPow(1,130);
