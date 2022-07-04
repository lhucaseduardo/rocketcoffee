const burgerOpenElement = document.getElementById("burguerOpen");
const burgerClosedElement = document.getElementById("burguerClosed");
const menuMobile = document.getElementById("menuList");
const websiteContent = document.getElementById("siteContent")
let isMenuOpened = false;

function showMenuOn(){
    burgerOpenElement.style.display = "none";
    burgerClosedElement.style.display = "block";
    menuMobile.style.display = "flex"
    websiteContent.style.display = "none"
    isMenuOpened = true;   
}

function showMenuOff(){
    burgerOpenElement.style.display = "block";
    burgerClosedElement.style.display = "none";
    menuMobile.style.display = "none"
    websiteContent.style.display = "block"
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
        websiteContent.style.display = "block"
    }
    
    if (isTabletScreen) {
        if (isMenuOpened) {
            burgerOpenElement.style.display = "none";
            burgerClosedElement.style.display = "block";  
            menuMobile.style.display = "flex"  
            websiteContent.style.display = "none"
            return;
        } else {
            burgerOpenElement.style.display = "block";
            burgerClosedElement.style.display = "none";
            menuMobile.style.display = "none"  
            websiteContent.style.display = "block"
        }
    }
});