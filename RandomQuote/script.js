// Variables
var count = 0;
var btn = document.querySelector(".btn");
var quote = document.querySelector(".quote")


btn.addEventListener('click', function() {
makeRequest('GET', "http://api.icndb.com/jokes/random");
});

if(count < 1){
    makeRequest('GET', "http://api.icndb.com/jokes/random");
    count++;
}

function makeTweetUrl(quoteString){
    var spl = quoteString.split(" ");
    spl = spl.join("%20");
    var tweet = document.querySelector(".twitter-share-button");
    var tweetURL = tweet.href + "?text=" + spl + "&hashtags=FreeCodeCamp";
    return tweet.href = tweetURL;
}



// FUNCTION DECLARATIONS
// Ajax request function
function makeRequest(method, url){
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var response = JSON.parse(request.responseText);
            renderHTML(response);
            makeTweetUrl(quote.textContent)
        } else
            console.log("Error in dealing with request");
    };
    request.onerror = function() {
        console.log("Connection error");
    };
    request.send();

}
// Renders HTML
function renderHTML(data){
    var joke = data.value['joke']; 
    var HTMLstring = "<p class='text'>" + joke + "</p>";
    quote.innerHTML = HTMLstring;
}
