//LISTA DE EXERCICIO DIA 17

//10. Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.

// while 
/*
let prompt = require("prompt-sync")();

let n = parseFloat(prompt("Digite um numero: "))

while(n != 0){
    let n = parseFloat(prompt("Digite um numero: "))
} */




let prompt = require("prompt-sync")();

let n;


do {
    n = parseFloat(prompt("Digite um numero: "))
}while(n != 0)
