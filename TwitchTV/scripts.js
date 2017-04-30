var streamers = ["blizzheroes", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];

var twitch = document.querySelector(".twitch");

// DO STUFF HERE
for(var i = 0; i < streamers.length; i++){
	var url = "https://wind-bow.glitch.me/twitch-api/streams/" + streamers[i];
	makeRequest("GET", url, renderHTML);
}


// FUNCTION DEFINITIONS
function renderHTML(data){
	// console.log(data);
	var htmlString = "";
	if(data.stream != null){
		htmlString = "<div class='element online'><p>" + data.stream.channel.status + "</p>" +
		"<p>" + data.stream.game + "</p></div>";
		twitch.insertAdjacentHTML("beforeEnd", htmlString);
	}
	else{
		// console.log("Channel is offline or has been deleted");
		for(var i = 0; i < streamers.length; i++){
			console.log(streamers.length);
			var url = "https://wind-bow.glitch.me/twitch-api/users/" + streamers[i];
			// console.log(url);
			makeRequest("GET", url, function(dat){
				if(dat.display_name != undefined ){
					// Buggy call (calling multiple times)!
					twitch.insertAdjacentHTML('beforeEnd', "<div class='element inexistent'><p>" + dat.message + "</p> </div>");
				}
			});
		}
}
}


function makeRequest(method, url, callback){
	var request = new XMLHttpRequest();
	request.open(method, url);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			var response = JSON.parse(request.responseText);
      window.response = response;
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
