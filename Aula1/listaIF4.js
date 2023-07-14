// LISTAR DE EXERCICIOS - IF

console.log("Exercicio 4")
let prompt = require("prompt-sync")();

let numero = parseInt( prompt("Digite um numero inteiro: ") )

if ( numero % 2 == 0 ){ // % resto da divisao e 0
    console.log("O numero e par")
} else {
    console.log("O numero e impar")
}