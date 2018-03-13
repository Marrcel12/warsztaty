var pierwszyDiv =document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.children[2+1]);
console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastElementChild);
console.log("-----------------");
var pierwszyDivChild=pierwszyDiv.children[1];

var childNodesDiva =pierwszyDiv.childNodes;

childNodesDiva.forEach(function(element)
                        {
    if(element.nodeType==1){
        console.log(element);
    }
});

