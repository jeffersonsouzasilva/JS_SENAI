// Propriedade

let prompt = require ('prompt-sync')();

let nome_recebido = prompt("Digite seu nome: ")

let idade_recebido = parseInt(prompt("Digite sua idade: "))

let pessoa = {
    nome: nome_recebido,
    idade:  idade_recebido,
}

// console.log("Hello" + nome + "! Voce esta com "+ idade+" anos")
console.log("Hello " + pessoa.nome + "! Voce esta com "+ pessoa.idade +" anos")