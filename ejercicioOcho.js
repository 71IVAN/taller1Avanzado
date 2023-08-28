// PROBLEMA: Para descubrir la ubicación de un listado con los
// últimos guerreros jedi de la galaxia se debe recibir un listado de
// 15 mapas los cuales tienen la siguiente información
// {nombrePlaneta, latitud, longitud, nivel de oxígeno en el
// planeta, volumen total del agua del planeta}. Diseñe una
// solución para:

// • Sumar la cantidad total de agua de los 15 planetas
// • Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas
// • Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno
// negativo y de ser así mostrar la información general de este
// • Encontrar si alguno de los 15 planetas no tiene agua y mostrar la
// información general de este

//Mapas


function generarMapas(cantidad) {
    const objetos = [];
  
    for (let i = 0; i < cantidad; i++) {
      const objeto = {
        // Propiedades aleatorias
        nombrePlaneta: `Planeta ${i + 1}`,
        latitud: parseFloat((Math.random() * 1000).toFixed(1)),
        longitud: parseFloat((Math.random() * 100).toFixed(2)) ,
        nivelOxigeno: parseFloat((Math.random() * 0.09).toFixed(1)),
        volumenAgua: parseFloat((Math.random() * 10).toFixed(0))
        // Agrega más propiedades aleatorias según tus necesidades
      };
  
      objetos.push(objeto);
    }
  
    return objetos;

  }

   //Function de suma
   function sumarAgua(generarMapas){

    let mapa = generarMapas.map(function(generaMapa){
     return generaMapa.volumenAgua

    })

    let suma = 0
    mapa.forEach(function(volumenTotAgua){
     suma += volumenTotAgua
    })

    return `La suma total de los volumenes de agua de todos los planetas es de -> ${suma} \n`

 }


 //Function multiplicar

 function sumarOxigeno(generarMapas){
    let mapa = generarMapas.map(function(generaMapa){
        return generaMapa.nivelOxigeno
    })

    let suma = 0
    mapa.forEach(function(sumaOxigeno){
        suma += (sumaOxigeno * 100)
    })

    return `EL valor total del oxigeno es de -> ${suma}\n`
 }

 //Function encontrar planeta con oxigeno negativo
 function planetaOxigenoNegativo(generarMapas){
    const planetaConOxigenoNegativo = {}
   
    generarMapas.forEach(function(planeta){
        if(planeta.nivelOxigeno < 0){
            planetaConOxigenoNegativo.push(planeta)
        }else{
            console.log("No hay planetas con oxigeno negativo") 
        }
    })

    return planetaConOxigenoNegativo;
 }

 const mapasGenerados = generarMapas(3)
//   console.log(mapasGenerados);
//   console.log(sumarAgua(mapasGenerados))
//   console.log(sumarOxigeno(mapasGenerados))
  console.log(planetaOxigenoNegativo(mapasGenerados))
  