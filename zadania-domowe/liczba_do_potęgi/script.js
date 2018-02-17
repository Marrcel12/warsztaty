function potega(a, b) {
    a=parseInt(a);
    b=parseInt(b);
    var potega = a;
    if (b != 0) {
        for (i = 1; i < b; i++) {
            potega = potega * a
        }

        return alert("potęga z " + a + " do " + b + " to " + potega);
    }
    return alert("potęga 0 to 1");
}
potega(prompt("podaj podstawę potęgi"), prompt("podaj wykładnik potęgi"));
