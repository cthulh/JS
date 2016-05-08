//Array of a 100 quotes = quotes_array

var rand = function(limit) {
	return Math.floor((Math.random() * limit));
}
var x = rand(99);

$('#quote').html(quotes_array[x][0]);
$('#movie').html(quotes_array[x][1]);

