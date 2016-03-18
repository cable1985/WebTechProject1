var main = function() {
    "use strict";
    
   var addToDom =  function(content) {
    $("#CruztweetFeed").append("<p>" + content + "</p>");
    //$("#CruztweetFeed").append("<p>" + content + "</p>");
    //$("#CruztweetFeed").append("<p>" + content + "</p>");
    //$("#CruztweetFeed").append("<p>" + content + "</p>");
    //$("#CruztweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream", function(tweets) {
            addToDom(tweets);
        });
    
};

$(document).ready(main);

