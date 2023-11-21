class Cliente: 
    def __init__(self, nombre, apellido, dni, email, clave, fecha_nac, tel, direccion):
        self.__nombre = nombre
        self.__apellido = apellido
        self.__dni = dni
        self.__email = email
        self.__clave = clave
        self.__fecha_nac = fecha_nac
        self.__tel = tel
        self.__direccion = direccion
    # GETTER
    @property
    def nombreCompleto(self):
        return f"{self.__nombre} {self.__apellido}"
    @property
    def clave(self):
        return self.__clave
    @property
    def tel(self):
        return self.__tel
    
    def reservar(self):
        print("Reservando....")
    def cancelarReserva(self):
        print("Cancelando reserva...")
    def ordenar(self):
        print("Ordenando ...")

    # SETTER
    @clave.setter
    def clave(self, newClave):    
        self.__clave = newClave

    @tel.setter
    def tel(self, newTel):
        self.__tel = newTel
    
    def __str__(self):
        return f"Usuario: {self.__email} Nombre Completo: {self.__nombre} {self.__apellido} {self.__clave}"
    

