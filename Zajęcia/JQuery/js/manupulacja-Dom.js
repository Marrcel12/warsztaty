'use strict'
$(function(){
//    //pobieranie paragrafu pierwszego(.text)
//       var tekstPierwszegoTag= $('p:first');
//    console.log(tekstPierwszegoTag.text());
//    
//    console.log(tekstPierwszegoTag.html());
//    
//    
//    //dodawanie HTML
//    $(".paragraf-next").html($(".paragraf-next").html()+" to jest <b>paragraf!</b>");
//    
//    
//    //dodanie tresci na koncu selektora
//    $(".paragraf-next").append(' treść po selektorze');
//    //dodanie tresci za selektorem
//    $(".paragraf-next").after(' tresc za selektorem');
//    $(".paragraf-next").before(' tresc przed selektorem');
//   //usuwanie tresci( remove empty)
//    $('#paragraf').remove();
//    //dodawanie CSS
//    $('h3').css({'color': 'red', 'font-size':"3em"});
//    //dodanie klasy css
//    $('h1').addClass('klasa-testowa');//dodanie klasy
//    $('h1').removeClass('klasa-testowa'); // usunięcie tej klasy
//    //dodanie atrybutu 
//    $('.paragraf-next').attr('id','id-1');
//    
//    
//   $('body').find('p').eq(1).css('color', 'red');
    
    
    //petla eaach dodajaca do paramteru klasę
//    $('p').each(function(index, element){
//        $(this).addClass('paragraf-'+index)
//    });
    function kilk(){
        alert("KILK!")
        $("h1").off("click", kilk)

    }
    
    $('p').click(function(){
        $(this).css('color','red');
    });
    
    $("h1").on({
        'click': kilk,
        'mouseover': function(){
            $(this).css('color', 'red');
        }
    })
    
    $('h3').hover(function(){
          $(this).css('color', 'red');
    }, function(){
          $(this).css('color', '');
    })
    
    
    
    
    
});
