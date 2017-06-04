
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(function(e){
    // console.log(e);
      return e.hasOwnProperty(pre) && Boolean(e[pre]);
  });
}

console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"));
