

function pobierzWalute(a)
{
var a=$("#waluta").val();
 console.log(a);
    return a;
}
function pobierzKwote(kwota){
var a=$(pole).val();
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
   
    $("#button").click(function(){
       var waluta =pobierzWalute();
       var kwota =pobierzKwote();
      console.log(waluta);
        console.log(kwota);
       $.getJSON(' https://blockchain.info/tobtc?currency='+waluta+'&value='+kwota, function(data){
       $("#wynik").append("To jest : "+data+"BTC");       
  });
    
});
    
    
    
    
    
    
    