 $(function(){
     $(window).scroll(function(){
         if ($(window).scrollTop() == $(document).height() - $(window).height()){
       $.getJSON(' https://jsonplaceholder.typicode.com/users',function(data){
            for(var i=0; data.length>i; i++){
            $('#loadedData').append("</br>imię: "+data[i].name+"</br> Nazwisko: "+ data[i].username+"</br> Adres: "+data[i].email+"</br></br>");
           }
       });
        }
     });
     
    });
 