// Enunciado:
// Cree un programa que permita recibir 300 alimentos y mediante una
// función primaria después de 5 segundos se pueda obtener solo los
// alimentos de tipo vegetal que entreguen más de 200 unidades de
// energía. Finalmente, una función callback debe permitir entregar la
// sumatoria de niveles de energía entregados por los alimentos vegetales
// consumidos en la dieta de Grogu.

// Grogu ha iniciado su entrenamiento Jedi y debe activar un
// software que permita clasificar su dieta:
// alimento = {
// nombre,
// tipo (Puede ser vegetal, animal, insecto),
// nivel de energía aportado (números entre 1 00-500)
// 

function recibirAlimentos (sumatoriaEnergia){
    setTimeout(function(){

        let alimentos = [
             {
                name : "akio",
                tipo: "vegetal",
                energia: 234
            },

             {
                name : "orehano",
                tipo: "vegetal",
                energia: 140
            },

            {
                name : "rez",
                tipo: "animal",
                energia: 300
            },

            {
                name : "mosquiro",
                tipo: "insecto",
                energia: 50
            },

            {
                name : "cucamon",
                tipo: "insecto",
                energia: 34
            },

            {
                name : "albana",
                tipo: "vegetal",
                energia: 100
            },

            {
                name : "lechuka",
                tipo: "vegetal",
                energia: 80
            },

            {
                name : "cedra",
                tipo: "animal",
                energia: 500
            },

            {
                name : "rinoceronte",
                tipo: "animal",
                energia: 700
            },

            {
                name : "moscla",
                tipo: "insecto",
                energia: 100
            },

            {
                name : "culebral",
                tipo: "vegetal",
                energia: 380
            },

            {
                name : "pando",
                tipo: "animal",
                energia: 400
            },

            {
                name : "abela",
                tipo: "insecto",
                energia: 200
            },


        ]
              
        sumatoriaEnergia(alimentos)

    },5000)

}

recibirAlimentos(function(alimentos){
   let alimentar = alimentos.map(function(alimento){
    if(alimento.energia >= 100 && alimento.energia <= 500 && alimento.tipo === "vegetal")
        return alimento.energia
   })

   let suma = 0
   alimentar.forEach(function(energiaP){
      if(energiaP !== undefined)
        suma += energiaP
       
   })

  
   
   console.log(`La sumatoria de energias es de ${suma}`)

})
