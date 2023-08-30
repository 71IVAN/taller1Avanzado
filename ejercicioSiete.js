// Enunciado:se necesita clasificar 10 números enteros positivos
// o negativos que contienen códigos de naves de guerra. Diseñe
// un algoritmo que permita recibir dichos 50 números e indicar
// ¿Cuál fue el más cercano a cero? (Si el número es negativo se
// debe mostrar el resultado del valor absoluto)

const generarNumeros = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

let numeros = []
for (let n = 0; n <= 10; n++) {
    numeros.push(generarNumeros(-20, 25))

}

let numerosCercano = numeros[0]

for (let i = 1; i < numeros.length; i++) {
    const distanciaActual = Math.abs(numeros[i])
    const distanciaCercana = (numerosCercano - 0)

    if (distanciaActual < distanciaCercana) {
        numerosCercano = numeros[i]
    }
}

let numerosAbsolutos = []
for(let y = 1; y < numeros.length; y++){
    let numeroRandom = numeros[y]
    let numerosPositivos = Math.abs(numeroRandom)
    numerosAbsolutos.push(numerosPositivos)
}

console.log(numeros, "\n")
console.log(`El numero mas cercano a cero es ${numerosCercano} \n`)
console.log(numerosAbsolutos)
