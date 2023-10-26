async function obtenerPlatosConPastas() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta');
      const data = await response.json();
      
      return data.meals;
    
    } catch (error) {
      console.error('Error al obtener platos con pastas:', error);
      return null;
    }
  }
  

async function crearPastas(){
    const pastas = await obtenerPlatosConPastas()
    console.log(pastas)

    for ( let  i = 0 ; i < pastas.length ; i++ ) {
    const menuPastas = document.getElementById("prueba");
    const containerPastas = document.createElement("div");
    const platoPasta = document.createElement("h2");
    const imagen = document.createElement("img")
    containerPastas.className = "tarjeta"
    imagen.src = pastas[i].strMealThumb
    imagen.alt = pastas[i].strMeal
    
    platoPasta.innerText = pastas[i].strMeal
    menuPastas.appendChild(containerPastas)
    containerPastas.appendChild(platoPasta)
    containerPastas.appendChild(imagen)
    
}
return 0
}

crearPastas();