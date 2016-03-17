
(function() {
    "use strict";
    var main = function() {
            var express = require("express"),
                http = require("http"),
                tweetReader = require("./tweetReader.js"), 
                app = express();

        app.use(express.static(__dirname)); 
        http.createServer(app).listen(3000);

        app.get("/twitter.json", function (req, res) {
        client.get("search/tweets", {"tracks": "cruz"},
               function(error,tweets,response){
                res.json(tweets);
            });
        });
    };

}());