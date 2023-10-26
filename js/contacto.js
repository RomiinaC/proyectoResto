const carrusel = document.getElementById("carrusel")
const atras = document.getElementById("atrasCarrusel")
const adelante = document.getElementById("adelanteCarrusel")
const foto = document.querySelector(".imgCarrusel")

const fotosCarrusel = ["../image/Perugia-banner(2).png","../image/good-wine.jpg", "../image/chefs-cooking.jpg"]
let posicionActual = 0;


function pasarFoto() {
    if(posicionActual >= fotosCarrusel.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    
    renderizarImagen();
}


function retrocederFoto() {
    if(posicionActual <= 0) {
        posicionActual = fotosCarrusel.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}



function renderizarImagen () {
    foto.src = fotosCarrusel[posicionActual];
}

adelante.addEventListener("click",pasarFoto)
atras.addEventListener("click",retrocederFoto)

renderizarImagen()