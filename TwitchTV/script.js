// api end point
// https://wind-bow.glitch.me/twitch-api/streams/freecodecamp
// https://wind-bow.glitch.me/twitch-api/user/freecodecamp
// https://wind-bow.glitch.me/twitch-api/channels/freecodecamp

var streamers = ["blizzheroes", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

var twitch = document.querySelector(".twitch");


function makeRequest(method, url){
	var request = new XMLHttpRequest();
	request.open(method, url);
	request.onload = function(){
		if(request.status >= 200 && request.status < 400){
			var response = JSON.parse(request.responseText);
      window.response = response;
			console.log(response);
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

url = "https://wind-bow.glitch.me/twitch-api/streams/" + "blizzheroes";

makeRequest("GET", url, console.log);


function renderHTML(data){
var htmlString = "";
for (var i = 0; i < data.length; i++) {
  if(data[i].hasOwnProperty("stream")){
    console.log("YES");
    if(data[i].stream != undefined){
      htmlString = "<div class='element online'><p>" + data[i].stream.channel.status + "</p>" +
      "<p>" + data[i].stream.game + "</p></div>";
      twitch.insertAdjacentHTML("beforeEnd", htmlString);
    }
    else{
      htmlString = "<div class='element offline'><p>" + "Channel Offline" "</p></div>";
      twitch.insertAdjacentHTML("beforeEnd", htmlString);
    }
  }
  else{
    twitch.insertAdjacentHTML('beforeEnd', "<div class='element inexistent'><p>Channel not found</p> </div>"); }
  }
}
