
function removeDiv(btnState){
    var mainDiv = document.getElementById("main");
    var footerDiv = document.getElementById("footer");
    var toggleButton = document.getElementById("nav-checkbox");
    var menuLinks = document.getElementById("menu-links");
    var headerLogo = document.getElementById("header-logo");
    var header = document.getElementById("header");
    if(toggleButton.checked== false){ 
        mainDiv.style.display="none";
        footerDiv.style.display ="none";
        headerLogo.style.display ="none";
        menuLinks.style.display = "block";
        header.style.padding = 0;
    }
    else{
        mainDiv.style.display="block";
        footerDiv.style.display ="block";
        headerLogo.style.display ="block";
        menuLinks.style.display = "none";
        header.style.padding = "20px";
    }
    
}