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
      return null;
    }
}



async function mostrarTablaEmpleados(){
    const datosJson = await obtenerEmpleados()
    
    const cuerpoDeTabla = document.getElementById("cuerpoTablaEmpl")
    
    cuerpoDeTabla.innerHTML = ""
    datosJson.empleados.forEach( empl => {
        if (empl.puesto !== ADMIN){
            const fila = document.createElement('tr')
            fila.innerHTML = nuevaFila(empl)
            cuerpoDeTabla.appendChild(fila)
        }
    } )
}
        


const nuevaFila = empleadoData => { 
  return `
  <td>${empleadoData.nombre}</td>
  <td>${empleadoData.apellido}</td>
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
        } catch (error) {
            console.error('Error:', error)
        }
}

const btnInputIdEmpleado= document.getElementById("inputIdEmplAModificar")
document.getElementById("editEmplModal").addEventListener('show.bs.modal', evt => {
const id_empl = evt.relatedTarget.getAttribute('data-bs-empleado-id_empleado')
btnInputIdEmpleado.value = id_empl
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
        window.location.href = "../page/administracion.html"

        } else {
    throw new Error ("Error! No se pudo modificar datos del empleado")
    }
}  catch (error){
    console.error('Error:', error)
}
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
            for(let dato in data){
                containerData.innerHTML += `<h4>${dato}:</h4>`
                if( !data[dato]){
                    containerData.innerHTML += `<p> - sin dato - </p> `
                } else {
                    containerData.innerHTML += `<p>${data[dato]}</p> `
                } 
            }    
        } else {
              return "Error al obtener datos del empleado"
        }
  
        } catch (error) {
            console.error('Error al obtener empleado', error)
            return null;
        }
}
mostrarData()