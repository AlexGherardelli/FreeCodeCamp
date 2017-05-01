// DO STUFF HERE
var streamers = ["blizzheroes", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];
var twitch = document.querySelector(".twitch");
var stream_url = "https://wind-bow.glitch.me/twitch-api/streams/";
var user_url = "https://wind-bow.glitch.me/twitch-api/users/";
var html = "";
var offline_streamers = [];

for (var i = 0; i < streamers.length; i++) {
    var url = stream_url + streamers[i];
    getData("GET", url, updateUsers);
}

// FUNCTION DEFINITIONS

// Make ajax request to get data and process it
function getData(method, url, callback) {
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var response = JSON.parse(request.responseText);
            window.response = response;
            callback(response);
        } else {
            response = JSON.parse(request.responseText);
            console.warn("Error in dealing with request");
        }
    };
    request.onerror = function() {
        console.warn("Connection error");
    };
    request.send();
}

// Checks if user is online and renders data
function updateUsers(data) {
    // if users are not streaming
    if (data.stream == null) {
        // updates offline users
        updateOfflineUsers(data._links.channel.substr(38));
    } else {
        html = "<div class='element online'><p>" + data.stream.channel.status + "</p>" +
            "<p>" + data.stream.game + "</p></div>";
        twitch.insertAdjacentHTML("beforeEnd", html);
    }
}

// Get data from offline users
function updateOfflineUsers(username) {
	// console	.log("Offline user: " + username);
	var url = user_url + username;
	// console.log(url);
	getData("GET", url, function(data){
		// console.log(data);
		if(data.status === 404){
			twitch.insertAdjacentHTML('beforeEnd', "<div class='element inexistent'><p> User"+ username + " was not found </p> </div>");
		}
		else{
      html = "<div class='element offline'><p>" + username +  " is currently offline</p></div>";
      twitch.insertAdjacentHTML("beforeEnd", html);
		}
	});
}
