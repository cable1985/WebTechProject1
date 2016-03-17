
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
        
<<<<<<< HEAD
        app.get("/twitterstream", function (req, res) {  
            client.stream("statuses/filter", {"track": "cruz"},
                function(stream){
                    stream.on("data", function(tweet) {
                        res.send(tweet.text);
                        console.log(tweet.text);
=======
    app.get("/twitterstream.json", function (req, res) {  
        client.stream("statuses/filter", {"track": "cruz"},
            function(stream){
                stream.on("data", function(tweet) {
                    console.log(tweet.text);    
                    res.send(tweet.text);
>>>>>>> origin/master
                    });
                });
        });
      };
    main();
}());