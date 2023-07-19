//9. Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.

let prompt = require("prompt-sync")();

let n = parseInt(prompt("Digite um numero: "))

while (n >= 0){
    console.log(n)
    n -= 1
    
}

