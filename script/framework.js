//ABOUT//
$(document).ready(function(){
    $("#about").mouseenter(function(){
        $("p").slideUp("slow");
    });
    $("#about").click(function(){
        $("p").slideDown("slow");
    });
});

//IMAGES//
$(document).ready(function(){
    $("#imgs").hover(function(){
        $(".img1").fadeToggle("slow",0);              
    });
    
});

//QUOTE//
document.getElementById('quote').addEventListener('click', quoteBtn);
var quotes = [
    '"Cooking is like love. It should be entered into with abandon or not at all." <br> <b>Harriet Van Horne</b>',
    '"People who love to eat are always the best people." <br> <b>Julia Child</b>',
    '"To eat is a necessity, but to eat intelligently is an art." <br> <b>François de la Rochefoucauld</b>',
    '"We all eat, an it would be a sad waste of opportunity to eat badly". <br> <b>Anna Thomas</b>',
    '"If you really want to make a friend, go to someone\'s house and eat with him... the people who give you their food give you their heart." <br> <b>Cesar Chavez</b>'
]
function quoteBtn(){
    var randomQuote = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomQuote];
}


