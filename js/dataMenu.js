let menuJson

async function obtenerMenu(cat) {
    try {
      const response = await fetch(`${URL}/api/menu/filter-c=${cat}`);
      const data = await response.json();
      console.log(data)
      return data
    
    } catch (error) {
      console.error('Error al obtener menu:', error);
      return null;
    }
}


async function crearPlato(cat){
    const menuJson = await obtenerMenu(cat)
    if ( menuJson !== null){
    const contenedorMenu = document.getElementById("contenedorMenu")
    const contenedorCat = document.createElement("div")
    const tituloCat = document.createElement("h2")
    tituloCat.innerText = cat
    tituloCat.className = "subtMenu"
    contenedorCat.appendChild(tituloCat)
   
    for ( let  i = 0 ; i < menuJson.length ; i++ ) {
    
    const containerPlato = document.createElement("div")
    const namePlato = document.createElement("h3")

    const imagen = document.createElement("img")
    contenedorCat.className = "container-card"
    containerPlato.className = "tarjeta"
    let nameForm = menuJson[i].nombre.replace(/\s+/g , '-').toLowerCase()
   
    img = await obtenerFoto(nameForm+".jpg")

    imagen.src = img
    imagen.alt = `Imagen de ${menuJson[i].nombre}`
    containerPlato.appendChild(imagen)
    namePlato.innerText = menuJson[i].nombre
    
    containerPlato.appendChild(namePlato)
    contenedorCat.appendChild(containerPlato)
    contenedorMenu.appendChild(contenedorCat)
    } 
    } else {
    console.log("no se puedo encontrar menu")  
} return
}


async function obtenerFoto(nombre) {
  try {
    const response = await fetch (`${URL}/api/menu/img/${nombre}`)
    console.log(response)
    if(response.ok) {
      console.log(response.url)
      return response.url
    } else {
        console.error(`Error al obtener la imagen. Código de estado: ${response.status}`);
        return null;
    }
  } catch (error) {
    console.log("Error al obtener foto", error)
    return null
  }
}

crearPlato("sopa")
crearPlato("ensalada")
crearPlato("pasta")
crearPlato("carne roja")
crearPlato("arroz")
crearPlato("carne blanca")