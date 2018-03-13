'use strict';

var imie;
var imieDamskie = "Kaja"
var wiek = 37;

imie = imieDamskie;

console.log(imie);
console.log(wiek);

function wyswietlZmienna(){
//tutaj kod funkcji
    var nazwisko="kowalski";
    console.log(nazwisko);
}

wyswietlZmienna();   
//funkcja anonimowa
var zmienna= function(){
    console.log("Funkcja anonimowa");
}
zmienna();

function mnozenie(parametr1, parametr2, parametr3){
    var wynik = parametr1* parametr2*parametr3;
   return wynik;
}

mnozenie(3, 4, 5);


console.log(wynik);

var liczba1= 5;
var liczba2=10;
var liczba3=10;
mnozenie(liczba1, liczba2, liczba3);






