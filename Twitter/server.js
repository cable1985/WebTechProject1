
(function() {
    "use strict";
    
    var main = function() {
        
        var express = require("express"),
        http = require("http"), 
        app = express();

        app.use(express.static(__dirname)); 
        http.createServer(app).listen(3000);
        
        var Twitter = require("twitter"),
			credentials = require("./credentials.json"),
			client;

	    client = new Twitter(credentials);
        
    app.get("/twitter.json", function (req, res) {  
        client.stream("statuses/filter", {"tracks": "cruz"},
            function(stream){
                stream.on("data", function(tweet) {
                    console.log(tweet.text);    
                    res.json(tweets);
                    });
                });
        module.exports = Twitter;
    });
   };
    main();
}());