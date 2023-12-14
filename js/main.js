//const URL = "https://romiinac.pythonanywhere.com"

const URL ="http://127.0.0.1:5000"
const ADMINPRINCIPAL = "perugiaresto@gmail.com"

let ADMIN = []
async function adminOk() {
    const admins = []
    try {
      const response = await fetch(`${URL}/api/admin/empleados`)
      if (response.ok) {
        const data = await response.json()
        if (data) {
            for (let i = 0 ; i < data.empleados.length ; i++){
               if (data.empleados[i].puesto === "ADM") {
                     admins.push(data.empleados[i].email)
                    
                } 
            }
            ADMIN = admins
            console.log(ADMIN)
        return ADMIN
        }
      
      } else {
        return "Error al obtener lista de empleados"
      }

    } catch (error) {
      console.error('Error al obtener lista de empleados', error)
      return null
    }
}
adminOk()


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
    const emailUser = localStorage.getItem("access")

    if(ADMIN.includes(emailUser)){
        document.getElementById("accessAdmin").classList.add("oculto");
    }
    
}

function handlerCerrarSesion() {

    localStorage.removeItem("userRegistrado")
    localStorage.removeItem("access")
    localStorage.removeItem("accessPass")

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

