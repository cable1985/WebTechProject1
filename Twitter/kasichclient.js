var main = function() {
    "use strict";
    
   var addToDom =  function(content) {
    $("#KasichtweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream4", function(tweets) {
            addToDom(tweets);
        });
    
};

$(document).ready(main);

