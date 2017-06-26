
function pairwise(arr, arg) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i] + " plus " + arr[i + 1] + " is ", arr[i] + arr[i + 1]);
	}

}

pairwise([1,4,2,3,0,5], 7);

// pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
// pairwise([1, 3, 2, 4], 4) should return 1.
// pairwise([1, 1, 1], 2) should return 1.
// pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
// pairwise([], 100) should return 0.