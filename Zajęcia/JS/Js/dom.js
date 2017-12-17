'use strict';
//console.log(document);
//console.log(document.documentElement);
//console.log(document.body);
//console.log(document.head);
//console.log(window.innerHeight);
//console.log(window.outerWidth);
var parFirst = document.getElementById('parFirst');
console.log(parFirst);
var link= document.getElementsByClassName('superlink');
console.log(link);
var linkipoTagu = document.getElementsByTagName('a');
console.log(linkipoTagu);
var divPoId = document.querySelector("#parSecond");
console.log(divPoId);
var linkiPoSelektorze = document.querySelectorAll('.link');
console.log(linkiPoSelektorze);

linkiPoSelektorze.forEach(function(link){
console.log(link);
});

console.log("--------------------------")
for(var i=0; i<linkiPoSelektorze.length; i++){
    console.log(linkiPoSelektorze[i]);
}












