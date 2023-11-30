
const acceso = document.getElementById("acceso")
const bienvenida = document.getElementById("bienvenidaUser")
const formAcceso = document.getElementById("formAcceso")

const userName = document.getElementById("userName")
const userLastName = document.getElementById("userLastName")
const passNewUser = document.getElementById("passwordUserNew")

const btnEnviar = document.getElementById("btnEnviar")


// Función de validación de dirección de correo electrónico
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

function validarPass(input) {
    const entrada = input.value
    if (entrada.length > 0 && entrada.length <= 12){
        input.classList.remove("inputNoValido")
        return true
    } else {
        input.classList.add("inputNoValido")  
        return false
    }
}


async function handlerValidarIngreso() {      
    let userOk = validarEntrada(inputUserId)
    let passOk = validarPass(inputPassw)  
    let userId = inputUserId.value
    let userPassw = inputPassw.value
    
    if ( userOk && passOk ) {
        try {
            const response = await fetch(`http://127.0.0.1:5000/login/${userId}/${userPassw}`)
            const data = await response.json()
            if (data.datos) {
                localStorage.setItem("userRegistrado", true)
                userRegistrado = true
            } 
        } catch (error) {
            console.error('Error al obtener cliente:', error)
    }}
    return userRegistrado
}

function completeField(input) {
    let campo = input.value.trim()
    if ( campo.length <= 0) {
        input.classList.add("inputNoValido")
    } else {
        input.classList.remove("inputNoValido")
    }
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

function enviarFormulario(event) {
    event.preventDefault()

    const formData = {
        "nombre" : document.getElementById('userName').value,
        "apellido" : document.getElementById('userLastName').value,
        "clave" : document.getElementById('passwordUserNew').value,
        "email" : document.getElementById('userIdNew').value,
        "fecha_nac": document.getElementById('fechaNac').value,
        "tel": document.getElementById('tel').value,
        "id_restaurante": "1"
    }

    // Enviar datos al servidor en formato JSON
    fetch('http://127.0.0.1:5000/page/acceso-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = "../index.html"
    })
    .catch(error => {
        console.error('Error al enviar datos:', error)
    });
}

