//https://www.codewars.com/kata/ease-the-stockbroker/train/javascript

function balanceStatements(list) {
    var buy_sum = 0;
    var sell_sum = 0;
    var badly_formed = [];
    var orders = list.split(", ");
    for (i = 0; i < orders.length; i++) {
        var order = orders[i].split(" ");
        if (order.length === 4 && order[1].toString().indexOf(".") === -1 && order[2].toString().indexOf(".") !== -1) {
            if (order[3] === "B") {
                buy_sum += Math.round(order[2] * order[1]);
            } else if (order[3] === "S") {
                sell_sum += order[2] * order[1];
            }
        } else if(order.join(" ").length > 1) {
            badly_formed.push(order.join(" "));
        }
    }
    var result = "Buy: " + buy_sum + " Sell: " + sell_sum;
    if (badly_formed.length > 0) result += "; Badly formed " + badly_formed.length + ": " + badly_formed.join(" ;") + " ;";
    console.log(result);
    return result;
}

balanceStatements("GOOG 300 542.0 B, GOOG 300 542.0 S, GOOG 300 542 S");