// PART 0: Ajax request helper function
function makeRequest(method, url, callback){
	var request = new XMLHttpRequest();
	request.open(method, url);
	// console.log(url);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			var response = JSON.parse(request.responseText);
			// console.log(response);
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


// PART 1:  Get location from location api and insert it into location paragraph
var loc = document.getElementById('location')
var temp = document.getElementById("temp");
var weather = document.getElementById('weather');
var btn = document.querySelector("button");
var apiKey = "c5b044125cc6167916e2fa491f733c39";
var icon = document.getElementById("icon")


// PART 2: GET LOCATION AND WEATHER DATA AND INSERT INTO PARAGRAPHS
function renderWeather(data){
	temp.innerHTML = data.main.temp;
	weather.innerHTML = " - " + data.weather[0].main ;

	// http://openweathermap.org/img/w/10d.png
	icon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
}

function renderHTML(data){
	loc.innerHTML = data.city + ", " + data.country;
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + data.city + "," + data.country +  "&units=metric" + "&APPID=" + apiKey;
	// console.log(url);
	makeRequest('GET', url, renderWeather);
}

makeRequest('GET', 'http://ip-api.com/json', renderHTML);

// PART 3: Convert celsius to farenheit (and viceversa)
btn.addEventListener("click", function(){
		if(btn.textContent == "Change to Celsius"){
			btn.textContent = "Change to Farenheit";
			temp.textContent = (temp.textContent - 32)/1.8;
		}
		else{
			btn.textContent = "Change to Celsius";
			temp.textContent = temp.textContent * 1.8 + 32
		}
});


// Toggle button

// PART 4: Insert icon depending on weather



// if("geolocation" in navigator){
//   navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
// }
// else{
//   console.warn("Navigation not present");
// }
//
//
// function geoSuccess(pos){
//   var coord = pos.coords;
//   console.log("Your current position is: ");
//   console.log("Latitude: " + coord.latitude);
//   console.log("Longitude: " + coord.longitude);
// }
//
// function geoError(err){
//   console.warn("Error! " + err.message);
// }
//
// var options = {
//   enableHighAccuracy: true
// };
