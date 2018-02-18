function obecnyBuy() {
    var a = parseFloat($("#buy").text());
    return a;

}

function obecnySell() {
    var b = parseFloat($("#sell").text());
    return b;

}




$(function () {

    $("input").click(function () {
        var buy = obecnyBuy();
        var sell = obecnySell();
        $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            $("#buy").html(data.PLN.buy);
            $("#sell").html(data.PLN.sell); //wypisanie wartości w pln

            //wypisanie zmian w buy
            if (buy < data.PLN.buy) {
                $("#buy").append(" <i></i>")
                $("i").addClass("fas fa-arrow-up")
                console.log("wzrost buy");
            } else if (buy == data.PLN.buy) {
                $("#buy").append(" <i></i>")
                $("i").addClass("fas fa-minus")
                console.log("brak zmian buy");
            } else if (buy > data.PLN.buy) {
                $("#buy").append(" <i></i>")
                $("i").addClass("fas fa-arrow-down")
                console.log("spadek buy");
            }

            //wypisanie zmian w sell
            if (sell < data.PLN.sell) {
                $("#sell").append(" <i></i>")
                $("i").addClass("fas fa-arrow-up")
            } else if (sell == data.PLN.sell) {
                $("#sell").append(" <i></i>")
                $("i").addClass("fas fa-minus")
                console.log("brak zmian sell");
            } else if (sell > data.PLN.sell) {
                $("#sell").append(" <i></i>")
                $("i").addClass("fas fa-arrow-down")
                console.log("spadek sell");
            }


        })
    })




});
