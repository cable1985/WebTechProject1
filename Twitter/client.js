var main = function() {
    "use strict";
    //Cruz    
   var addToDom =  function(content) {
    $("#CruztweetFeed").append("<p>" + content + "</p>");
    };
    
    $("#submit2").on("click",function(event){
          var search=("cruz");
        $.get("/twitterstream?q=" + search, function(tweets){
            addToDom(tweets);
        });
    });
    
    //Clinton
    var addToDom2 =  function(content) {
    $("#ClintontweetFeed").append("<p>" + content + "</p>");
    };
    
    $("#submit3").on("click",function(event){
          var search=("clinton");
        $.get("/twitterstream?q=" + search, function(tweets){
            addToDom2(tweets);
        });
    });
    
    //Kasich
    var addToDom3 =  function(content) {
    $("#KasichtweetFeed").append("<p>" + content + "</p>");
    };
    
    $("#submit4").on("click",function(event){
          var search=("kasich");
        $.get("/twitterstream?q=" + search, function(tweets){
            addToDom3(tweets);
        });
    });
    
    //Sanders
    var addToDom4 =  function(content) {
    $("#SanderstweetFeed").append("<p>" + content + "</p>");
    };
    
    $("#submit5").on("click",function(event){
          var search=("sanders");
         $.get("/twitterstream?q=" + search, function(tweets){
            addToDom4(tweets);
        });
    });
    
    //Trump
    var addToDom5 =  function(content) {
    $("#TrumptweetFeed").append("<p>" + content + "</p>");
    };
    
    $("#submit6").on("click",function(event){
          var search=("trump");
        $.get("/twitterstream?q=" + search, function(tweets){
            addToDom5(tweets);
        });
    });
    
    //Search anything
    $("#submit").on("click",function(event){
          var search=$("#keyword").val();
        $.get("/twitterstream?q=" + search, function(tweets){
            addToDom6(tweets);
        });
    });
          var addToDom6 =  function(content) {
                $("#SearchtweetFeed").append("<p>" + content + "</p>");
          };
 }

$(document).ready(main);

