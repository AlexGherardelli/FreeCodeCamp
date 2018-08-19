/***************************************************************
					WIKIPEDIA VIEWER: REFACTORED
***************************************************************/

(function() {

    // MODEL: data storage
    var model = {
        query: [],
    };


    // VIEW: renders and updates the view
    var view = {
        // Get all DOM elements and calls renders
        init: function() {
            this.searchbox = document.querySelector(".search-input");
            this.submit = document.querySelector("#sub");
            this.wiki = document.querySelector(".wikipedia");

            this.search()

        },
        // When search button is clicked, make Ajax call from Wikipedia API
        search: function() {
            this.submit.addEventListener("click", function() {
                view.clear();
                var search = view.searchbox.value.split(" ").join("+");
                var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&utf8=1&srsearch=" + search;
                controller.makeRequest("GET", url);
            });

        },
        // display results from search
        render: function() {
            var entries = controller.getEntries(); // gets all entries from controller

            for (var i = 0; i < entries.length; i++) {
                var link = "<a href='http://wikipedia.org/wiki/" + entries[i].title.split(" ").join("_") + "' target='_blank'>";
                var entry = link + "<div class='entry'><h2>" + entries[i].title + "</h2><p class='snippet'>" + entries[i].snippet + "</p></div> </a>";
                view.wiki.insertAdjacentHTML("beforeend", entry);
            }
        },

        // clears the view in case something was already searched
        clear: function() {
            while (view.wiki.firstChild) {
                view.wiki.removeChild(view.wiki.firstChild);
            }
        }
    };


    // CONTROLLER
    var controller = {
        // initialize the view
        init: function() {
            view.init();

        },

        // Make Ajax request and update the model
        makeRequest: function(method, url) {
            var request = new XMLHttpRequest();
            request.open(method, url);
            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    var response = JSON.parse(request.responseText);
                    model.query = []; // clears the model
                    model.query.push(response.query.search); // updates the model with response from call
                    view.render(); // update the view
                } else {
                    response = JSON.parse(request.responseText);
                    console.warn("Error in dealing with request");
                }
            };
            request.onerror = function() {
                console.warn("Connection error");
            };
            request.send();
        },

        // gets all entries from the model
        getEntries: function() {
            return model.query[0];
        }

    };


    // Starts the application
    controller.init();

})();