function swapColorButton(color){
    if(color == 'dark'){
        swapStyleSheet('css/main-dark.css');
        setNewSearch('dark');
    }
    else if(color == 'light'){
        swapStyleSheet('css/main-light.css');
        setNewSearch('light');
    }
}
function swapStyleSheet(sheet){
    document.getElementById('stylesheet').setAttribute('href', sheet);
}
function setNewSearch(search){
    window.location.replace(window.location.pathname + "?" + search);

}
function readPath(){
    var currentPathArray = window.location.search.split('?');
    if(currentPathArray[1] == "dark"){
        swapStyleSheet('/public/css/main-dark.css');
    }
    else{
        swapStyleSheet('/public/css/main-light.css');
    }
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { scrollFunction() };
var navbar;
var sticky;

// Get the navbar
navbar = document.getElementById("nav-placeholder");

// Get the offset position of the navbar
sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
    if (window.pageYOffset >= sticky && window.screen.width > 800) {
        navbar.classList.add("sticky")
        document.getElementById("topBtn").style.display = "block";
    } else {
        navbar.classList.remove("sticky");
        document.getElementById("topBtn").style.display = "none";
    }
}