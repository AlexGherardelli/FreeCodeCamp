//
function sumFibs(num) {
  return num;
}

function fib(n){
  if(n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

num = 10;
arr = [];
while(num >= 0){
  arr.push(fib(num));
  num--;
}
console.log(arr);


// sumFibs(10);
// sumFibs(4);
// sumFibs(10);
// sumFibs(1);
// sumFibs(1000); //should return 1785.
