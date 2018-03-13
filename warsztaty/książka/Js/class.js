'use strict'
class ogloszenia{
    constructor(tytul, cena, opis, kontakt, kategoria){
        this.tytul=tytul;
        this.cena=cena;
        this.opis=opis;
        this.kontakt=kontakt;
        this.kategoria=kategoria;
    }
 zmnienKontakt(tel){
     this.kontakt=tel;
 }
    wyswietlTytul(){
       console.log(this.tytul); 
    }
}
var ogloszenie1 = new ogloszenia("Mieszkanie na sprzedaż",300000,"dwa pokoje z kuchnią, bez dzikich lokatarów","22233322","nieruchomość");

var ogloszenie2 = new ogloszenia("Sprzedam Opla",40000,"3 letni bezwypadkowy pierwszy właściciel","22233322","motoryzajca");
console.log(ogloszenie1);
console.log(ogloszenie2);
ogloszenie1.zmnienKontakt("888888");
console.log(ogloszenie1);