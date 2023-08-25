// Enunciado:
// QUI-GON JINN está encargado de revisar n sables
// de luz y contabilizar la cantidad de energía de sables que tienen
// negativa en Joules.

// Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables
// defectuosos con energía negativa fue de 2 sables.


//Function tradicional
let arr = Array(2, 4, -8, 5, -6, -88, 122, -90, -4, 55, 8, 10)

function sablesDefectuosos(arr){

    let sablesMalos = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            sablesMalos.push(arr[i])
        }
        }

        return `Los sables malos son -> ${sablesMalos}`
    }

console.log(sablesDefectuosos(arr))


//Function flecha

let sablesDefectuososFlecha = (arr) => {
    let sablesMalos = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            sablesMalos.push(arr[i])
        }
        }

        return `Los sables malos de funcion flecha son -> ${sablesMalos}`
}

console.log(sablesDefectuososFlecha(arr))