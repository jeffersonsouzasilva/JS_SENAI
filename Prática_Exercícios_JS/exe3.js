// VERIFICACAO DE NUMEROS EM ORDEM CRESCENTE

console.log("Exercicio 3")
let prompt = require("prompt-sync")();

let primerioNumero =  parseInt(prompt("Digite um numero: "))
let segundoNumero = parseInt(prompt("Digite outro numero: "))
let terceiroNumero = parseInt(prompt("Digite mais um numero: "))


if (primerioNumero < segundoNumero && segundoNumero < terceiroNumero){
    console.log("Os numeros estao em ordem crescente")
}else {
    console.log("Os numeros nao estao em ordem crescente")
}