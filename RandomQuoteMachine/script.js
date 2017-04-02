// Variables
var count = 0;
var btn = document.querySelector(".btn");
var quote = document.querySelector(".quote")
var tweet = document.querySelector(".twitter-share-button");


btn.addEventListener('click', function() {
makeRequest('GET', "https://api.icndb.com/jokes/random");
});

if(count < 1){
    makeRequest('GET', "https://api.icndb.com/jokes/random");
    count++;
}

function makeTweetUrl(quoteString){
    var spl = "";
    spl = quoteString.split(" ");
    spl = spl.join("%20");
    var tweetURL = 'https://twitter.com/intent/tweet?text=' + spl + "&hashtags=FreeCodeCamp";
    tweet.href = tweetURL;
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
