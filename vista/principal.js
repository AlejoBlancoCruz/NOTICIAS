const selectNoticias = document.getElementById("noticias");

window.onload = function () {
    muestraNoticias();
}

function muestraNoticias() {
    let urlNoticias = "../controlador/controlador_noticias.php"
    fetch(urlNoticias)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            let fragmento = document.createDocumentFragment();
            document.getElementById("noticias").innerHTML = "";
            for (let i in response.articles) {
                let tarjeta  = document.createElement("div");
                tarjeta.setAttribute("class", "tarjetas");
                //Cargando Foto
                let imagen = document.createElement("img");
                imagen.src = response.articles[i].urlToImage;
                // imagen.tag = "Foto:" + FileName;
                imagen.setAttribute("class", "foto");
                tarjeta.appendChild(imagen);

                let titulo = document.createElement("p");
                titulo.innerHTML = "<strong>" + response.articles[i].title + "</strong>" ;
                tarjeta.appendChild(titulo);

                let autor = document.createElement("p");
                autor.innerHTML = response.articles[i].author;
                tarjeta.appendChild(autor);

                elcontenido = document.createElement("p");
                elcontenido.innerHTML = "<i>" + response.articles[i].content + "</i>";
                tarjeta.appendChild(elcontenido);

                /* let contenido = document.createElement("p");
                titulo.innerHTML = "<br>Noticia:</br>" + response.articles[i].content;
                tarjeta.appendChild(contenido); */

                fragmento.appendChild(tarjeta);

            }
            document.getElementById("noticias").appendChild(fragmento);
        })
        
}