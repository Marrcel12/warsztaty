'use strict'
var wzrostMateusza= 190;
var WzrostOlgi=160;

if(wzrostMateusza>WzrostOlgi){
    console.log("Olga jest mniejsza")
}


//warunek if else
if(wzrostMateusza>WzrostOlgi){
    console.log("Olga jest mniejsza")
}
else{
    console.log("Olga nie jest niższa")
}
//WARUNEK is else if
if(wzrostMateusza>WzrostOlgi){
    console.log("Olga jest mniejsza")
}
else if(wzrostMateusza==WzrostOlgi){
    console.log("olga jest równa Mateuszowi")
}
else{console.log("Olga jest wyższa")}
//switch
var kolor ="zielony"
switch(kolor){
    case 'czerwony':
        console.log("czerwnoy");
        break;
    case 'zielony':
        console.log("zielony");
        break;
    case 'niebieski':
        console.log("niebieksie")
        break;}



//pętla for

for(var i =1; i<10; i++){
    console.log(i);
    
}
console.log('-------------------');
var it = 10;
var flaga= true;
while(flaga){
    console.log(it);
    if(it<5){
        flaga =false;
    }
    it--;
}
 do {
     console.log('pętla do while')
     it--;
 }
while(it>0);







var a= 0;
while(a<10){
    console.log(++a)
    if(a==5){break}
}













