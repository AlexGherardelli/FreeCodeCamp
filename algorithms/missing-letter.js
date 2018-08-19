
function fearNotLetter(str) {
  for (var i = 1; i < str.length; i++) {
    var a = str.charCodeAt(i) - str.charCodeAt(i - 1);
    if(a != 1){
      var code = str.charCodeAt(i) - 1;
      return String.fromCharCode(code);
    }
  }
}

 fearNotLetter("ayz");
