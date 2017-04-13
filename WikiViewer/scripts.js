function makeRequest(method, url, callback){
	var request = new XMLHttpRequest();
	request.open(method, url);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			var response = JSON.parse(request.responseText);
			callback(response);
		}
		else{
			response = JSON.parse(request.responseText);
			console.warn("Error in dealing with request");
		}
	};
	request.onerror = function(){
		console.warn("Connection error");
	};
	request.send();
}

function renderHTML(data){
	response = data;
	var wiki = document.querySelector(".wikipedia");
	console.log(wiki);
  while (wiki.firstChild) {
  wiki.removeChild(wiki.firstChild);
  }
	for (var i = 0; i < data.query.search.length; i++) {
    var link = "<a href='http://wikipedia.org/wiki/" + data.query.search[i].title.split(" ").join("_") + "' target='_blank'>";
		var entry = link + "<div class='entry'><h2>"+ data.query.search[i].title + "</h2><p class='snippet'>" + data.query.search[i].snippet + "</p></div> </a>";
		wiki.insertAdjacentHTML("beforeend", entry);
	}

}





var searchbox = document.querySelector(".search-input");
var submit = document.querySelector("#sub");

var response = "";

submit.addEventListener("click", function(){
	var search = searchbox.value.split(" ").join("+");
	var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&utf8=1&srsearch=" + search;

	makeRequest("GET", url, renderHTML);
});
