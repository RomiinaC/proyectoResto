const carrusel = document.getElementById("carrusel")
const atras = document.getElementById("atrasCarrusel")
const adelante = document.getElementById("adelanteCarrusel")
const foto = document.querySelector(".imgCarrusel")

const fotosCarrusel = ["../image/Perugia-banner(2).png","../image/good-wine.jpg", "../image/chefs-cooking.jpg"]
let posicionActual = 0

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

function completeField(input) {
    let campo = input.value.trim()
    if ( campo.length <= 0) {
        input.classList.add("inputNoValido")
    } else {
        input.classList.remove("inputNoValido")
    }
}

function validarEntrada(input) {
    const regex = /[a-z0-9._%\-]+@[a-z]+\.[a-z][a-z]+$/i  
    const entrada = input.value
    
    validez = regex.test(entrada)

    if (validez) {
        input.classList.remove("inputNoValido") 
        return true
    } else {
        input.classList.add("inputNoValido") 
        return false
    }
}
