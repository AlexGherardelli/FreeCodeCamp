// //  (guanine-cytosine and adenine-thymine)
// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

function pairElement(str) {
  var arr = [];
  str.split("").forEach(function(e){
    switch(e){
      case "G":
        arr.push([e, "C"]);
        break;
      case "C":
        arr.push([e, "G"]);
        break;
      case "A":
        arr.push([e, "T"]);
        break;
      case "T":
        arr.push([e, "A"]);
    }

  });
  return arr;

}

pairElement("GCG");
