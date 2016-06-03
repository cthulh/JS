//Array of a 100 quotes = quotes_array
var get_quote = function(q) {
	var rand = function(limit) {
		return Math.floor((Math.random() * limit));
	}
	var x = rand(99);;
	$('#quote').html(q[x][0]);
	$('#movie').html(q[x][1]);

};

$(document).ready(get_quote(quotes_array));