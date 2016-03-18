var main = function() {
    "use strict";
    
   var addToDom =  function(content) {
    $("#ClintontweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream2", function(tweets) {
            addToDom(tweets);
        });
    
};

$(document).ready(main);











