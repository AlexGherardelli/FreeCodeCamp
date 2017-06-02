function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var re =  /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.toLowerCase().replace(re, "-");
}

spinalCase("thisIsSpinalTap");

spinalCase("The_Andy_Griffith_Show");

console.log(spinalCase("This Is Spinal Tap"));
