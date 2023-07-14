// LISTAR DE EXERCICIOS - IF


console.log("Exercicio 1")
let prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do funcionario: ")
let cargo = prompt("Digite o cargo do funcionario: ")
let salario = parseFloat( prompt("Digite o salario do funcionario: ") )

if ( salario < 1000 ) {
    // salario = salario + ((salario / 100)* 10)
    salario = salario * 1.10 
    console.log("O nome do funcionario e " + nome )
    console.log("O cargo do funcionario e " + cargo)
    console.log("O salario do funcionario e " + salario)
} else {
    console.log("O nome do funcionario e " + nome )
    console.log("O cargo do funcionario e " + cargo)
    console.log("O salario do funcionario e " + salario)
}

/*   
    console.log("O nome: " + nome )
    console.log("O cargo",  cargo)
    console.log('O salario: ${salario}') */

//    console.log('O salario: ${salario.toFixed(2)}') // descobrir o melhor uso do toFixed
