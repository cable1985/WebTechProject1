var main = function() {
    "use strict";
    
   var addToDom =  function(content) {
    $("#CruztweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream", function(tweets) {
            addToDom(tweets);
        });
    
    //Clinton
    var addToDom2 =  function(content) {
    $("#ClintontweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream2", function(tweets) {
            addToDom2(tweets);
        });
    
    //Kasich
    var addToDom3 =  function(content) {
    $("#KasichtweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream3", function(tweets) {
            addToDom3(tweets);
        });
    
    //Sanders
    var addToDom4 =  function(content) {
    $("#SanderstweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream4", function(tweets) {
            addToDom4(tweets);
        });
    
    //Trump
    var addToDom5 =  function(content) {
    $("#TrumptweetFeed").append("<p>" + content + "</p>");
   };
    
    $.get("twitterstream5", function(tweets) {
            addToDom5(tweets);
        });
 }

$(document).ready(main);

