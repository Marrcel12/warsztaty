//Obiekt ksiązka
class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    //funkcja opisująca ksiązki
    OpiszKsiazke() {
        if (this.przeczytana == true) {
            console.log("Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i została przeczytana");
        } else
            console.log("Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i została nie przeczytana");
    }
}
//dodawanie ksiazek do klasy
var wiedzmin = new Ksiazka('Wiedzmin', 'Sapkowski', true);
var HarryPotter = new Ksiazka('HarryPotter', 'J.K Rowling', 'false')
var Lotr = new Ksiazka('Lotr', 'J.R.R Tolkien', 'false');
var This = new Ksiazka('This', 'Stephen King', false);
//Tablica z obiektami ksiązki
var books = [wiedzmin, HarryPotter, Lotr, This];
//ilosc przeczytanych ksiązek
var iloscKsiazek = 0;

function iloscPrzeczytanych(b) {
    for (i = 0; i < b.length; i++) {
        b[i].OpiszKsiazke()
        if (b[i].przeczytana == true) {
            iloscKsiazek++
        }
    }
    console.log("Ilość przeczytanych ksiązek " + iloscKsiazek);
}
iloscPrzeczytanych(books);