const inputUserId = document.getElementById("userIdRes")
const inputPassw = document.getElementById("passwRes")
const formReserva = document.getElementById("formInfoReserva")
const form = document.getElementById("formReserva")


function handlerValidarIngreso () {
    const id = inputUserId.value
    const pass = inputPassw.value
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
    elemento.style.display = flag ? "block" : "none"
}

const userRegistrado = handlerValidarIngreso

if (userRegistrado) {
    mostrar(formReserva, true)
    mostrar ( form , false)
} 