
const acceso = document.getElementById("acceso")
const bienvenida = document.getElementById("bienvenidaUser")
const formAcceso = document.getElementById("formAcceso")

const btnEnviar = document.getElementById("btnEnviar")

const accesoAdmin = document.getElementById("accessAdmin")

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

async function handlerValidarIngreso(event) {  
    event.preventDefault()    
    let userOk = validarEntrada(inputUserId)
    let passOk = validarPass(inputPassw)  
    let userId = inputUserId.value
    let userPassw = inputPassw.value
    
    if ( userOk && passOk ) {
        const formData = {
            "clave" : userPassw,
            "email" : userId
        }
        try {
            const optionFetch = {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
            const response = await fetch(`${URL}/api/login`, optionFetch)
            const data = await response.json()

            if (data.datos) {
                localStorage.setItem("userRegistrado", true)
                sessionStorage.setItem("access", userId )
                sessionStorage.setItem("accessPass", userPassw )
                userRegistrado = true
                location.reload()
            } else {
                alert("Usuario y/o contraseña no validos")
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
userLogueado = validarLogin()

if (userLogueado) {
    btnCerrar.className = "visible"
    linksAcceso.className ="oculto"
     perfil.className = "visible"
    // const emailUser = sessionStorage.getItem("access")
    // console.log(emailUser)
    // if(emailUser !== ADMIN){
    //     accesoAdmin.style.display = "none"
    // }
   

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
    fetch(`${URL}/api/login/new-user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
             window.location.href = "../index.html"
        }    
    })
    .catch(error => {
        console.error('Error al enviar datos:', error)
    });
}