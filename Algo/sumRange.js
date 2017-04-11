
function sumRange(arr){

	arr.sort(function(a, b) {
	return a - b;
	});
	console.log(arr);

	var low = arr[0];
	var high = arr[1];
	var sum = low;

	console.log(low, sum, high);

	if(low === high)
		return sum;
for(var i = low; i < high; i++){
	// i = 3
	sum = low + sumRange(low + 1, high);
}

}