var menuButton = document.getElementById("menu-button");
    menuButton.setAttribute("onclick", "showFirstMenu()");

function showFirstMenu() {
    var menuTop = document.getElementById("menu-top");

    if (menuTop.style.height == "0px" || menuTop.style.height == "") {
        menuTop.style.height = "auto";
    } else {
        menuTop.style.height = "0px";
    }
}

var menuButton2 = document.getElementById("menu-button2");
    menuButton2.setAttribute("onclick", "showSecondMenu()");

function showSecondMenu() {
    var menu = document.getElementById("menu");

    if (menu.style.height == "0px" || menu.style.height == "") {
        menu.style.height = "auto";
    } else {
        menu.style.height = "0px";
    }
}