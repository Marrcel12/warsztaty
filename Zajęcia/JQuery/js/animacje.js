'use strict'
$(function(){
$('p').hide(3000).show(3000, koniecAnimacji);
$('h1').fadeOut(3000).fadeIn(3000);
$('h3').slideUp(3000).slideDown(3000);
    function koniecAnimacji(){
        console.log("Kuniec");
    }
    $('h3').animate({
        'font-size': "3em",
        'margin-left': "100px"
    }, 5000);
    });
;
