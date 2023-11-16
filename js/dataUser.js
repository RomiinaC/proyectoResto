const inputUserId = document.getElementById("userId")
const inputPassw = document.getElementById("password")

const acceso = document.getElementById("acceso")
const bienvenida = document.getElementById("bienvenidaUser")
const formAcceso = document.getElementById("formAcceso")

const btnEnviar = document.getElementById("btnEnviar")
// const btnCerrar = document.getElementById("cerrarSesion")

let userRegistrado = false
let userLogueado = false

function validarEntrada(input) {
    const entrada = input.value
    for (let i = 0; i < userJson.length; i++) {
        if ( userJson[i].userId === entrada) {
            input.classList.remove("inputNoValido")  
            return true  
        }
    input.classList.add("inputNoValido")
        
    }}

function validarPass(input) {
    const entrada = input.value
    for (let i = 0; i < userJson.length; i++) {
        if ( userJson[i].password === entrada) {
            input.classList.remove("inputNoValido")  
            return true  
        }
    input.classList.add("inputNoValido")
        
    }}

function handlerValidarIngreso() {  
    
    let userOk = validarEntrada(inputUserId)
    let passOk = validarPass(inputPassw)
    
    if ( userOk && passOk ) {
        localStorage.setItem("userRegistrado", true)
        userRegistrado= true
}
    return userRegistrado
}

// function validarLogin() {  
    
//     var asd = localStorage.getItem("userRegistrado");

//     return asd
// }

// function handlerCerrarSesion() {
    
//     localStorage.removeItem("userRegistrado")
//     formAcceso.reset()
    
//     btnCerrar.className = "oculto"
    
//     window.location.href = "../index.html"
//     return false

// }

function mostrar(elemento, flag) {
    if ( elemento !== null && elemento !== undefined){
        elemento.style.display = flag ? "block" : "none" 
    }
    
}

// userRegistrado = handlerValidarIngreso();
userLogueado = validarLogin();

if (userLogueado ) {
    btnCerrar.className = "visible"
    mostrar(bienvenida , true)
    mostrar(acceso, false)
  
    // mostrar(formReserva, true)
    // mostrar ( form , false)
    // mostrar( text, false)
     
     
    //  const name = document.createElement("p")
    //  if (userJson.nombre !== undefined){
    //      name.innerText = userJson.nombre
    //     bienvenida.appendChild(name)
//     // }
     } else {
         mostrar(acceso, true)
         mostrar(bienvenida , false)
  }

  