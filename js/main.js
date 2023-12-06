const URL = "https://romiinac.pythonanywhere.com/"
const ADMIN = "perugiaresto@gmail.com"

const nav = document.getElementById("navbar")
const abrir = document.getElementById("menu-abrir")
const cerrar = document.getElementById("menu-cerrar")
const btnCerrar = document.getElementById("cerrarSesion")
const inputUserId = document.getElementById("userId")
const inputPassw = document.getElementById("password")
const perfil = document.getElementById("link-perfil")
const linksAcceso = document.getElementById("links-access")

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
    btnCerrar.className = "visible"
    linksAcceso.className = "oculto"
    perfil.className = "visible"
    const emailUser = sessionStorage.getItem("access")
    console.log(emailUser)
    if(emailUser !== ADMIN){
        document.getElementById("accessAdmin").classList.add("oculto");
    }
    
}

function handlerCerrarSesion() {

    localStorage.removeItem("userRegistrado")
    
    btnCerrar.className= "oculto"
    perfil.className = "oculto"
    linksAcceso.className = "visible"
    window.location.href = "../index.html"
    return false
}
 function mostrar(elemento, flag) {
    if ( elemento !== null && elemento !== undefined){
        elemento.style.display = flag ? "block" : "none" 
    }    
}

