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
	for (var i = 0; i < data.query.search.length; i++) {
		console.log("Writing data n: " + [i]);
		var entry = "<div class='entry'><h2>" + data.query.search[i].title + "</h2><p class='snippet'>" + data.query.search[i].snippet + "</p></div>";
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




	
