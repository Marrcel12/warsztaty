 $.ajax({
     url: "http://echo.jsontest.com/userId/108/userName/Akademia108/ userURL/akademia108.pl",
     success: function (response) {
         console.log(response.userName)}
     ,
     error: function (msg) {
         console.log(msg.statusText);
     }
 });
