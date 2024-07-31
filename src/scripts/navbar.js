const navbar = document.querySelector("#navbar")
const btnOpenNavbar = document.querySelector("#btn-open-navbar")
const btnCloseNavbar = document.querySelector("#btn-close-navbar")
function openNavbar(){
    navbar.classList.remove("-right-full")
    navbar.classList.add("right-0")
    console.log("open")
}
function closeNavbar(){
    navbar.classList.remove("right-0")
    navbar.classList.add("-right-full")
}
btnOpenNavbar.addEventListener("click", openNavbar)
btnCloseNavbar.addEventListener("click", closeNavbar)