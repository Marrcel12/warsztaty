var tab =[0,1,2,3,4,5];
var wynik =0;
SumaKwadratow();
function SumaKwadratow(){
    for(i=0; i<tab.length; i++){
        wynik=tab[i]*tab[i]+wynik;
    }
}
console.log(wynik);