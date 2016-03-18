var main = function() {
    "use strict";
    
   var addToDom =  function(content) {
    $("#SanderstweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream3", function(tweets) {
            addToDom(tweets);
        });
    
};

$(document).ready(main);











