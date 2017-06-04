function smallestCommons(arr) {
  // calculate great common divisor
  function gcd(a, b){
    while(a != b){
      if(a > b){
        a = a - b;
      }
      else{
        b = b - a;
      }
      return a;
    }
  }
    // sort array
  arr.sort(function(a,b){
    return a - b;
  });
  // console.log(arr);
  var a = arr[0];
  console.log(a);
  var b = arr[1];
  console.log(b);
// lcm(a, b) = ab/gcd(a, b)
var gdc = gcd(a, b);
console.log(gdc);
  console.log(a/gdc);

}
