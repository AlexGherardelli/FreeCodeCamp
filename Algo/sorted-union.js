



function uniteUnique(arr) {
	var unique = [];
	var args = Array.prototype.slice.call(arguments);
	for (var i = 0; i < args.length; i++) {
		unique = unique.concat(args[i]);
	}
	unique = unique.filter(function(e, index, arr){
		console.log("arr.indexOf " + arr.indexOf(e));
		console.log("index " + index);
		return arr.indexOf(e) == index;
	});
	return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);