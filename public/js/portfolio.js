let bouton6 = document.querySelector("#portfoliobutton");
var portBodyColor = document.getElementsByClassName("dimension");
var portTitleColor = document.getElementsByTagName("h1");
var portTextColor = document.getElementsByClassName("horde");
bouton6.addEventListener("click", () =>{
    for(var i = 0; i < portBodyColor.length; i++){
        portBodyColor[i].style.backgroundColor = "black";
    }for(var i = 0; i < portTitleColor.length; i++){
        portTitleColor[i].style.color ="white";
    }for(var i = 0; i < portTextColor.length; i++){
        portTextColor[i].style.color = "white";
    }
})