// Enunciado:
// Para habilitar la guerra de los clones es necesario
// clasificar la edad de estos, elabore un programa que permita
// recibir 20 edades y 20 códigos diferentes generadas
// aleatoriamente y determine cual de esas edades es la mayor. Si
// se repite la misma edad se debe contar el número de
// repeticiones


//Generar edades 
const generarEdades = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
};

let edades = []

for (let x = 0; x <= 20; x++) {
    edades.push(generarEdades(15, 30))
    
}
console.log(edades)

//Generar codigos

let numeros = "01234"
let letras = "abcdefghijzABCDEFGHIJZ"
let union = letras + numeros

const generarCodigos = (longitud) => {
    let codigo = "";
    for (let x = 0; x < longitud; x++) {
        let aleatorio = Math.floor(Math.random() * union.length);
        codigo += union.charAt(aleatorio);
    }
    return codigo
}

for (let j = 0; j < 20; j++) {
    console.log(generarCodigos(5))
}

//Encontrar edad y saber si se repite
let edadMayor = edades[0]

for(let e = 1; e < edades.length; e++){
    if(edades[e] > edadMayor){
        edadMayor = edades[e]
    }
}


console.log(`La edad mayor es ${edadMayor}`)



