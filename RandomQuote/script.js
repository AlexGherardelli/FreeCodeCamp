
function makeRequest(method, url){
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var response = JSON.parse(request.responseText);
            // response.classList.add(".hide");
            renderHTML(response);


        } else
            console.log("Error in dealing with request");
    };
    request.onerror = function() {
        console.log("Connection error");
    };
    request.send();
}

function renderHTML(data){
    var joke = data.value['joke']; 
    var HTMLstring = "<p>" + joke + "</p>";
    quote.innerHTML = HTMLstring;
}



// Get button
var btn = document.querySelector(".btn");
var quote = document.querySelector(".quote")


btn.addEventListener('click', function() {
	var url ="http://api.icndb.com/jokes/random";
    makeRequest('GET', url);
});


