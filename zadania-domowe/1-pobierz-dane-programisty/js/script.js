 $(function () {

     $('#button').click(function () {
         $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $(data).each(function(element,index){
                
                 $('#button').append("<div id=id=dane-programisty>"+this.imie+" "+this.nazwisko+ " "+ this.zawod+" "+this.firma+"</div>");
             });
             
         });
     });    
 });
