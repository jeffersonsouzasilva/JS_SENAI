// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.

let prompt = require("prompt-sync")();

let n = 0
let soma = 0

while (n <= 100 && n >= 0 ){

    soma = soma + n
    console.log(soma)
    
    n ++
}
