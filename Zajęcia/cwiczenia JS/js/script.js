var przyciski = document.getElementsByClassName("btn");
console.log(przyciski[1]);
for (var i = 0; i < przyciski.length; i++) {
    
    przyciski[i].addEventListener("click", function () {
        if(this.innerText!="kliknięty"){
        console.log(this.innerHTML);
        this.innerText="kliknięty";
        }
        else console.log("jest już klinkięty")
        
        
    });
}

