// 5. Imprimir os primeiros 10 números da sequência de Fibonacci

let prompt = require("prompt-sync")();

let numeroAnterior = 0
let numeroAtual = 1

console.log(numeroAnterior)
console.log(numeroAtual)

for( let contador = 3; contador <= 10; contador ++){
    let numeroProximo = numeroAnterior + numeroAtual
    console.log(numeroProximo)

    numeroAnterior = numeroAtual
    numeroAtual = numeroProximo

}