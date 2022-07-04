const burgerOpenElement = document.getElementById("burguerOpen");
const burgerClosedElement = document.getElementById("burguerClosed");
let isMenuOpened = false;

function showMenuOn(){
    burgerOpenElement.style.display = "none";
    burgerClosedElement.style.display = "block";
    isMenuOpened = true;   
}

function showMenuOff(){
    burgerOpenElement.style.display = "block";
    burgerClosedElement.style.display = "none";
    isMenuOpened = false;
}

// Listener to handle with resize and hamburger menu button
window.addEventListener('resize', () => {
    const currentScreenWidth = document.body.clientWidth;
    const isBiggerScreen = currentScreenWidth > 997;
    const isTabletScreen = currentScreenWidth <= 997;
    
    if (isBiggerScreen) {
        isMenuOpened = false;
        burgerOpenElement.style.display = "none";
        burgerClosedElement.style.display = "none";
    }
    
    if (isTabletScreen) {
        if (isMenuOpened) {
            burgerOpenElement.style.display = "none";
            burgerClosedElement.style.display = "block";    
            return;
        } else {
            burgerOpenElement.style.display = "block";
            burgerClosedElement.style.display = "none";
        }
    }
});