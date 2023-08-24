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

let pilotoUno = {
  nombre:'kevin durant',
  codigo:'ARQ2555',
  nave: 'Sara Bel-Sun'
}

let pilotoDos = {
    nombre:'derrick rose',
    codigo:'ARQ2556',
    nave: 'Nodin Chavdri'
}


let pilotoTres = {
    nombre:'stephen curry',
    codigo:'ARQ2557',
    nave:'Finn'
}


let tripulantes =  {
    pilotoUno,
    pilotoDos,
    pilotoTres
}

 function filtrarNombre(){
    return piloto.nombre

 }

 console.log(filtrarNombre)