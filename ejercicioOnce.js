// Enunciado: crear un array de objetos con comida chatarra en la funcion callback imprimir el objeto absoluto donde la comida tenga un valor mayor o igual a 50,000

//Declarar funcion principal
function comidas(funcionCallback) {
    setTimeout(function () {

        //Logica de la funcion principal
        let arregloComidas = [
            comidaUno = {
                id: 1,
                nombre: "salchipapas",
                tipo: "rapida",
                precio: 30000
            },

            comidaDos = {
                id: 2,
                nombre: "perro",
                tipo: "rapida",
                precio: 10000
            },

            comidaTres = {
                id: 3,
                nombre: "hamburgesa",
                tipo: "rapida",
                precio: 60000
            },

            comidaCuatro = {
                id: 4,
                nombre: "puntaanca",
                tipo: "rapida",
                precio: 70000
            },

            comidaCinco = {
                id: 5,
                nombre: "choriarepa",
                tipo: "rapida",
                precio: 20000
            }

        ]

        //Llamando callback
        funcionCallback(arregloComidas)

    }, 2000)

}

//Llamando funcion callback
comidas(function (arrayComidas) {
    arrayComidas.forEach(function (comida) {
        if (comida.precio >= 50000) {
            console.log(`Comidas mayor o igual a 50,000 id numero :${comida.id}`)
        }
    })
})