// PART 0: Ajax request helper function
function makeRequest(method, url, callback){
	var request = new XMLHttpRequest();
	request.open(method, url);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			var response = JSON.parse(request.responseText);
			callback(response);
		}
		else{
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

function getLocation(data){
	var city = data.city;
	var country = data.country;
	var countryCode = data.countryCode;
	loc.innerHTML = data.city + ", " + data.country;
	return city, country, countryCode;

}

makeRequest('GET', 'http://ip-api.com/json', getLocation);
// PART 2: Get weather from weather api

// http://api.openweathermap.org/data/2.5/weather?lon=12.5625636&lat=41.8904607&APPID=c5b044125cc6167916e2fa491f733c39
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c5b044125cc6167916e2fa491f733c39
function makeURL(){
	var url = "http://api.openweathermap.org/data/2.5/weather?q=";
	var apiKey = "c5b044125cc6167916e2fa491f733c39";
	url += city + "," + countryCode + "&APPID" + apiKey;
	return url;
}
// Insert weather into weather paragraph
var weather = document.getElementById('weather');
// PART 3: Convert celsius to farenheit (and viceversa)

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
