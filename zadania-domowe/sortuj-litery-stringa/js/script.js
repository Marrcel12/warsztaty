console.log("aaa");
var string= prompt("podaj napis");
var array=[];
var stringLenght=string.length; //pobranie długości ciągu
var array=[]; // zapis tablicy

for(var i=0; i<=stringLenght; i++ ){
  
    var index=string.charAt(i);
    array.push(index);
   
}
console.log(array.sort().join());