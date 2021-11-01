// console.log(createDiv());

// function createDiv() {
//     // var newDiv="";
//     for (var i=0; i<4; i++) {
//         var newDiv = document.createElement("div");
//         // newDiv.className = 'img-div';
//         // newDiv += "<div>";
//         newDiv.innerHTML ='<img src="../img/new_product3.webp">' + "<br>";
        
//         // newDiv +="</div?";
//         // newDiv+='<br>';
       
//     }  
//     return (document.body.appendChild(newDiv));
//     // return (newDiv);
//   }
console.log(createDiv());
function createDiv() {
    var div="";
    for (var i; i<4; i++) {
        div = "<div>";
        div.innerHTML += '<img src="../img/new_product3.webp">';
        div += "</div><br>";
    }
    return(div);
}








