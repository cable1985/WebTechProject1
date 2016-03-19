
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
        
        app.get("/twitterstream4", function (req, res) { 
            client.stream("statuses/filter", {"track": "sanders"},
                function(stream){
                    var counter = 0;
                    var resString = "";
                    var send = 0;
                    stream.on("data", function(tweet) {
                        if (!send) {
                        resString += tweet.text + "\n";
                        counter++;
                            if (counter > 10) {
                                send = 1;
                                res.send(resString);
                            }
                        }
                    });
                });
             });
      };
    main();
}());