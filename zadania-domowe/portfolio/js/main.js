'use strict';

$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
        $("#main-nav").css("background-color","white");
         $(".nav-link").css("color", "green");   
        }
        else {
            $("#main-nav").css("background-color","");
            $(".nav-link").css("color", "white");  
        }
    });
$(document).on('click', 'a', function(event){
	    event.preventDefault();
	    $('body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 800);
	});
}
);
