async function obtenerPlatos(categoria) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`);
      const data = await response.json();
      
      return data.meals;
    
    } catch (error) {
      console.error('Error al obtener platos con pastas:', error);
      return null;
    }
  }
  

async function crearPlato(categoria, subtitulo){
    const pastas = await obtenerPlatos(categoria)
    console.log(pastas)
    const menu = document.getElementById("contenedorTarjeta");
    const titulo = document.createElement("h2")
    titulo.innerText = subtitulo
    titulo.className = "subtMenu"
    menu.appendChild(titulo)

    for ( let  i = 0 ; i < pastas.length ; i++ ) {
    
    const containerPastas = document.createElement("div");
    const platoPasta = document.createElement("h3");
    const imagen = document.createElement("img")
    
    containerPastas.className = "tarjeta"
    imagen.src = pastas[i].strMealThumb
    imagen.alt = pastas[i].strMeal
    
    platoPasta.innerText = pastas[i].strMeal
    
    menu.appendChild(containerPastas)
    containerPastas.appendChild(platoPasta)
    containerPastas.appendChild(imagen)
    
}
return 0
}

crearPlato("Pasta", "Pastas");
crearPlato("Seafood", "Seafood")
crearPlato("Dessert", "Dessert") 