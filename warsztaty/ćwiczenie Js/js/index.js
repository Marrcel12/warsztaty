$(document).ready(function () {
    $('button').click(function () {
        var szukana = $("input").val();

        var url = "https://www.googleapis.com/books/v1/volumes?q=" + szukana

        $.getJSON(url, function (data) {

            $("#items").append("Ilość książęk " + szukana + " " + data.totalItems + "<br/> <br/>");

            data.items.forEach(function (element, index) {

                $("#items").append("Nr" + index + ": " + element.volumeInfo.title + "<br/> <br/> ");
                $("#items").append("Opis: " + element.volumeInfo.description + "<br/> <br/>");
                $("#items").append("obrazek: </br><img src=" + element.volumeInfo.imageLinks.smallThumbnail + "><br/>")
                if (element.saleInfo.saleability == "NOT_FOR_SALE") {
                    $("#items").append("Not sale <br/> <br/>");
                } else
                    $("#items").append("Cena: " + element.saleInfo.retailPrice.amount + "<br/> <br/>");

                if (element.saleInfo.saleability == "NOT_FOR_SALE") {
                    $("#items").append("Not sale <br/> <br/>")
                }
                $("#items").append("Kup: <a href=" + element.saleInfo.buyLink+">Kup</a></br> </br>")

            });
        })
    });
});
