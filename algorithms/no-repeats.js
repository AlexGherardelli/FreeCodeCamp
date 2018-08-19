
function permAlone(str) {

  var str = str.split("");

  var permuted = [];
  function generate(n, array) {
  if (n === 1) {
      permuted.push(array.join(""));
  }
  else {

      for (var i = 0; i < n - 1; i++) {
          generate(n - 1, array);
          if (n % 2 == 0) {
              var one = array[i];
              var two = array[n - 1];
              array[i] = two;
              array[n - 1] = one;
          }
          else {
              var first = array[0];
              var second = array[n - 1];
              array[0] = second;
              array[n - 1] = first;

          }
      }
      generate(n - 1, array);
  }
}
  generate(str.length, str);

  


  var regex = /(.)\1+/gi;
  var noRepeats = permuted.filter(function(e){
    return !e.match(regex);
  });

  return  noRepeats.length;

}

permAlone("aab");

