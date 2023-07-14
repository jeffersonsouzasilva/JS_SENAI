// LISTAR DE EXERCICIOS - IF

console.log("Exercicio 3")
let prompt = require("prompt-sync")();

let numero = parseInt( prompt("Digite um numero inteiro: ") )

if ( numero > 0 ){
    
    console.log("O numero e positivo")

} else if(numero < 0 ) {

    console.log("O numero e negativo")
} else {
    console.log("O numero e zero")
}