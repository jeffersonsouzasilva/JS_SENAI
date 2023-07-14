// Operadores logicos
// OU (||)
// true ||true = true
// true || false = true
// false || false = false


// E (&&)
// true && true = true
// true && false = false
// false && false = false


// NAO (!)
//  !true = false




// console.log("Exemplo 5")
// let prompt = require("prompt-sync")();


// let numero = parseInt ( prompt("Digite um numero: "));

// if ( numero >= 10 && numero <= 20 ) {
//     console.log("Seu numero informado esta no intervalo desejado!")
// } else {
//     console.log("Numero esta fora do intervalo desejado!!!!!!")
// }




let prompt = require("prompt-sync")();

let animal = prompt("Digite o nome do animal para saber o que tem a dizer: ");

switch(animal){
    case 'cachorro':
        console.log("au auuuuu")
        break;
    case 'gato':
        console.log("miauuuuu")
        break;
    case 'vaca':
        console.log("muuuuuuu")
        break;
    case 'papagaio':
        console.log("Eai Loro !")
        break;    
    default:
        console.log ('Conheco nao !')
        break;
    
}