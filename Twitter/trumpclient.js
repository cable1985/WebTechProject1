var main = function() {
    "use strict";
    
   var addToDom =  function(content) {
    $("#TrumptweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream5", function(tweets) {
            addToDom(tweets);
        });
    
};

$(document).ready(main);

