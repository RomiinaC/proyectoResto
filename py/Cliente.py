class Cliente: 
    def __init__(self, nombre, apellido, email, password, fecha_nac, tel, direccion):
        self.nombre = nombre
        self.apellido = apellido
        self.email = email
        self.password = password
        self.fecha_nac = fecha_nac
        self.tel = tel
        self.direccion = direccion
    def nombreCompleto(self):
        return f"{self.nombre} {self.apellido}"
    def modificarContrasenia(self, newPassword):
        self.password = newPassword
        return "Cambio pass"
    def reservar():
        print("Reservando....")
    def cancelarReserva():
        print("Cancelando reserva...")
    def ordenar():
        print("Ordenando ...")
    def __str__(self):
        return f"Usuario: {self.email} Datos: {self.nombre} {self.apellido} {self.password}"
    

