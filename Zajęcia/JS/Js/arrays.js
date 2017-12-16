'use strict'
var imiona = ['Monika','Krystian', 'Łukasz'];
console.log(imiona);
imiona[2]="Wojtek";
imiona[3]="Alfred";
console.log(imiona);
imiona.push('Milosz');
console.log(imiona);
imiona.pop();
var ostatniElement= imiona.pop();

console.log(imiona);
console.log(ostatniElement);

imiona.unshift('Robert');
console.log(imiona);

console.log(imiona.join("-"));

var liczby = [1,2,3,4,6,7,8]
liczby.sort();

//Obiekty 

var osoba ={
    imie: 'Marcel',
    wzrost: 190,
    przedstawSie: function(){
        console.log("Mam na imię "+ this.imie +", mam"+this.wzrost+"cm")
    }
}
console.log(osoba.imie);
osoba.przedstawSie();
osoba.nazwisko ='Kowalski';


//Klasy
class Uzytkownik{
    construct(imie, nazwisko){
        this.imie= imie;
        this.nazwisko= nazwisko;
        
    }
    wyswietlInfo(){
        console.log("Imię: "+ this.imie + ", Nazwisko:"+ this.nazwisko);S
    }
}
var Krystian = new Uzytkownik('Krystian', 'Dziopa');
Krystian.wyswietlInfo();
var Wojtek = new Uzytkownik('Wojtek', "Potocki");

Wojtek.wyswietlInfo();




























