function sym(args) {
  var args = Array.from(arguments);

  function diff(first, second){
    var result = [];
    first.forEach(function(e){
      console.log(e);
      if(second.indexOf(e) < 0 && result.indexOf(e) < 0){
        result.push(e);
      }
    });

    second.forEach(function(e){
      // console.log(second.indexOf(e));
      if(first.indexOf(e) < 0 && result.indexOf(e) < 0){
        result.push(e);
      }
    });
    return result;
  }
  return args.reduce(diff);



}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
