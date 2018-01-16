'use srtict'
var licznik=1;

$("#right").click(function(){
    
    
    if(licznik>=4){
        licznik=0;
    }
    licznik++
  $('img').attr("src","img/"+licznik+".jpg");
$("h1").text('Slide'+licznik)
    
        
})




$("#left").click(function(){
   
    licznik--
     if(0>=licznik){
           licznik=4;
    }
  $('img').attr("src","img/"+licznik+".jpg");
    $("h1").text('Slide'+licznik)

        
})
