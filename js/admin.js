

async function obtenerEmpleados() {
    try {
      const response = await fetch(`${URL}/api/admin/empleados`)
      if (response.ok) {
        const data = await response.json()
      return data
      } else {
        return "Error al obtener lista de empleados"
      }

    } catch (error) {
      console.error('Error al obtener lista de empleados', error)
      return null
    }
}

async function mostrarTablaEmpleados(){
    try {
        const datosJson = await obtenerEmpleados()
        const cuerpoDeTabla = document.getElementById("cuerpoTablaEmpl")
    
        cuerpoDeTabla.innerHTML = ""
        datosJson.empleados.forEach( empl => {
            if (!ADMIN.includes(empl.email)){
                const fila = document.createElement('tr')
                fila.innerHTML = nuevaFila(empl)
                cuerpoDeTabla.appendChild(fila)
            } else if (empl.email !== ADMINPRINCIPAL && empl.email == localStorage.getItem("access")){
                const fila = document.createElement('tr')
                fila.innerHTML = `
                <td>${empl.apellido}</td>
                <td>${empl.nombre}</td>
                <td>${empl.dni}</td>
                <td>
                    <a href="#dataEmplModal" class="edit" data-bs-toggle="modal" data-bs-empleado-id_empleado=${empl.id_empleado}><i class='bx bxs-plus-square'></i></a>
                    <a href="#editEmplModal" class="edit" data-bs-toggle="modal" data-bs-empleado-id_empleado=${empl.id_empleado}><i class='bx bx-edit'></i></a>
                </td>
                `
                cuerpoDeTabla.appendChild(fila)
            }
        })
    }
    catch (error) {
        console.error('Error al obtener tabla de empleados', error)
        alert('Error al obtener tabla de empleados', error)
        return null  
    }
}
        
const nuevaFila = empleadoData => { 
  return `
    <td>${empleadoData.apellido}</td>
    <td>${empleadoData.nombre}</td>
    <td>${empleadoData.dni}</td>
    <td>
        <a href="#dataEmplModal" class="edit" data-bs-toggle="modal" data-bs-empleado-id_empleado=${empleadoData.id_empleado}><i class='bx bxs-plus-square'></i></a>
        <a href="#editEmplModal" class="edit" data-bs-toggle="modal" data-bs-empleado-id_empleado=${empleadoData.id_empleado}><i class='bx bx-edit'></i></a>
        <a href="#deleteEmplModal" class="delete" data-bs-toggle="modal" data-bs-empleado-id_empleado=${empleadoData.id_empleado}><i class='bx bxs-trash' ></i></a>
    </td>
    `
}

mostrarTablaEmpleados()

async function agregarEmpleado(event) {
    event.preventDefault()
    try {
        const formData = new FormData()
        
        formData.append("nombre", document.getElementById("inputNombreEmplAdd").value)
        formData.append("apellido", document.getElementById("inputApellidoEmplAdd").value)
        formData.append("puesto", document.getElementById("inputPuestoEmplAdd").value)
        formData.append("email", document.getElementById("inputEmailEmplAdd").value)
        formData.append("clave", document.getElementById("inputClaveEmplAdd").value)
        formData.append("dni", document.getElementById("inputDniEmplAdd").value)
        formData.append("fecha_ingreso", document.getElementById("inputFechaIngEmplAdd").value)
        formData.append("salario" , document.getElementById("inputSalarioEmplAdd").value)
        formData.append("tel", document.getElementById("inputTelEmplAdd").value)
        formData.append("direccion" , document.getElementById("inputDireccionEmplAdd").value)
        formData.append("fecha_nac",document.getElementById("inputFechaNacEmplAdd").value)
        
        const optionFetch = {
            method: 'POST',
            body: formData
            }
        // Enviar datos al servidor en formato formData
        const response = await fetch(`${URL}/api/admin/empleados`, optionFetch )
        
        if (response.ok) {
                alert("Empleado ha sido agregado exitosamente")
                window.location.href = "../page/administracion.html"
        } else {
            throw new Error('Error al agregar empleado.')
            }  
        const puesto = document.getElementById("inputPuestoEmplAdd").value
        if (puesto == "ADM") {
            const dataJson = {
                "nombre" :document.getElementById("inputNombreEmplAdd").value,
                "apellido" :document.getElementById("inputApellidoEmplAdd").value,
                "clave" : document.getElementById("inputClaveEmplAdd").value,
                "email" : document.getElementById("inputEmailEmplAdd").value,
                "fecha_nac": document.getElementById("inputFechaNacEmplAdd").value,
                "tel": document.getElementById("inputTelEmplAdd").value,
                "id_restaurante": "1"
            }
            const optionFetch2 = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify(dataJson)
            }
             // Enviar datos al servidor en formato Json
            const resp = await fetch(`${URL}/api/login/new-user`, optionFetch2 )
           
            if (resp.ok) {
                    console.log("Su usuario ha sido creado exitosamente")
            }   else {
                throw new Error('Error al agregar usuario.')
            }
            }

        } catch (error) {
            console.error('Error:', error)
            alert(`Error ${error}`)
    }
}

