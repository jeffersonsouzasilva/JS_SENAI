// VERIFICACAO DE LOGIN

// nome de usuario e senha

// usuario "admin"  senha "senha123"

//console.log `bem-sucedido`  `nao`


console.log("Exercicio 1")
let prompt = require("prompt-sync")();

let usuario = prompt("Digite o nome do usuario: ")
let senha = prompt("Digite a senha: ")

if ( usuario == "admin"  && senha == "senha123" ) {
    console.log("O login foi bem sucedido !" )
}else {
    console.log("Nao foi feito o login !" )
}