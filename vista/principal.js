const selectNoticias = document.getElementById("noticias");

window.onload = function() {
muestraNoticias();
}

function muestraNoticias() {
let urlNoticias = "../controlador/controlador_noticias.php"
fetch(urlNoticias)
.then(res => res.json())
.then(response => {
console.log(response)
let fragmento = document.createDocumentFragment()
for (let i in response.articles){
let opcion = document.createElement("div")
opcion.innerHTML = response.articles[i].title
fragmento.appendChild(opcion)
}
selectNoticias.appendChild(fragmento);
})
}