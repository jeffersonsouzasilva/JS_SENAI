//listar professores e verificar posicao lista
// Se o numero for par, escreva "par" e o numero correspondente
// Se o numero for impar, escreva "impar" e o numero correspondete
// Se for zero, escreva "zero"



let professores = ["Alana", "Alexia", "Jessica", "Ordilei", "Porssale", "Thiago", "Samanta", "Prisila", "Camila"] //array ou vetor // 9 posicoes

// for (let indice = 0; indice < professores.length; indice++)    /*professores.length quantidade de professores */ {
//     console.log ("O indice atual e:" + indice)
//     console.log ("A pessoa e:" + professores[indice]) // para referencia de acordo item atual do indice 
// }


for (let indice = 8; indice >= 0; indice--)    /*decremento  */ {
    console.log ("O indice atual e:" + indice)
    console.log ("A pessoa e:" + professores[indice]) // para referencia de acordo item atual do indice 
}