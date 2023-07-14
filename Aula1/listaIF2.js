// LISTAR DE EXERCICIOS - IF


console.log("Exercicio 2")
let prompt = require("prompt-sync")();

let salario = parseFloat( prompt("Digite o salario do funcionario: ") )

if ( salario < 500 ){
    salario = salario * 1.30
    console.log("O valor do salario reajustado e " + salario)
} else {
    console.log(" O funcionario nao tem direito ao aumento ")
}

//  console.log('Seu salario e de ${salario}, voce nao tem direito ao reajuste!')