'use strict'
var iloscOsoba1= 3500;
var iloscOsoba2=5000;
var iloscOsoba3=7500;
var lloscOsoba4=2500;

var sumaKasy= iloscOsoba1 + iloscOsoba2 + iloscOsoba3;
console.log("w głównym programie suma kasy: "+ sumaKasy);

function policzSumaKasy(iloscOsoba1, iloscOsoba2, iloscOsoba3){
    var sumaKasy= 500;
    console.log('W funkcji suma kasy '+sumaKasy)
}
policzSumaKasy(0, 0, 0)