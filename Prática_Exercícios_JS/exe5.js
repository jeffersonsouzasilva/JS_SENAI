// CALCULO DE DESCONTO PROGRESSIVO

//

console.log("Exercicio 5")
let prompt = require("prompt-sync")();

let compra = parseFloat (prompt("Digite o valor da compra do cliente: R$"));

if (compra <= 100.00 ) {
    console.log("A Compra no valor de" + compra + "nao tem desconto !" )
}else if ( compra >= 100.01 && compra <= 200.00){
    compra = compra - (compra * 0.1) 
    console.log("Valor da compra com desconto e R$" + compra )
} else {
    compra = compra - (compra * 0.2) 
    console.log("Valor da compra com desconto e R$" + compra )
}