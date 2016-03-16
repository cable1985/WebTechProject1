(function() {
	"use strict";
	
	var Twitter = require("twitter"),
			credentials = require("./credentials.json"),
			client;

	client = new Twitter(credentials);

	client.stream(
		"statuses/filter",
		{"track": ["Cruz", "Ted Cruz", "Trump", "Donald Trump", "Sanders", "Bernie Sanders", "Clinton", "Hilary Clinton"]},
		function(stream) {
			stream.on("data", function(tweet) {
				console.log(tweet.text);
			});
	});
	module.exports = Twitter;
}());
