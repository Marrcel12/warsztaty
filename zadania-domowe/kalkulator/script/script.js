function zapisz(x){
    document.getElementById("ekran").value+=x;
}

function Del(){
    document.getElementById("ekran").value="";
}
function oblicz(){
   var x= document.getElementById("ekran").value;
   document.getElementById("ekran").value=eval(x);
}