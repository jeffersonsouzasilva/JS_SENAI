import PromptSync from 'prompt-sync'; // nova forma de chamar o prompt
let prompt = PromptSync()


export function exercicio4(){
    console.log("Funcao Exercicio 4 - FOR")

    let n = parseInt( prompt("Digite um numero: "))

    for( let i = 0; i <= 10; i ++){
        // contador = contador * numero
        console.log(`${i} x ${n} = ${i*n}`)
    }
}


