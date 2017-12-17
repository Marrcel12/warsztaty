    var jsonOsoby = {
        "Osoby": [
            {
                imie: 'Krystian',
                nazwisko: "Dziopa",
                wzrost: 180,
                zainteresowania: [
                    {
                        nazwa: "gotowanie"
                    },
                    {
                        nazwa: "programowanie"
                    }
                                ]
            },


            {
                imie: 'Adrian',
                nazwisko: "Kowalski",
                wzrost: 180,
                zainteresowania: [
                    {
                        nazwa: "pilkaNozna"
                }
                                ]
            }

    ]
    }




    jsonOsoby.Osoby[0].zainteresowania.forEach(function(element, index) {
        console.log(element.nazwa);
        });

console.log(jsonOsoby.Osoby[1].imie);

jsonOsoby.Osoby[1].zainteresowania.forEach(function(element, index){console.log(element.nazwa);});
jsonOsoby.Osoby.forEach(function(element, index){console.log(element.imie);});