const nav = document.getElementById("navbar")
const abrir = document.getElementById("menu-abrir")
const cerrar = document.getElementById("menu-cerrar")
const btnCerrar = document.getElementById("cerrarSesion")
const inputUserId = document.getElementById("userId")
const inputPassw = document.getElementById("password")

let userRegistrado = false
let userLogueado = false

abrir.addEventListener("click",()=> {
    nav.classList.add("visible")
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})

function validarLogin() {  
    
   return localStorage.getItem("userRegistrado");

}
userLogueado = validarLogin()
if (userLogueado) {
     btnCerrar.className = "visible"}

function handlerCerrarSesion() {

     localStorage.removeItem("userRegistrado")
    
     btnCerrar.className= "oculto"
    
     window.location.href = "../index.html"
     return false
}
