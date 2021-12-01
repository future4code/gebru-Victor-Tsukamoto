// Exercícios de interpretação de código

// Exercício 1

// O código abaixo representa um loop onde o valor inicial é 0 e sempre se somará 1. Ao chegar em 4, o loop parará. Desse modo, o console log será 10, totalizando a soma de 1, 2, 3 e 4.

// Exercício 2

// a) Será impresso no console todo número do array que for maior que 18. [19, 21, 23, 25, 27, 30]
// b) Sim! Chamaria a função IndexOf

// Exercício 3 
// Sairia 4 consoles, sendo eles: *, **, ***, ****.

//  Exercícios de Escrita de Código

// Exercício 1

let animaisDeEstimacao = Number(prompt("Quantos animais de estimação você tem?"))

if (animaisDeEstimacao === 0) {
    console.log("Que pena! Você pode adotar um pet!")
}
while (animaisDeEstimacao > 0) {
    const nomeDoPet = prompt("Digite o nome do seu pet")

    console.log(`Seu pet número ${animaisDeEstimacao} se chama ${nomeDoPet}`)
    const nomeDoPetArray = [nomeDoPet]
    nomeDoPetArray.push(nomeDoPet)
    animaisDeEstimacao -= 1
    console.log([nomeDoPetArray])
}