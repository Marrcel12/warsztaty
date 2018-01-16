'use strict'

var string=prompt("podajCiąg"); //pobranie ciągu
var stringLenght=string.length; //pobranie długości ciągu
var array=[]; // zapis tablicy

for(var i=stringLenght; i>=0; i-- ){
  
    var index=string.charAt(i);
    array.push(index);
    
}
    console.log(array.join());

    