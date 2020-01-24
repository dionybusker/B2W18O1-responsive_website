var menuButton = document.getElementById("menu-button");
    menuButton.setAttribute("onclick", "showMenu()");

function showMenu() {
    var menuTop = document.getElementById("menu-top");

    if (menuTop.style.height == "0px" || menuTop.style.height == "") {
        menuTop.style.height = "auto";
    } else {
        menuTop.style.height = "0px";
    }
}