const {createApp} = Vue

const appMenu = createApp({
    data() {
        return {
            menu: menuJson,
        }
    }
}).mount("#contenedorTarjeta")





