const btnmodal = document.querySelector("#btn-open-modal")
const closemodal = document.querySelector("#btn-close-modal")
const modal = document.querySelector("#modal")
const boxout = document.querySelector("#out")
function openModal(){
    modal.classList.add("flex-1")
}
function closeModal(){
    modal.classList.remove("flex-1")
}
btnmodal.addEventListener("click", openModal)
boxout.addEventListener("click", closeModal)
closemodal.addEventListener("click", closeModal)