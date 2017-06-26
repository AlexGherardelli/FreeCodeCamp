
function pairwise(arr, arg) {

  var sum = 0;
  if(arr.length > 1){
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if(arr[i] + arr[j] === arg){
          sum = i + j;
          arr[i] = NaN;
          arr[j] = NaN;
        }
      }
    }
    return sum
  }
  else{
    return 0
  }



}

pairwise([], 7);
