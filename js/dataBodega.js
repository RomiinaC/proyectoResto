const {createApp} = Vue

const appBodega = createApp({
    data() {
        return {
            bodega: bodegaJson,
        }
    }
}).mount("#contenedorBodega")