class Pedido():
    platos = []
    pedidoCompleto = []

    def __init__(self, platos=[]):
        Pedido.platos = platos
    
    def agregarPlato(self, plato):
        Pedido.platos.append(plato)
    
    def eliminarPlato(self, plato):
        Pedido.platos.remove(plato)
    def mostrarPedido(self, pedidoCompleto):
        for plato in Pedido.platos:
            pedidoCompleto.append(plato)
            return pedidoCompleto
   

class Plato():
    def __init__(self, id, nombre, categoria, tipo, ingrediente, precio, foto ):
        self.id = id
        self.nombre = nombre
        self.categoria = categoria
        self.tipo = tipo
        self.ingrediente = ingrediente
        self.precio = precio
        self.foto = foto
    def __str__(self):
        return f"{self.id} - {self.nombre}"