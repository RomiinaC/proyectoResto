const acceso = document.getElementById("acceso")
const bienvenida = document.getElementById("bienvenidaUser")
const formAcceso = document.getElementById("formAcceso")

const btnEnviar = document.getElementById("btnEnviar")

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



// userRegistrado = handlerValidarIngreso();
userLogueado = validarLogin();

if (userLogueado ) {
    btnCerrar.className = "visible"
    mostrar(bienvenida , true)
    mostrar(acceso, false)
    } else {
         mostrar(acceso, true)
         mostrar(bienvenida , false)
}

  