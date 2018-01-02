'use strict'
 var json = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};
var pracownicy = json.pracownicy;
pracownicy.forEach(function(element, index){
    console.log(element);
    console.log(index);
    
});