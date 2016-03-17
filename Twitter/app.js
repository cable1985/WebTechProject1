var main = function() {
    "use strict";
    
   var addToDom =  function(content) {
    $("#tweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream", function(tweets) {
            addToDom(tweets);
        });
    
};

$(document).ready(main);

