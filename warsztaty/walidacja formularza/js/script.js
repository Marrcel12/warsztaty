function walidujFormularz(event) {
    var wiadomosc= document.getElementById('wiadomosc');
    wiadomosc.innerHTML='';
    if (document.getElementById("name").value.trim().lenght)<1 {
        var msgImie = document.createElement('li').innerHTML="wpisz imie"
        wiadomosc.appendChild(msgImie);
        event.preventDefault();
    }
}
document.getElementById('wyslij').addEventListener('click', walidujFormularz);
check // chekboxy 