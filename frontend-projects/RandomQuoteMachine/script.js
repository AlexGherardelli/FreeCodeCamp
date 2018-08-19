// // constiables
// const count = 0;
// const btn = document.querySelector(".btn");
// const quote = document.querySelector(".quote")
// const tweet = document.querySelector(".twitter-share-button");


// btn.addEventListener('click', function() {
//     makeRequest('GET', "https://api.icndb.com/jokes/random");
// });

// if (count < 1) {
//     makeRequest('GET', "https://api.icndb.com/jokes/random");
//     count++;
// }

function makeTweetUrl(quoteString) {
    const spl = "";
    spl = quoteString.split(" ");
    spl = spl.join("%20");
    const tweetURL = 'https://twitter.com/intent/tweet?text=' + spl + "&hashtags=FreeCodeCamp";
    tweet.href = tweetURL;
}



// // FUNCTION DECLARATIONS
// // Ajax request function
// function makeRequest(method, url) {
//     const request = new XMLHttpRequest();
//     request.open(method, url);
//     request.onload = function() {
//         if (request.status >= 200 && request.status < 400) {
//             const response = JSON.parse(request.responseText);
//             renderHTML(response);
//             makeTweetUrl(quote.textContent)
//         } else
//             console.log("Error in dealing with request");
//     };
//     request.onerror = function() {
//         console.log("Connection error");
//     };
//     request.send();

// }
// // Renders HTML
// function renderHTML(data) {
//     const joke = data.value['joke'];
//     const HTMLstring = "<p class='text'>" + joke + "</p>";
//     quote.innerHTML = HTMLstring;
// }


/********************************************
******  REFACTOR ***************************
********************************************/



const model = {};

const view = {
    init() {
        this.count = 0;
        this.btn = document.querySelector(".btn");
        this.quote = document.querySelector(".quote")
        this.tweet = document.querySelector(".twitter-share-button");
        this.render();
    },
    render() {
        this.btn.addEventListener("click", function(){
            controller.makeRequest('GET', "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?");
        });
    }, 
    tweet(quoteString){
        const spl = "";
        spl = quoteString.split(" ");
        spl = spl.join("%20");
        const tweetURL = 'https://twitter.com/intent/tweet?text=' + spl + "&hashtags=FreeCodeCamp";
        tweet.href = tweetURL;
        }
};

const controller = {
    init() {
        view.init();
    },
    makeRequest(method, url) {
        function getCORS(url, success) {
            var xhr = new XMLHttpRequest();
            if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
            xhr.open(method, url);
            xhr.onload = success;
            xhr.send();
            return xhr;
        }
        getCORS(url, function (request) {
            var response = request.currentTarget.response || request.target.responseText;
            console.log(response);
        });
    


    }
};

controller.init();