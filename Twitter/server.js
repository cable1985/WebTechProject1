
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
        
    app.get("/twitterstream", function (req, res) {  
        console.log('i got to get');
        client.stream("statuses/filter", {"tracks": "cruz"},
            function(stream){
                console.log("stream started");
                stream.on("data", function(tweet) {
                    console.log(tweet.text);    
                    //res.send(tweet.text);
                    });
                });
        module.exports = Twitter;
    });
   };
    main();
}());