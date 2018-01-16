 $(function () {

     $('#button').click(function () {
         $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
              $('#lista-user').text('');
            data.forEach(function(element,index){
                 $('#lista-user').append('<br/>'+element.username);
             });
             
         });
     });    
 });
