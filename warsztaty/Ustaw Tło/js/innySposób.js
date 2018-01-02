"use strict"
var par1 = document.getElementById("par1");
var par2 = document.getElementById("par2");
var parUst = document.getElementById("parUst");
var e = false;

function color() {
    par1.style.background = "red"
    par2.style.background = "yellow"
    e = true;
    parUst.innerText = "kliknij aby wyłączyć"

}

function colorOff() {
    par1.style.background = "";
    par2.style.background = "";
    e = false;
    parUst.innerText = "kliknij aby włączyć";


}

function check() {
    console.log(e);
    if (e == true) {
        colorOff();
    } else if (e == false) {
        color();
    }
}

parUst.onclick = check;


