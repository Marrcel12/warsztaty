'use strict'
function alarm(event){
    event.preventDefault();//zapobiegamy domyślnej akcji
    console.log("kliknięto w link");
    console.log(event.type);
}


var seconndLink= document.getElementsByTagName("a")[1];
seconndLink.onclick =alarm;

var thirdlink = document.getElementsByTagName("a")[3];
thirdlink.addEventListener('click', alarm);


function kilkheader(){
    console.log("kliknąłeś header");
}
document.getElementsByTagName("header")[0].onclick=kilkheader;








function kilkh1(){
    console.log("kliknąłeś H1");
}
document.getElementById