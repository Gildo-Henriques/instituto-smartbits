const btnMais= document.querySelector("#btn-mais-conteudo")
const content = document.querySelector("#conteudo")
function mostrarMaisConteudo(){
    content.classList.toggle("h-0")
    console.log("mostrando")
}
btnMais.addEventListener("click", mostrarMaisConteudo)