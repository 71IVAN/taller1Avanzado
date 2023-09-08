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


// function generarMapas(cantidad) {
//     const objetos = [];
  
//     for (let i = 0; i < cantidad; i++) {
//       const objeto = {
//         nombrePlaneta: `Planeta ${i + 1}`,
//         latitud: parseFloat((Math.random() * 1000).toFixed(1)),
//         longitud: parseFloat((Math.random() * 100).toFixed(2)) ,
//         nivelOxigeno: parseFloat((Math.random() * 0.09).toFixed(1)),
//         volumenAgua: parseFloat((Math.random() * 10).toFixed(0))
//       };
  
//       objetos.push(objeto);
//     }
  
//     return objetos;

//   }

//    //Function de suma
//    function sumarAgua(generarMapas){

//     let mapa = generarMapas.map(function(generaMapa){
//      return generaMapa.volumenAgua

//     })

//     let suma = 0
//     mapa.forEach(function(volumenTotAgua){
//      suma += volumenTotAgua
//     })

//     return `La suma total de los volumenes de agua de todos los planetas es de -> ${suma} \n`

//  }


//  //Function multiplicar

//  function sumarOxigeno(generarMapas){
//     let mapa = generarMapas.map(function(generaMapa){
//         return generaMapa.nivelOxigeno
//     })

//     let suma = 0
//     mapa.forEach(function(sumaOxigeno){
//         suma += (sumaOxigeno * 100)
//     })

//     return `EL valor total del oxigeno es de -> ${suma}\n`
//  }




//  //Function encontrar planeta con oxigeno negativo
//  function planetaOxigenoNegativo(generarMapas){
//     const planetaConOxigenoNegativo = {}
   
//     generarMapas.forEach(function(planeta){
//         if(planeta.nivelOxigeno < 0){
//             planetaConOxigenoNegativo.push(planeta)
//         }
//     })

//     if(planetaConOxigenoNegativo.length === 0){
//        console.log`Todos los planetas tienen oxigenos`
//     }else{
//         planetaConOxigenoNegativo.forEach(function (planeta){
//           console.log(`Planeta sin oxigeno ${planeta.nombrePlaneta}`)
//         })
//     }
    
//     return planetaConOxigenoNegativo;
//  }


//  //Function encontrar planeta sin agua
//  function planetaSinAgua(generarMapas){
//     const planetaMenosAgua = {}

//     generarMapas.forEach(function(planeta){
//       if(planeta.volumenAgua === 0){
//         planetaMenosAgua.push(planeta)
//       }
//     })

//     if(planetaMenosAgua === 0){
//       console.log("Todos los planetas tienen agua")
//     }else{
//       planetaMenosAgua.forEach(function(planeta){
//           console.log (`PLaneta sin agua ${planeta.nombrePlaneta}`)
//       })
//     }

//     return planetaMenosAgua
//  }




//  const mapasGenerados = generarMapas(3)
//   console.log(mapasGenerados);
//   console.log(sumarAgua(mapasGenerados))
//   console.log(sumarOxigeno(mapasGenerados))
//   console.log(planetaOxigenoNegativo(mapasGenerados))
//   console.log(planetaSinAgua(mapasGenerados))
  


const planetas = [
  { nombrePlaneta: "Tatooine", latitud: 23.456, longitud: -45.789, oxigeno: 15, agua: 500 },
  { nombrePlaneta: "Alderaan", latitud: -12.345, longitud: 67.890, oxigeno: 35, agua: 800 },
  { nombrePlaneta: "Hoth", latitud: 45.678, longitud: -12.345, oxigeno: -5, agua: 0 },
  // Agregar los datos de los otros planetas aquí
];

// Inicializar variables para las sumas
let totalAgua = 0;
let totalOxigeno = 0;

// Inicializar variables para almacenar información de planetas especiales
let planetaConOxigenoNegativo = null;
let planetaSinAgua = null;

// Iterar a través de la lista de planetas
for (const planeta of planetas) {
  // Sumar la cantidad total de agua de los planetas
  totalAgua += planeta.agua;

  // Sumar el oxígeno y multiplicar por 100
  totalOxigeno += planeta.oxigeno * 100;

  // Verificar si el planeta tiene oxígeno negativo
  if (planeta.oxigeno < 0) {
    planetaConOxigenoNegativo = planeta;
  }

  // Verificar si el planeta no tiene agua
  if (planeta.agua === 0) {
    planetaSinAgua = planeta;
  }
}

// Imprimir los resultados
console.log(`Total de agua en los 15 planetas: ${totalAgua} unidades`);
console.log(`Total de oxígeno en los 15 planetas multiplicado por 100: ${totalOxigeno} unidades`);

if (planetaConOxigenoNegativo) {
  console.log(`Planeta con oxígeno negativo: ${planetaConOxigenoNegativo.nombrePlaneta}`);
}

if (planetaSinAgua) {
  console.log(`Planeta sin agua: ${planetaSinAgua.nombrePlaneta}`);
  
}