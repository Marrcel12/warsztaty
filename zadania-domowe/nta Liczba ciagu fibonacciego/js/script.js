'use strict'
var ciag = [1,1,2];
var pozycja = prompt("Podaj pozycje");
var pozycja= parseInt(pozycja);
tworzenieTablicy();
function tworzenieTablicy() {
   
    for (var i = 2; i < pozycja; i++) {
        ciag.push((ciag[i])+(ciag[i-1]));
    }
}
console.log("pozycja " + pozycja+ " ma wartosc: "+ ciag[pozycja-1]);
