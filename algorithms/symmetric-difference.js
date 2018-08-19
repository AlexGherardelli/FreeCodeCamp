
function sym(args) {
	var arr = Array.prototype.slice.call(arguments);



}

sym([1, 2, 3], [5, 2, 1, 4]); // should return [3, 4, 5]
