//LISTA DE EXERCICIO DIA 17

//4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.

let prompt = require("prompt-sync")();

let n = parseInt( prompt("Digite um numero: "))

for( let i = 0; i <= 10; i ++){
    // contador = contador * numero
    console.log(`${i} x ${n} = ${i*n}`)
}