const btnInputIdEmpleado= document.getElementById("inputIdEmplAModificar")
document.getElementById("editEmplModal").addEventListener('show.bs.modal', evt => {
const id_empl = evt.relatedTarget.getAttribute('data-bs-empleado-id_empleado')
btnInputIdEmpleado.value = id_empl
cargarPlaceholders()
})
async function modificarEmpleado(event) {
    event.preventDefault()
     const inputId = document.getElementById("inputIdEmplAModificar")
     const id_empl = inputId.value
     try {
        const formData = new FormData()
        
        formData.append("nombre", document.getElementById("inputNombreEmplEdit").value)
        formData.append("apellido", document.getElementById("inputApellidoEmplEdit").value)
        formData.append("puesto", document.getElementById("inputPuestoEmplEdit").value)
        formData.append("email", document.getElementById("inputEmailEmplEdit").value)
        formData.append("clave", document.getElementById("inputClaveEmplEdit").value)
        formData.append("dni", document.getElementById("inputDniEmplEdit").value)
        formData.append("fecha_ingreso", document.getElementById("inputFechaIngEmplEdit").value)
        formData.append("salario" , document.getElementById("inputSalarioEmplEdit").value)
        formData.append("tel", document.getElementById("inputTelEmplEdit").value)
        formData.append("direccion" , document.getElementById("inputDireccionEmplEdit").value)
        formData.append("fecha_nac",document.getElementById("inputFechaNacEmplEdit").value)
        
        const optionFetch = {
        method : 'PUT',
        body: formData
        }
    const response = await fetch(`${URL}/api/admin/empleados/${id_empl}`, optionFetch)

    if (response.ok) {
        alert("Empleado ha sido modificado exitosamente")
        

        } else {
    throw new Error ("Error! No se pudo modificar datos del empleado")
    }
    const puesto = document.getElementById("inputPuestoEmplEdit").value
    if (puesto == "ADM") {
        const dataJson = {
            "nombre" :document.getElementById("inputNombreEmplEdit").value,
            "apellido" :document.getElementById("inputApellidoEmplEdit").value,
            "clave" : document.getElementById("inputClaveEmplEdit").value,
            "email" : document.getElementById("inputEmailEmplEdit").value,
            "fecha_nac": document.getElementById("inputFechaNacEmplEdit").value,
            "tel": document.getElementById("inputTelEmplEdit").value,
            "id_restaurante": "1"
        }
        const optionFetch2 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(dataJson)
            }
         // Enviar datos al servidor en formato Json
        const resp = await fetch(`${URL}/api/login/new-user`, optionFetch2 )
       
        if (resp.ok) {
                console.log("Su usuario ha sido creado exitosamente")
        }   else {
            throw new Error('Error al agregar usuario.')
        }

        const optionFetch3 = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(dataJson)
            }
        const res = await fetch(`${URL}/api/login/perfil/${id_empl}`, optionFetch3 )
    
        if (res.ok) {
                console.log("Su usuario ha sido creado exitosamente")
        }   else {
            throw new Error('Error al modificar usuario.')
        }
        }
}  catch (error){
    console.error('Error:', error)
}
window.location.href = "../page/administracion.html"
}


const btnInputId = document.getElementById("inputIdEmplABorrar")
document.getElementById("deleteEmplModal").addEventListener('show.bs.modal', evt => {
const id_empleado = evt.relatedTarget.getAttribute('data-bs-empleado-id_empleado')
btnInputId.value = id_empleado
})

async function eliminarEmpleado(event) {
    event.preventDefault()
    
    const id = btnInputId.value
    try {
        const opcionesFetch = {
            method: 'DELETE'
        }
        const resp = await fetch(`${URL}/api/admin/empleados/${id}`, opcionesFetch);
        if (resp.ok) {
            alert("Empleado ha sido borrado exitosamente")
            window.location.href = "../page/administracion.html"
        }
        else {
            throw new Error('Error al borrar empleado.')
        }
    } catch(err) {
        console.error(err);
    }
}

const btnInputIdEmpl = document.getElementById("inputIdEmplData")
document.getElementById("dataEmplModal").addEventListener('show.bs.modal', evt => {
const id_em = evt.relatedTarget.getAttribute('data-bs-empleado-id_empleado')
mostrarData(id_em)
})

async function mostrarData(id){
        try {
        const response = await fetch(`${URL}/api/admin/empleados/${id}`)
            if (response.ok) {
            const data = await response.json()
            const containerData = document.getElementById("dataDetalle")
            containerData.innerHTML = ''
            for(let dato in data){
                containerData.innerHTML += `<h4>${dato}:</h4>`
                if( !data[dato]){
                    containerData.innerHTML += `<p> - sin dato - </p> `
                } else {
                    containerData.innerHTML += `<p>${data[dato]}</p> `
                } 
            }  
            return data  
        } else {
              return "Error al obtener datos del empleado"
        }
  
        } catch (error) {
            console.error('Error al obtener empleado', error)
            return null;
        }
}

async function cargarPlaceholders(){
    const id = btnInputIdEmpleado.value
    datos = await mostrarData(id)
    const nombre = document.getElementById("inputNombreEmplEdit")
    nombre.value = datos.nombre
    document.getElementById("inputApellidoEmplEdit").value = datos.apellido
    document.getElementById("inputPuestoEmplEdit").value = datos.puesto
    document.getElementById("inputClaveEmplEdit").value = datos.clave
    document.getElementById("inputEmailEmplEdit").value = datos.email
    document.getElementById("inputDniEmplEdit").value = datos.dni
    document.getElementById("inputFechaIngEmplEdit").value = datos.fecha_ingreso
    document.getElementById("inputSalarioEmplEdit").value = datos.salario
    if(!datos.tel) { 
        document.getElementById("inputTelEmplEdit").value = "-"
    } else {document.getElementById("inputTelEmplEdit").value = datos.tel}
    if(!datos.direccion) { 
        document.getElementById("inputDireccionEmplEdit").value = "-"
    } else {document.getElementById("inputDireccionEmplEdit").value = datos.direccion}
    
    document.getElementById("inputFechaNacEmplEdit").value = datos.fecha_nac
   
}