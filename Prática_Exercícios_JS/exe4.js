// VERIFICACAO DE IDADE

// ano de nascimento

// "Maior de idade!" "Menor de idade!"

console.log("Exercicio 4")
let prompt = require("prompt-sync")();

let nascimento = parseInt(prompt("Digite ano de nascimento: "));
let ano = parseInt (prompt("Digite o ano atual: "));

nascimento = ano - nascimento

if ( nascimento >= 18 ) {
    console.log("Maior de idade !" );
}else {
    console.log("Menor de idade!" )
}