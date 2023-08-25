// Enunciado:
// Obi-Wan Kenobi, necesita clasificar diferentes códigos de
// acceso a las naves de guerra los cuáles reposan en la base de datos
// central, para ello debe programar una función que permita recibir la
// palabra clave de cada nave y separar imprimiendo solo el nombre del
// piloto asignado a cada nave.
// Tenga en cuenta que el formato de todos los datos es el siguiente:
// • ARQ2555: Sara Bel-Sun
// • ARQ2556: Nodin Chavdri
// • ARQ2557: Finn

// "Metodo Split()"

let bdTripulantes = [
    'ARQ2555:-Kevin Durant',
    'ARQ2556:-Derrick Roses',
    'ARQ2557:-Zach lavine'
]
//Funcion tradicional

 function mostrarNombre(codigo){
    
    return mensaje = `Nombre del piloto --> ${codigo.split("-")[1]}`
 }

 console.log(mostrarNombre( 'ARQ2555: -Kevin Durant'))

 //Funcion de flecha

 let mostrarNombreFlecha = (codigo) => mensaje = `Nombre del piloto --> ${codigo.split("-")[1]}` 

 console.log(mostrarNombreFlecha('ARQ2557:-Zach lavine'))