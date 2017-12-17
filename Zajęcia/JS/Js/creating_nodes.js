'use strict'
var istniejacyWezel= document.getElementById('parFirst').children[2];

console.log(istniejacyWezel);

var newElement=document.createElement('p');//twórz nowy element 

var newElementContent=document.createTextNode('to jest nowy paar');//tworzenie nowego tekstu do paragrafu

newElement.appendChild(newElementContent);

console.log(newElement);// dodaj tekst do elementu 

istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);

console.log("----------------");
var wszystkieLinki=document.getElementsByTagName("a");
console.log(wszystkieLinki);


console.log(br);

for(var i=0; i<wszystkieLinki.length; i++){
    var br=document.createElement("br");
    wszystkieLinki[i].parentElement.insertBefore(br,wszystkieLinki[i].nextSibling);
    wszystkieLinki[i].removeAttribute("class");
    
}


wszystkieLinki.forEach(function(element){
    var br=document.createElement("br");
    element.re
});



    




