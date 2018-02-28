 function literWStringu(a, j) {
     var licznik=0;
     for (var i = 0; i < a.length; i++) {
<<<<<<< Updated upstream
         if(a.charAt(i)==j||j.toUpperCase()==a.charAt(i)){
=======
         if(a.charAt(i)==j||j.toUpperCase==a.charAt(i)){
>>>>>>> Stashed changes
             licznik++
         }
     }
    return licznik;
 }


alert(literWStringu(prompt("Podaj napis"),prompt("Podaj literę")));