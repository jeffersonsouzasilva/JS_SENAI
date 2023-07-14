// LISTAR DE EXERCICIOS - IF


console.log("Exercicio 5")
let prompt = require("prompt-sync")();

let primeiroNumero = prompt("Digite um numero inteiro: ") 
let segundoNumero = prompt("Digite outro numero inteiro: ") 

if ( primeiroNumero < segundoNumero ){
    console.log("O segundo numero digitado e maior" )

} else if ( primeiroNumero > segundoNumero ) {
    console.log("O primeiro numero digitado e maior")
    
} else {
    console.log("Os dois numeros sao iguais")
}