// Enunciado:
// PROBLEMA: Yoda el maestro jedi, necesita asignar a sus
// aprendices Padawans 2 actividades dependiendo de la edad de
// ellos:
// • Manejo de la fuerza: Si el aprendiz es menor de 15 años
// • Manejo del sable de luz: Si el aprendiz es mayor de 15 años
// Inicialmente, se debe programar una función que asocie los datos de:
// {nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez
// este objeto sea creado se debe llamar a una función secundaria que
// clasifique y muestre en consola la actividad asignada al Padawan 

function recolectarDatos(nombre, planeta, edad, estatura) {
   
    actividadUno = "Deberas hacer la actividad del manejo de la fuerza"
    actividadDos = 'Deberas hacer la actividad del manejo del sable de luz'
    
        let datos = 
         { name: nombre, 
           planeta: planeta,
           edad: edad,
           estatura: estatura
         }
        
     
         if(edad <= 15){
            return `${nombre} debido a tu edad =>  ${edad} años ${actividadUno}`
         }else{
            return `${nombre} debido a tu edad =>  ${edad} años ${actividadDos}`
         }
     }

     console.log(recolectarDatos("julian","fada",15,1.80))


     //Function de flecha
     let recolectarDatosFlecha = (nombre, planeta, edad, estatura) => {
        actividadUno = "Deberas hacer la actividad del manejo de la fuerza"
    actividadDos = 'Deberas hacer la actividad del manejo del sable de luz'
    
        let datos = 
         { name: nombre, 
           planeta: planeta,
           edad: edad,
           estatura: estatura
         }
        
     
         if(edad <= 15){
            return `${nombre} debido a tu edad =>  ${edad} años ${actividadUno}`
         }else{
            return `${nombre} debido a tu edad =>  ${edad} años ${actividadDos}`
         }

     }
   
     console.log(recolectarDatosFlecha("juliana","Tada",19,1.90))

  ///////////////////////////////////////////////////////////////////////////////////////////////////////  

     //Declarar funcion principal (Usando funcion traducional)
     function crearPadawan(nombre,planeta,edad,altura,clasificarPadawan){
      setTimeout(function(){
         //Logica de la funcion principal
         let padawan = {
            nombre,
            planeta,
            edad,
            altura
         }

         //Llamando la funcion callback
         clasificarPadawan(padawan)
      },3000)

     }

   //   declarando a la funcion callback
   clasificarPadawan("julian","fasda", 19, 1.90, function(padawanA){
      if(padawanA.edad < 15){
         console.log(`Tu ${padawanA.nombre} tienes ${padawanA.edad} años por lo tanto tu clase sera el manejo de la fuerza`)
      }else{
         console.log(`Tu ${padawanA.nombre} tienes ${padawanA.edad} años por lo tanto tu clase sera el manejo del sable de luz`)
      }
   })


    //Declarar funcion principal (USando funcion de flecha)
    let crearPadawanFlecha = (nombre,planeta,edad,altura,clasificarPadawan) => {
      setTimeout(function(){
         //Logica de la funcion principal
         let padawan = {
            nombre,
            planeta,
            edad,
            altura
         }

         //Llamando la funcion callback
         clasificarPadawan(padawan)
      
      },3000)
    }

    //declarando funcion callback
    clasificarPadawan("Luisca", "fordo", 12, 1.80, function(padawanA){
      if(padawanA.edad < 15){
         console.log(`Tu ${padawanA.nombre} tienes ${padawanA.edad} años por lo tanto tu clase sera el manejo de la fuerza`)
      }else{
         console.log(`Tu ${padawanA.nombre} tienes ${padawanA.edad} años por lo tanto tu clase sera el manejo de sable de luz `)
      }
    })
    
