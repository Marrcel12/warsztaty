'use strict'
function alarm(event){
    event.preventDefault();//zapobiegamy domyślnej akcji
    console.log("kliknięto w link");
}


var seconndLink= document.getElementsByTagName("a")[1];
seconndLink.onclick =alarm;