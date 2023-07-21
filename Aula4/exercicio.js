//Fazer um menu de exercícios utilizando exemplos dado em aula
//(6 exercícios dentro de funções, e incluir nome ou algo de sua preferência para criar um objeto e manipulá-lo)

//npm i prompt-sync == npm install prompt-sync
//npm init -y caso type do .json nao funcionar

import PromptSync from 'prompt-sync'; // nova forma de chamar o prompt
let prompt = PromptSync()


import { exercicio1 } from './moduloExercicio1.js'; // importando funcao exercicio1
import { exercicio2 } from './moduloExercicio2.js';
import { exercicio3 } from './moduloExercicio3.js';
import { exercicio4 } from './moduloExercicio4.js';
import { exercicio5 } from './moduloExercicio5.js';
import { exercicio6 } from './moduloExercicio6.js';
import { exercicio7,exercicio8,exercicio9 } from './moduloExercicioVariosWhile.js';


let resposta;

do {
    console.log("Bem vindo ao menu exercicios!")
    resposta = prompt ("Digite um numero de 1 a 9, para escolha um exercicio, ou para sair para interromper o programa: ")

    switch (resposta) {
        case "1":
            // caso a resposta seja 1
            console.log("Voce escolheu o exercicio 1")
            exercicio1() //chamar exercicio 1

            break;
        
        case "2":
            
            console.log("Voce escolheu o exercicio 2")
            exercicio2()
            break;
    
        case "3":
            
            console.log("Voce escolheu o exercicio 3")
            exercicio3()
            break;
        
        case "4":
            
            console.log("Voce escolheu o exercicio 4")
            exercicio4()
            break;  

        case "5":
            
            console.log("Voce escolheu o exercicio 5")
            exercicio5()
            break;
        
        case "6":
           
            console.log("Voce escolheu o exercicio 6")
            exercicio6()
            break;  

        case "7":
            
            console.log("Voce escolheu o exercicio 7")
            exercicio7()
            break;
        
        case "8":
           
            console.log("Voce escolheu o exercicio 8")
            exercicio8()
            break; 

        case "9":
           
            console.log("Voce escolheu o exercicio 9")
            exercicio9()
            break; 
            
        default:
            console.log("Voce nao escolheu nenhum dos exercicios")
            break;
    }

} while (resposta != "sair");


