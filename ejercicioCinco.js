// Enunciado:
// Watto paga a su personal de ventas un salario de
// 3500000 mensuales, más una comisión de 1500000 por cada
// licencia de software vendida menos el 5% de deducciones por
// impuestos sobre el total devengadp. Codifica un programa que
// calcule e imprima el salario mensual de un vendedor dado;

function calcularSalario(nameE, licenciaV) {
    const salario = 3500000
    const comisionSoftware = 1500000
    const impuestos = 0.05


    if (licenciaV > 0) {
        const comision = comisionSoftware * licenciaV
        const impuestoV = (salario + comision) * impuestos
        const salarioPagar = (salario + comision) - impuestoV

        salarioTotal = salarioPagar
    } else {
        salarioTotal = salario
    }

    return `El salariototal a pagar de ${nameE} es de ${parseFloat(salarioTotal)}`
}

console.log(calcularSalario('julio', 3))



//Function flecha

let calcularSalarioFlecha = (nameE, licenciaV) =>{

    const salario = 3500000
    const comisionSoftware = 1500000
    const impuestos = 0.05


    if (licenciaV > 0) {
        const comision = comisionSoftware * licenciaV
        const impuestoV = (salario + comision) * impuestos
        const salarioPagar = (salario + comision) - impuestoV

        salarioTotal = salarioPagar
    } else {
        salarioTotal = salario
    }

    return `El salariototal a pagar de ${nameE} es de ${parseFloat(salarioTotal)}`
}

console.log(calcularSalarioFlecha("wiliam", 0))

