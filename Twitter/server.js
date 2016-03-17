var express = require("express"),
http = require("http"),
tweetReader = require("./tweetReader.js"), 
    app = express();
    // configure the app to use the client directory 
app.use(express.static(__dirname)); // create the server and have it listen
    http.createServer(app).listen(3000);
    // set up routes
app.get("/twitter.json", function (req, res) {

    res.json(tweetReader);
   
});