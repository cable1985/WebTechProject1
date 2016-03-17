var main = function() {
    "use strict";
    
   var addToDom =  function(content) {
    $("#tweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream", function(tweets) {
        tweets.statuses.forEach(function(status) {
            addToDom(status.text);
            console.log(status.text);
        });
    });
};

$(document).ready(main);

