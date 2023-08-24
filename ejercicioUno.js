// Enunciado:
// Yoda el maestro jedi, necesita enseñar a sus aprendices
// Padawan a calcular la distancia a la que cualquiera de los planetas de la
// ruta N-14 pertenecientes a la ruta comercial de la federación
// intergaláctica, se encuentra del planeta NABOO.
// Para calcular dicha distancia se debe:
// • Recibir las coordenadas X,Y del planeta en UA
// • Establecer la distancia como: Raiz:(x2-x1)2+(y2-y1)2



//Function tradicional

function calcularDistanciaPlaneta() {
    let coordenadasXplanetaUno = 10
    let coordenadasYplanetaUno = -50

    let coordenadasXplanetaDos = 80
    let coordenadasYplanetaDos = 0

    //Proceso del problema 

    let distanciaCalculada = Math.sqrt(Math.pow(coordenadasXplanetaDos - coordenadasXplanetaUno, 2) +
        Math.pow(coordenadasYplanetaDos - coordenadasYplanetaUno, 2))

        return `la distancia recorrida es => ${distanciaCalculada}`
}

console.log(calcularDistanciaPlaneta())


//Function fleca


let calcularDistanciaPlanetaFlecha = () =>{
    let coordenadasXplanetaUno = 10
    let coordenadasYplanetaUno = -50

    let coordenadasXplanetaDos = 80
    let coordenadasYplanetaDos = 0

    //Proceso del problema 

    let distanciaCalculada = Math.sqrt(Math.pow(coordenadasXplanetaDos - coordenadasXplanetaUno, 2) +
        Math.pow(coordenadasYplanetaDos - coordenadasYplanetaUno, 2))

        return `la distancia recorrida my homie es => ${distanciaCalculada}`
}

console.log(calcularDistanciaPlanetaFlecha())




