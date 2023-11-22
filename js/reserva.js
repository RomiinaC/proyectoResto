const reserva = document.getElementById("Reserva")
const bienvenidaReserva = document.getElementById("bienvenidaReserva")

if (userLogueado ) {
    btnCerrar.className = "visible"
    mostrar(bienvenidaReserva , true)
    mostrar(reserva, false)
    } else {
         mostrar(reserva, true)
         mostrar(bienvenidaReserva , false)
}

function fecha24hspost() {
    const dateMin = new Date();

    const yyyy = dateMin.getFullYear();
    const mm = String(dateMin.getMonth() + 1).padStart(2, '0'); // Suma 1 al mes porque los meses en JavaScript se indexan desde 0
    const dd = String(dateMin.getDate()+1).padStart(2, '0');

    // Formatea la fecha en "YYYY-MM-DD"
    const min = yyyy + '-' + mm + '-' + dd;
    return min
}

const inputDate = document.createElement("input");
inputDate.type= "date"
inputDate.id = "fechaReserva"
inputDate.name = "fechaReserva"
inputDate.min = fecha24hspost()

const fechaDisp = document.getElementById("fechaDisponible")
fechaDisp.appendChild(inputDate)



// Funcionalidad de la botonera

const num = document.getElementById("cantComensales")
const botonMayor = document.getElementById("btnMayor")
const botonMenor = document.getElementById("btnMenor")

botonMenor.addEventListener("click", function(e) {
    e.preventDefault()
    if (num.valueAsNumber > parseInt(num.min)) {
        num.valueAsNumber--
     }
}) 
botonMayor.addEventListener("click", function(e) {
    e.preventDefault()
    if (num.valueAsNumber < parseInt(num.max)) {
        num.valueAsNumber++
   }
}) 

const horarios = document.getElementById("listaHorario")

function agregarHorarios(turno, horaInicio, horaFin, intervalo) {
    let contenedor = document.createElement("div")
    let titulo = document.createElement("h4")
    titulo.textContent += turno
    contenedor.appendChild(titulo)
    contenedor.classList.add("turno")

    for (let hora = horaInicio; hora <= horaFin; hora++) {
        for (var minuto = 0; minuto < 60; minuto += intervalo) {
            const time = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`
            
            let divHora = document.createElement("div")
            divHora.classList.add("hora")

            let label = document.createElement("label")
            label.setAttribute("for", time)
            label.textContent = time

            let input = document.createElement("input")
            input.setAttribute("type", "radio")
            input.setAttribute("name", "horario")
            input.setAttribute("value", time)
            input.setAttribute("id", time)

            divHora.appendChild(label)
            divHora.appendChild(input)
            contenedor.appendChild(divHora)
            horarios.appendChild(contenedor)
        }
    }
}

agregarHorarios("Mañana", 12, 15, 30)
agregarHorarios("Noche", 20, 23, 30)
