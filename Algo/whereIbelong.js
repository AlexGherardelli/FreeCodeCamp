
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b){
  	return a - b ;
  });

  for (var i = 0; i < arr.length; i++) {
  	if(num <= arr[i])
  		return arr.indexOf(arr[i]);	
  	else
  		arr.push(num);
  }
}


// test cases
getIndexToIns([12, 20, 50, 120, 2], 50);
getIndexToIns([1,2,3,4], 1.5)
getIndexToIns([20,3,5], 19)

getIndexToIns([2, 5, 10], 15)