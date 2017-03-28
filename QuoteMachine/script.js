// Tutorial from: https://www.youtube.com/watch?v=rJesac0_Ftw&index=8&list=PL3ED4gmXtZBet_uIPcB3XzGIQZDWfAnnN

var page = 1;
var btn = document.querySelector(".btn");
var animal = document.getElementById("animal-info");


btn.addEventListener('click', function(){
		// Ajax request
	var req = new XMLHttpRequest();
	req.open("GET", "https://learnwebcode.github.io/json-example/animals-" + page + ".json");
	req.onload = function(){  // onload is the modern version of onreadystatechange
		var resp = JSON.parse(req.responseText);
		renderHTML(resp);
	};
	req.send();
	page++;
	if(page > 3){
		btn.classList.add("hide-me");
	}
});


function makeAjaxRequest(method, url){

}

function renderHTML(data){
	var HTMLString = "";
	for (var i = 0; i < data.length; i++) {
		HTMLString += "<p>" + data[i]["name"] + "is a " + data[i].species + "</p>"
	}

	animal.insertAdjacentHTML("beforeend", HTMLString);

}

