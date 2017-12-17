'use strict';
var mainHeader= document.getElementById("main-header");
mainHeader.innerHTML ="treść nagłówka";
var p= document.querySelector('header').children[0];
console.log(p);

var link = document.getElementsByClassName("link")[0];
link.href = "http;//google.pl;
link.className += " nowa-klasa";
mainHeader.style.color= '#11aa33';