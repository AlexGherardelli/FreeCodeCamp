// https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='

var searchbox = document.querySelector(".search-input");
var submit = document.querySelector("#sub");

submit.addEventListener("click", function(){
  // console.log("Pressing the button");
  console.log(searchbox.value);
});
