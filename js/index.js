function trocarTema() {
    let body = document.querySelector("body");
    let theme = body.classList[0];
    let vectorHeader = document.querySelector("#vectorHeader");
    let vectorMain = document.querySelector("#vectorMain");

    if (theme === "dark-theme") {
        
        vectorHeader.src = "./img/bikers-white.png";
        vectorMain.src = "./img/monster-white.png";
    }

    else {
        vectorHeader.src = "./img/monster-dark.png";
        vectorMain.src = "./img/bikers-dark.png";
    }

    body.classList.toggle("light-theme")
    body.classList.toggle("dark-theme")
}