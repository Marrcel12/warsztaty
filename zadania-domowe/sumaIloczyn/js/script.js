'use strict'
var tablica = [1, 2, 3, 4, 5, 6 ];
var sum = tablica[0];
var il=tablica[0];

SumIl();

function SumIl() {

    for (var i = 1; i < tablica.length; i++) {

      sum+=tablica[i];
      il*=tablica[i];
    }

}


console.log("wynik dodawania "+ sum);
console.log("wynik monżenia "+ il);