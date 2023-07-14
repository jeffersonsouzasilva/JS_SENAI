/*console.log("Hello World !")*/ /* para mostrar na tela, primeira linha de codigo/ */


// console.log("Exemplo 2")

// let prompt = require("prompt-sync")();

// let nome  = prompt("Digite seu nome: ")

// console.log("Ola " + nome) // segundo codigo



// console.log("Exemplo 3")

// let prompt = require("prompt-sync")();

// let numero  = prompt("Digite seu numero: ") // let prompt e para string

// if ( numero = 5 ) {
//     console.log("ACERTOU !! O numero e 5 ")
// } else {
//     console.log("ERROU !! Esse nao e o numero 5")
// }


// console.log("Exemplo 4")
// let prompt = require("prompt-sync")();

// let primeiraNota = prompt("Digite a primeira nota: ") // padroe de inscrita snake_case, PascalCase e camelCase

// let segundaNota = prompt("Digite a segunda nota: ")

// let soma = primeiraNota + segundaNota

// console.log(soma) // concateno



console.log("Exemplo 4")
let prompt = require("prompt-sync")();

let primeiraNota = parseFloat( prompt("Digite a primeira nota: ") )  // uso do parseFloat para converter em numero

let segundaNota = parseFloat( prompt("Digite a segunda nota: ") )

let soma = primeiraNota + segundaNota

console.log(soma)

let media = soma / 2

console.log("A media dos alunos e: " + media)



