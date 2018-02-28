 function literWStringu(a, j) {
     var licznik=0;
     for (var i = 0; i < a.length; i++) {
         if(a.charAt(i)==j||j.toUpperCase()==a.charAt(i)){
             licznik++
         }
     }
    return licznik;
 }

console.log(literWStringu("Szkoła Programowania Akademia 108","a"))