// VERIFICACAO DE DIA DA SEMANA

// numero 1 a 7 representando dia da semana

// exibir o nome referente

// 1 segunda-feira, 2 terça-feira

console.log("Exercicio 2")
let prompt = require("prompt-sync")();

console.log("Neste exercicio os numeros equivalem ao dia da semana, ex.: 1 segunda-feira, 2 terça-feria e etc.." )
let dia = prompt("Digite um numero de 1 a 7: ")


switch(dia){
    case '1':
        console.log("Segunda-feira")
        break;
    case '2':
        console.log("Terça-feira")
        break;
    case '3':
        console.log("Quarta-feira")
        break;
    case '4':
        console.log("Quinta-feira")
        break;    
    case '5':
        console.log("Sexta-feira")
        break;    
    case '6':
        console.log("Sabado")
        break;    
    case '7':
        console.log("Domingo")
        break;    
    default:
        console.log ('O numero digitado nao faz parte do exercicio !')
        break;

}

// if ( dia >= 1 && dia <= 7){
//     switch(dia){
//         case '1':
//             console.log("Segunda-feira")
//             break;
//         case '2':
//             console.log("Terça-feira")
//             break;
//         case '3':
//             console.log("Quarta-feira")
//             break;
//         case '4':
//             console.log("Quinta-feira")
//             break;    
//         case '5':
//             console.log("Sexta-feira")
//             break;    
//         case '6':
//             console.log("Sabado")
//             break;    
//         default:
//             console.log ('Domingo')
//             break;
//     }
    
    
// } else{
//     console.log ("O numero digitado nao faz parte do exercicio !")
// }


