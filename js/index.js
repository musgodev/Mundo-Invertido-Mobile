function trocarTema() {
    let body = document.querySelector("body");
    let vectorHeader = document.querySelector("#vectorHeader");
    let vectorMain = document.querySelector("#vectorMain");

    body.classList.toggle("light-theme")
    body.classList.toggle("dark-theme")

    if (body.classList("light-theme" === true )) {
        
        vectorHeader.src = "./img/bikers-white.png"
        vectorMain.src = "./img/monster-white.png"
    }

    else {
        vectorHeader.src = "./img/monster-dark.png"
        vectorMain.src = "./img/bikers-dark.png"
    }
}