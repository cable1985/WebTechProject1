
(function() {
    "use strict";
    
    var main = function() {
        
        var express = require("express"),
        http = require("http"),
        bodyParser = require("body-parser"),
        app = express();
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(express.static(__dirname)); 
        
        http.createServer(app).listen(3000);
        
        
        var Twitter = require("twitter"),
			credentials = require("./credentials.json"),
			client;

	    client = new Twitter(credentials);
        
        app.get("/twitterstream6", function (req, res) {
            var search = req.query.q;
            client.stream("statuses/filter", {"track": search},
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