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

for (let x = 0; x <= 20; x++) {
     console.log(generarEdades(15, 30))
}

//Generar codigos

let numeros = "0123456789"
let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOOPQRSTUVWXYZ"
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
    console.log(generarCodigos(20))
}


