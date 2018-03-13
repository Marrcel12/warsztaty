'use strict'
var iloscOsoba1 = 3500;
var iloscOsoba2 = 5000;
var iloscOsoba3 = 7500;
var lloscOsoba4 = 2500;

var sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;
console.log("w głównym programie suma kasy: "+ sumaKasy);

function policzSumaKasy(iloscOsoba1, iloscOsoba2, iloscOsoba3){
//    var sumaKasy = 500;
    var suma= iloscOsoba1+ iloscOsoba2+ iloscOsoba3;
    var sumaKasy =iloscOsoba1 + iloscOsoba2;
    console.log('W funkcji suma kasy '+sumaKasy);
    console.log('W funkcji suma kasy '+suma);
    
    return suma;
}
console.log(policzSumaKasy(10, 20, 30));
console.log("w głównym programie suma kasy: "+ sumaKasy);
console.log("w głównym programie suma kasy: "+ suma);