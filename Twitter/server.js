
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

	    client  = new Twitter(credentials);
        
        
        //search
        app.get("/twitterstream", function (req, res) {
            var search = req.query.q;
            client.stream("statuses/filter", {"track": search},
                function(stream){
                    var counter = 0;
                    var resString = "";
                    var send = 0;
                    stream.on("data", function(tweet) {
                        if (!send) {
                        resString += tweet.text + "<br><br>";
                        counter++;
                            if (counter > 20) {
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