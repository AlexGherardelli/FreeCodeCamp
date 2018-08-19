
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  var keys = Object.keys(source);

  collection.filter(function(obj){
    for (var i = 0; i < keys.length; i++) {
      if(obj.hasOwnProperty(keys[i]) || obj[keys[i]] === source[keys[i]]){
thi           console.log(obj);
          return true;
      }
      return false;

    }

  });
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
