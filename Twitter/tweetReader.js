(function() {
	"use strict";
	
	var Twitter = require("twitter"),
			credentials = require("./credentials.json"),
			client;

	client = new Twitter(credentials);

	client.stream(
		"statuses/filter",
		{"track": "Clinton"},
		function(stream) {
			stream.on("data", function(tweet) {
				console.log(tweet.text);
			});
	});
	module.exports = Twitter;
}());