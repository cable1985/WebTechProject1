var main = function() {
    "use strict";
    
    $.getJSON("/twitter.json", function(tweets) {
        console.log(tweets);
    });
}
$(document).ready(main);