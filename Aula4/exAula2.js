// Funcao

// let prompt = require ('prompt-sync')();
import PromptSync from 'prompt-sync'; // nova forma de chamar o prompt
let prompt = PromptSync()


// let nome_recebido = prompt("Digite seu nome: ")
// let idade_recebido = parseInt(prompt("Digite sua idade: "))


//digite o numeor do exercicio que voce quer exibir, se quiser sair digite sair
do{
    let resposta = prompt("Digite o numero do exercicio que voce quer exibir, se quiser sair digite sair: ")

    switch(resposta) {
        case 1:
            exercicio1()
            break;
        
        default:
            break;
    }

    
}while (resposta != "sair");



import { exercicio1 } from './exAula3.js';

exercicio1()

function olaPEssoa(nome_, idade_) {
    let pessoa = {
        nome: nome_,
        idade:  idade_,
    }
    
    // console.log("Hello" + nome + "! Voce esta com "+ idade+" anos")
    console.log("Hello " + pessoa.nome + "! Voce esta com "+ pessoa.idade +" anos")
}

// olaPEssoa("Thiago", 25)
// olaPEssoa(nome_recebido, idade_recebido)