// // Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]

function uniteUnique(arr) {
  var unique = [];

  for (var i = 0; i < arguments.length; i++) {
    unique = unique.concat(arguments[i]);
  }
  console.log(unique);

  // return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
