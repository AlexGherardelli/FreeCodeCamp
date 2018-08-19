
function sumAll(arr){

	var sorted = arr.sort(function(a, b) {
	return a - b;
	});

	var low = sorted[0];
	var high = sorted[1];
	
	if(low == high)
		return high;
	else{
		return low + sumAll([low + 1, high]);
	}

}