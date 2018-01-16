

function pobierzWalute(a)
{
var a=$("#waluta").val();
 console.log(a);
    return a;
}
function pobierzKwote(kwota){
var a=$("#pole").val();
    console.log(a);
    return a;
}


$(function(){
    
    $.getJSON('https://blockchain.info/pl/ticker', function(data){
        $.each(data,function(key,value){
            $("#waluta").append("<option value="+key+">"+key+"</option>");
            
        });
    });
});


    $("#waluta").change(function(){
       var waluta =pobierzWalute();
        var kwota =pobierzKwote();
        $("#wynikWaluta").text("Wybrałeś "+waluta);
        $.getJSON(' https://blockchain.info/tobtc?currency='+waluta+'&value='+kwota, function(data){
       $("#wynikKwota").text(" ---->  To jest : "+data+" BTC");  
           waluta=0;
           
  });
    });








    $("#pole").keydown(function(){
       var waluta =pobierzWalute();
       var kwota =pobierzKwote();
       $.getJSON(' https://blockchain.info/tobtc?currency='+waluta+'&value='+kwota, function(data){
       $("#wynikKwota").text(" ---->  To jest : "+data+" BTC");  
           waluta=0;
           
  });
        
});
    
    
    
    
    
    
    