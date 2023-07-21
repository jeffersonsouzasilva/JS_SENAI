import PromptSync from 'prompt-sync'; // nova forma de chamar o prompt
let prompt = PromptSync()

export function exercicio6(){
    console.log("Funcao Exercicio 6 - While")

    n = 0
    while (n < 20 && n >= 0 ){
        n += 2
        console.log(n)
    }

}


