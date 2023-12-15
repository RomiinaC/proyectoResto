
async function perfilUser()  {   
    const emailUser = localStorage.getItem("access")
    const btnEliminarCuenta = document.getElementById("btnEliminarCuenta")
        try {
            const response = await fetch(`${URL}/api/login/perfil/${emailUser}`)
            if (response.ok){
                const data = await response.json()
                let tablaPerfil = document.getElementById("container-perfil")
                tablaPerfil.innerHTML = "<h2>Datos personales</h2>"
                tablaPerfil.innerHTML += "<h4>Nombre completo:</h4>"
                tablaPerfil.innerHTML += `<p>${data[0].nombre} ${data[0].apellido}</p>`
                tablaPerfil.innerHTML += "<h4>Fecha de nacimiento:</h4>"
                tablaPerfil.innerHTML += `<p>${data[0].fecha_nac}</p>`
                tablaPerfil.innerHTML += "<h2>Datos de contacto</h2>"
                tablaPerfil.innerHTML += "<h4>Correo electronico:</h4>"
                tablaPerfil.innerHTML += `<p>${data[0].email}</p>`
                tablaPerfil.innerHTML += "<h4>Telefono:</h4>"
                if (data[0].tel === ""){
                    tablaPerfil.innerHTML += `<p> - </p>`
                } else {
                    tablaPerfil.innerHTML += `<p>${data[0].tel}</p>`
                }
                tablaPerfil.innerHTML += "<h2>Datos de la cuenta</h2>"
                tablaPerfil.innerHTML += "<h4>Usuario:</h4>"
                tablaPerfil.innerHTML += `<p>${data[0].email}</p>`
                tablaPerfil.innerHTML += "<h4>Contraseña:</h4>"
                const longClave = data[0].clave.length
                const claveOculta = "*".repeat(longClave)
                tablaPerfil.innerHTML += `<p>${claveOculta}</p>`
                const btnModales = document.getElementById("container-btn-perfil")
                btnModales.className = "visible"
                if(ADMIN.includes(data[0].email) ){ 
                    console.log(ADMIN.includes(data[0].email))
                    btnEliminarCuenta.className = "oculto"}
                if (ADMIN.includes(localStorage.getItem("access"))) {
                    console.log(ADMIN.includes(localStorage.getItem("access")))
                    document.getElementById("accessAdmin").className = "boton-color"
                    document.getElementById("accessAdmin").classList.add("visible")
                    document.getElementById("accessPlatos").className = "visible"
                }
             return data
            } else {
                throw new Error("No se encontro el perfil") // lanza el error a catch
            }
              
        } catch (error) {
            console.error('Error al obtener perfil:', error)
    }  
}

perfilUser()


async function eliminarUser() {
    const emailUser = localStorage.getItem("access")
    try {
        const optionFetch = {
            method : 'DELETE'
        }
        const response = await fetch(`${URL}/api/login/perfil/${emailUser}`, optionFetch)
        const data = await response.json()
        if (data.complete) {
            localStorage.removeItem("userRegistrado")
            btnCerrar.className= "oculto"
            perfil.className = "oculto"
            linksAcceso.className = "visible"
            window.location.href = "../index.html"
            }
    } catch (error) {
        console.log("Error al eliminar cuenta")
    }
}

function mostrarModal() {
    const modal = document.getElementById('miModal')
    modal.style.display = 'block'
}

function cerrarModal() {
    const modal = document.getElementById('miModal')
    modal.style.display = 'none'
}

async function cambiarPassword(event) {
    event.preventDefault()
    const emailUser = localStorage.getItem("access")
    const userPass = localStorage.getItem("accessPass")
    const passActual = document.getElementById("passwActual").value
    const passNew = document.getElementById("passwNew").value
    const passRep = document.getElementById("passwNewRep").value
    if (passActual === userPass && passNew === passRep) {
        const formData = {
            "clave": passNew ,
            "email" : emailUser
        }  
        try {
        const optionFetch = {
            method : 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${URL}/api/login/perfil`, optionFetch)
        const data = await response.json()
        if (data.complete) {
            alert("Contraseña modificada exitosamente")
            localStorage.setItem("accessPass", passNew)
            window.location.href = "../page/perfil.html"
            perfilUser()
            }
        } catch (error) {
        console.log("Error! No se pudo modificar contraseña")
        }
    } else {
        alert("No se pudo modificar la contraseña")
    }
    
}