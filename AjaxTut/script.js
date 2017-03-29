// Tutorial from: https://www.youtube.com/watch?v=rJesac0_Ftw&index=8&list=PL3ED4gmXtZBet_uIPcB3XzGIQZDWfAnnN

var page = 1;
var btn = document.querySelector(".btn");
var animal = document.getElementById("animal-info");


btn.addEventListener('click', function(){
	// open new Ajax request
	var req = new XMLHttpRequest();

	// Get data from server and get JSON file
	req.open("GET", "https://learnwebcode.github.io/json-example/animals-" + page + ".json");
	// Load data 
	req.onload = function(){  // onload is the modern version of onreadystatechange
		// the response should be parsed and outputted 
		if (req.status >= 200 && req.status < 400){
					var resp = JSON.parse(req.responseText);
		// and finally rendered with HTML around it!
		renderHTML(resp);
		}
		else{
			console.log("Error! Error! Error!");
		}

	};
	// Error handling
	req.onerror = function(){
		console.log("Connection error");
	};
	// Send request
	req.send();
	page++;
	// Add class to button in case the page number is more than 3
	if(page > 3){
		btn.classList.add("hide-me");
	}
});


// Function to render HTML - nice and clean
function renderHTML(data){
	var HTMLString = "";
	for (var i = 0; i < data.length; i++) {
		HTMLString += "<p>" + data[i]["name"] + " is a " + data[i].species + "</p>"
	}

	animal.insertAdjacentHTML("beforeend", HTMLString);

}

