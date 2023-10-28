const inputUserId = document.getElementsByClassName("userId")
const inputPassw = document.getElementsByClassName("password")
const formReserva = document.getElementById("formInfoReserva")
const form = document.getElementById("formReserva")
const formAcceso = document.getElementById("formAcceso")
const text = document.getElementById("bienvenidaRes")
const saludo = document.getElementById("bienvenidaAcceso")
const acceso = document.getElementById("acceso")
const bienvenida = document.getElementById("bienvenidaUser")
const btnCerrar = document.getElementById("cerrarSesion")


function handlerValidarIngreso () {
    const id = inputUserId[0].value
    const pass = inputPassw[0].value
    let userReg = false
    
    for (let i = 0; i < userJson.length; i++) {
        if ( userJson[i].userId === id && userJson[i].password === pass ) {
            userReg= true
            break
        } else {
             userReg = false
        }
    }
    return userReg
}

function mostrar(elemento, flag) {
    if ( elemento !== null && elemento !== undefined){
        elemento.style.display = flag ? "block" : "none"
    }
    
}

const userRegistrado = handlerValidarIngreso

if (userRegistrado) {
    btnCerrar.className = "visible"
    mostrar(formReserva, true)
    mostrar ( form , false)
    mostrar( text, false)
    mostrar ( saludo , true)
    mostrar ( acceso, false)
    const name = document.createElement("p")
    if (userJson.nombre !== undefined){
        name.innerText = userJson.nombre
        bienvenida.appendChild(name)
    }
    

} else {
    mostrar(form, true)
    mostrar(acceso, true)
}

