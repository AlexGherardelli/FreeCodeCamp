function diffArray(arr1, arr2) {
  let difference = arr1
                   .filter(x => arr2.indexOf(x) == -1)
                   .concat(arr2.filter(x => arr1.indexOf(x) == -1));
  return difference;
}
diffArray([1, 2, 3], [1, 2, 3]);
