const perfilUser = async function obtenerPerfil() {   
    const emailUser = sessionStorage.getItem("access")
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/login/perfil/${emailUser}`)
            if (response.ok){
                const data = await response.json()
                let tablaPerfil = document.getElementById("container-perfil")
                tablaPerfil.innerHTML = "<h2>Datos personales</h2>"
                tablaPerfil.innerHTML += "<h3>Nombre completo:</h3>"
                tablaPerfil.innerHTML += `<p>${data[0].nombre} ${data[0].apellido}</p>`
                tablaPerfil.innerHTML += "<h3>Fecha de nacimiento:</h3>"
                tablaPerfil.innerHTML += `<p>${data[0].fecha_nac}</p>`
                tablaPerfil.innerHTML += "<h2>Datos de contacto</h2>"
                tablaPerfil.innerHTML += "<h3>Correo electronico:</h3>"
                tablaPerfil.innerHTML += `<p>${data[0].email}</p>`
                tablaPerfil.innerHTML += "<h3>Telefono:</h3>"
                if (data[0].tel === ""){
                    tablaPerfil.innerHTML += `<p> - </p>`
                } else {
                    tablaPerfil.innerHTML += `<p>${data[0].tel}</p>`}
                tablaPerfil.innerHTML += "<h2>Datos de la cuenta</h2>"
                tablaPerfil.innerHTML += "<h3>Usuario:</h3>"
                tablaPerfil.innerHTML += `<p>${data[0].email}</p>`
                tablaPerfil.innerHTML += "<h3>Contraseña:</h3>"
                const longClave = data[0].clave.length
                const claveOculta = "*".repeat(longClave)
                tablaPerfil.innerHTML += `<p>${claveOculta}</p>`
                const btnModificarClave = document.createElement("button")
                btnModificarClave.textContent = "Modificar contraseña"
                btnModificarClave.id = "btnModificarClave"
                tablaPerfil.appendChild(btnModificarClave)
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
    const emailUser = sessionStorage.getItem("access")
    try {
        const optionFetch = {
            method : 'DELETE'
        }
        const response = await fetch(`http://127.0.0.1:5000/api/login/perfil/${emailUser}`, optionFetch)
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