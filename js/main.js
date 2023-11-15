const nav = document.getElementById("navbar")
const abrir = document.getElementById("menu-abrir")
const cerrar = document.getElementById("menu-cerrar")
// const btnCerrar = document.getElementById("cerrarSesion")

abrir.addEventListener("click",()=> {
    nav.classList.add("visible")
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})

// btnCerrar.addEventListener("click", () => {
//     localStorage.clear()
//     btnCerrar.className = "oculto"
//     window.location.href = "../index.html"
// })


function validarLogin() {  
    
   return localStorage.getItem("userRegistrado");

}

// if (validarLogin) {
//     btnCerrar.className = "visible"}

// function handlerCerrarSesion() {

//     localStorage.removeItem("userRegistrado")
    
//     btnCerrar.className = "oculto"
    
//     window.location.href = "../index.html"
//     return false
//     }