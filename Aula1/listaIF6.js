// LISTAR DE EXERCICIOS - IF

console.log("Exemplo 6")
let prompt = require("prompt-sync")();

let primeiraNota = parseFloat( prompt("Digite a primeira nota: ") )  // uso do parseFloat para converter em numero

let segundaNota = parseFloat( prompt("Digite a segunda nota: ") )

let terceiraNota = parseFloat( prompt("Digite a terceira nota: ") )

let quartaNota = parseFloat( prompt("Digite a quarta nota: ") )



let soma = primeiraNota + segundaNota + terceiraNota + quartaNota

let media = soma / 4


if ( media >= 7.0 ){
    console.log("Aluno APROVADO !" )

} else if ( media >= 5.0 && media < 7.0 ) {
    console.log("Aluno de RECUPERACAO !")
    
} else {
    console.log("REPROVADO !")
}

console.log("A media do alunos e: " + media)