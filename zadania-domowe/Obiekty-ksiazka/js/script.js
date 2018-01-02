var books = {
    "book": [
        {
            title: 'Wiedzmin',
            author: 'Sapkowski',
            przeczytana: true,
        },


        {
            title: 'HarryPotter',
            author: 'J.K Rowling',
            przeczytana: false,
        },
        {
            title: 'Lotr',
            author: 'J.R.R Tolkien',
            przeczytana: true,
        },
        {
            title: 'This',
            author: 'Stephen King',
            przeczytana: false,
        }


    ]
};
var flag = "przeczytana";
var iloscprzeczytanych=0;

function Opiszksiążke() {
    books.book.forEach(function (element, index) {
        if (element.przeczytana == false) {
            var flag = "nie przeczytana";
        } else var flag = "przeczytana";

        console.log("Książka ma tytuł " + element.title + " autorem jest " + element.author + "i została " + flag)
    })
}



function iloscPrzeczytanych(){
    books.book.forEach(function(element, index){
        if (element.przeczytana == true) {
            
            iloscprzeczytanych++;
        } 
    })
console.log("Ilosćć przeczytanych książek to "+iloscprzeczytanych);
    Opiszksiążke()
}


iloscPrzeczytanych()















