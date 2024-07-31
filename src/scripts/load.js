const skeletonScreen = document.querySelector("#skeleton-screen")
const landingPage = document.querySelector("#landing-page")
window.addEventListener("DOMContentLoaded", function(){
    landingPage.classList.remove("hidden")
    skeletonScreen.classList.add("hidden")
})