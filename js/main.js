const nav = document.getElementById("navbar")
const abrir = document.getElementById("menu-abrir")
const cerrar = document.getElementById("menu-cerrar")
const cerrarSes = document.getElementById("cerrarSesion")


abrir.addEventListener("click",()=> {
    nav.classList.add("visible")
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})

function cerrarSesion () {
    window.location.href = "../index.html"
}