// Enunciado:
// QUI-GON JINN está encargado de revisar n sables
// de luz y contabilizar la cantidad de energía de sables que tienen
// negativa en Joules.

// Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables
// defectuosos con energía negativa fue de 2 sables.

//funcion tradicional
function sablesDefectuosos(){
     sables = [
        sableUno = 10 ,
        sableDos = -7,
        sableTres = -234,
        sableCuatro= 235,
        sableCinco = 200
     ]

     let sablesNegativos = [];
    

    for(let i = 0; i <sables.length;i++){
        if(sables[i] < 0){
            sablesNegativos.push(sables[i]);
        }
        
    }

    return sablesNegativos
}
let sablesNegativos = sablesDefectuosos
console.log(sablesDefectuosos())


//funcion deflecha
let sablesDefectuososFlechas = () =>{
    sables = [
        sableUno = 10 ,
        sableDos = -7,
        sableTres = -234,
        sableCuatro= 235,
        sableCinco = 200
     ]

     let sablesNegativos = [];
    

    for(let i = 0; i <sables.length;i++){
        if(sables[i] < 0){
            sablesNegativos.push(sables[i]);
        }
        
    }

    return `Los sables defectuosos son ${sablesNegativos}`
}

let Sables_negativos = sablesDefectuosos
console.log(sablesDefectuososFlechas())