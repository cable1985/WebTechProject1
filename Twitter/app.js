var main = function() {
    "use strict";
    
   var insertIntoDom = function(tweets) {
   $("p").text("cruz: " + tweets);
   }
    $.getJSON("/twitter.json", function(tweets) {
        console.log(tweets);
    });
}
$(document).ready(main);

