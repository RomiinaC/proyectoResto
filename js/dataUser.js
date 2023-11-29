const acceso = document.getElementById("acceso")
const bienvenida = document.getElementById("bienvenidaUser")
const formAcceso = document.getElementById("formAcceso")

const btnEnviar = document.getElementById("btnEnviar")


// async function validarEmail(email){
//     try {
//         const response = await fetch(`http://127.0.0.1:5000/login/${email}`)
//         const data = await response.json()
        
//         return data
      
//       } catch (error) {
//         console.error('Error al obtener platos con pastas:', error)
//         return null;
// }
// }

    
// /[a-z0-9._%\-]+@[a-z]+\.[a-z][a-z]+$/i  
    

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

// try {
//     const response = await fetch(`http://127.0.0.1:5000/login/${entrada}`)
//     const data = await response.json();
//     if (data.datos) {
//         input.classList.remove("inputNoValido") 
//         return true
//     } else {
//         input.classList.add("inputNoValido")
//         return false 
//     }     
//   } catch (error) {
//     console.error('Error al obtener cliente:', error)
//     return false;
// }



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

  