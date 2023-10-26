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

// const num = document.getElementById("cantComensales")
// const botonMenos = document.querySelector(".menos")
// const botonMas = document.querySelector(".mas")

// botonMenos.addEventListener("click", function() {
//     if (num.value > num.min) {
//         num.value--
//     }
// }) 
// botonMas.addEventListener("click", function() {
//     if (num.value < num.max) {
//         num.value++
//     }
// }) 




