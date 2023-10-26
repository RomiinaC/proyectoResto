const bodegaJson = [
    {
        "nombre" : "Château Margaux ",
        "bodega" : "Burdeos, Francia",
        "sabor" : " Elegante, con notas de frutos rojos, cassis y tabaco",
        "textura" :" Sedoso, con taninos suaves.",
        "recomendacion" : "carnes rojas asadas, cordero o platos con setas."
    },
    {
        "nombre": "Napa Valley Cabernet Sauvignon",
        "bodega" : "California, EE. UU.",
        "sabor": "Robusto, con notas a moras, ciruelas y especias.",
        "textura": "Compleja y equilibrada, con taninos aterciopelados.",
        "recomendacion" : "carnes a la parrilla, como un jugoso filete o costillas de cerdo."
    },
    {
        "nombre": "Barolo",
        "bodega" : "Piamonte, Italia,",
        "sabor": "Estructura compleja, con notas de cereza, rosa y alquitrán.",
        "textura": "Firme, con taninos marcados y final persistente.",
        "recomendacion" : "carne con salsas ricas, como osso buco o risotto con trufas."
    },
    {
        "nombre": "Rioja Gran Reserva",
        "bodega" : "La Rioja, España",
        "sabor": "Frutas maduras, vainilla y cuero, con toques de roble.",
        "textura": "Suave y aterciopelada, con taninos redondos.",
        "recomendacion" : "cordero asado, paella o quesos curados."
    },  
    {
        "nombre": "Pinot Noir de Borgoña",
        "bodega" : "Borgoña, Francia",
        "sabor": "Frutas rojas frescas, notas terrosas y especias sutiles.",
        "textura": " Ligera y delicada, con taninos suaves.",
        "recomendacion" : " aves, como pato a la naranja o pollo asado."
    },  
    {
        "nombre": "Chardonnay de la Côte d'Or ",
        "bodega" : "Borgoña, Francia",
        "sabor": "Manzanas verdes, peras y toques de nuez y mantequilla.",
        "textura": "Rica y cremosa, con acidez equilibrada.",
        "recomendacion" : "mariscos, pescado al horno con mantequilla y platos de pollo en salsa." 
    }, 
    {
        "nombre": "Sauternes",
        "bodega" : "Burdeos, Francia",
        "sabor": "Dulce, con notas de miel, albaricoque y caramelo.",
        "textura": "Sedosa y viscosa, con acidez refrescante.",
        "recomendacion" : "postres dulces, como crème brûlée, foie gras o quesos azules."
    },  
    {
        "nombre": "Malbec de Mendoza",
        "bodega" : "Mendoza, Argentina",
        "sabor": "Frutas negras, ciruelas y especias, con toques de chocolate.",
        "textura": "Cuerpo medio, taninos suaves y final largo.",
        "recomendacion" : "carnes a la parrilla, como un buen churrasco argentino o empanadas."
    },  
    {
        "nombre": "Shiraz",
        "bodega" : "Barossa Valley, Australia",
        "sabor": "Frutas negras, pimienta negra y notas ahumadas.",
        "textura": "Intensa y carnosa, con taninos firmes.",
        "recomendacion" : " barbacoa, estofados o platos picantes."
    }, 
    {
        "nombre": "Riesling",
        "bodega" : "Mosela, Alemania",
        "sabor": "Fresco y afrutado, con notas de manzana, melocotón y pizarra.",
        "textura": "Ligera y refrescante, con acidez brillante.",
        "recomendacion" : "comida asiática, especialmente platos picantes como el curry tailandés."
    }, 
    {
        "nombre": "Champagne",
        "bodega" : "Champagne, Francia",
        "sabor": "Burbujeante, con manzanas verdes, cítricos y tostadas.",
        "textura": "Refrescante y efervescente, con fina espuma.",
        "recomendacion" : "mariscos, sushi y aperitivos"
    },  
    {
        "nombre": "Cabernet Franc",
        "bodega" : "Loira, Francia",
        "sabor": "Frutas rojas, hierbas y pimiento verde.",
        "textura": "Ligera y elegante, con taninos suaves.",
        "recomendacion" : "cerdo, cordero asado o quesos suaves."
    }, 
    {
        "nombre": "Tempranillo",
        "bodega" : "Ribera del Duero, España",
        "sabor": "Frutas maduras, vainilla y cuero.",
        "textura": "Robusta y estructurada, con taninos pronunciados.",
        "recomendacion" : "carne de venado, jabalí, y tapas españolas."
    }, 
    {
        "nombre": "Merlot",
        "bodega" : "Bordeaux, Francia",
        "sabor": "Ciruelas, frutos rojos y toques de chocolate.",
        "textura": "Suave y aterciopelada, con taninos redondos.",
        "recomendacion" : "pasta con salsa de tomate, lasañas y platos de pollo."
    },
    {
        "nombre": "Zinfandel",
        "bodega" : "California, EE. UU.",
        "sabor": "Moras, especias y notas de pimienta.",
        "textura": "Rica y audaz, con taninos suaves.",
        "recomendacion" : "barbacoa, chili y platos con sabores intensos."
    }, 
    {
        "nombre": "Syrah",
        "bodega" : "Ródano, Francia",
        "sabor": "Frutas oscuras, especias y notas ahumadas.",
        "textura": "Intensa y carnosa, con taninos firmes.",
        "recomendacion" : "carnes a la parrilla, como costillas de cerdo o filetes de res."
    },
    {
        "nombre": "Sauvignon Blanc",
        "bodega" : "Marlborough, Nueva Zelanda",
        "sabor": "Cítricos, hierbas y notas de pasto cortado.",
        "textura": "Fresca y vibrante, con acidez marcada.",
        "recomendacion" : "ensaladas, pescado a la parrilla y platos con hierbas frescas."
    },  
    {
        "nombre": " Chenin Blanc",
        "bodega" : "Loira, Francia",
        "sabor": "Manzanas, peras y miel, con toques minerales.",
        "textura": "Ligera y equilibrada, con acidez refrescante.",
        "recomendacion" : "mariscos, como camarones a la parrilla o ceviche."
    },
    {
        "nombre": " Gewürztraminer",
        "bodega" : "Alsacia, Francia",
        "sabor": "Lichi, rosa y especias exóticas.",
        "textura": "Aterciopelada y ligeramente dulce.",
        "recomendacion" : "comida asiática, como sushi o curry de pollo."
    }, 
    {
        "nombre": "Sangiovese",
        "bodega" : "Toscana, Italia",
        "sabor": "Cerezas, hierbas y toques de cuero.",
        "textura": "Elegante y estructurada, con taninos suaves.",
        "recomendacion" : " pasta, pizza y quesos italianos."
    },
]