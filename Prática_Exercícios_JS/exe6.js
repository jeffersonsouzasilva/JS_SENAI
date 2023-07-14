// CALCULO DE IMC

//peso (quilogramas) e altura (metros)

// IMC( peso / (altura * altura))

// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3


console.log("Exercicio 6")
let prompt = require("prompt-sync")(); 

let peso = parseFloat (prompt("Digite peso em quilogramas: "));
let altura = parseFloat (prompt("Digite altura em metros: "));

IMC = ( peso / (altura * altura))
console.log(IMC)




