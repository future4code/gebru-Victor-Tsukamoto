// Exercícios aula 08 - Condicionais

// Exercícios de interpretação de código

// 1) a) O código testa se o número indicado pelo usuário é par, uma vez que calcula se o número é divisivel por 2.
// b) Numeros Pares.
// c) Números ímpares.

// 2) a) O código acima serve para descobrir o preço da fruta selecionada pelo usuário.
// b) O preço da fruta Maçã é R$ 2.25
// c) O preço da fruta Maçã é R$ 5

// 3) a) A primeira linha está perguntando ao usuário um número, este armazenado na variavel "numero"
// b) A mensagem no terminal para o número 10 seria "Esse número passou no teste", enquanto que para -10 não aconteceria nada no console.
// c) O console apenas nao imprimiria nada quanto ao número. Já quanto à Variavel "Mensagem", o console s18empre acusará erro

//  Exercícios de Escrita de Código

// 1) 
const idade = Number(prompt("Qual a sua idade?"))
if (idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}

// 2)

const turno = prompt("Que turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N")
    console.log("Boa noite!")


// 3)
const turno2 = prompt("Que turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
switch (turno2) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
}

// 4)
const genero = prompt("Que gênero é o filme você vai assistir?").toLowerCase()
const preço = Number(prompt("Qual o preço do ingresso?"))
if (genero === "fantasia", preço < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

// Desafio 1

const genero1 = prompt("Que gênero é o filme você vai assistir?").toLowerCase()
const preço1 = Number(prompt("Qual o preço do ingresso?"))
const lanche = prompt("Que lanche você vai comprar?")

if (genero1 === "fantasia", preço1 < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
console.log("Aproveite o seu ", lanche)

// Desafio 2

const nome = prompt("Digite seu nome completo")
const tipoDeJogo = prompt("Digite o tipo de jogo, sendo IN para internacional e DO para doméstico")
const etapaDoJogo = prompt("Digite a etapa do jogo, sendo SF para semifinal, DT para decisão de terceiro lugar e FI para Final")
const categoria = Number(prompt("Digite a categoria (de 1 a 4)"))
const quantidade = Number(prompt("Quantos ingressos você quer comprar?"))
let valorIndividual

if (categoria === 1, etapaDoJogo === "SF") {
    valorIndividual = 1320
}
if (etapaDoJogo === "DT", categoria === 1) {
    valorIndividual = 660
}
if (etapaDoJogo === "FI", categoria === 1) {
    valorIndividual = 1980
}

if (etapaDoJogo === "SF", categoria === 2) {
    valorIndividual = 880
}
if (etapaDoJogo === "DT", categoria === 2) {
    valorIndividual = 440
}
if (etapaDoJogo === "FI", categoria === 2) {
    valorIndividual = 1320
}
if (etapaDoJogo === "SF", categoria === 3) {
    valorIndividual = 550
}
if (etapaDoJogo === "DT", categoria === 3) {
    valorIndividual = 330
}
if (etapaDoJogo === "FI", categoria === 3) {
    valorIndividual = 880
}
if (etapaDoJogo === "SF", categoria === 4) {
    valorIndividual = 220
}
if (etapaDoJogo === "DT", categoria === 4) {
    valorIndividual = 170
}
if (etapaDoJogo === "FI", categoria === 4) {
    valorIndividual = 330
}

if (tipoDeJogo === "IN") {
    valorIndividual = (valorIndividual * 4.1)
} else {
    valorIndividual = valorIndividual * 1
}


// switch (categoria === 1) {
//     case etapaDoJogo === "SF":
//         valorIndividual = 1320
//         break
//     case etapaDoJogo === "DT":
//         valorIndividual = 660
//         break
//     case etapaDoJogo === "FI":
//         valorIndividual = 1980
//         break
// }

// switch (categoria === 2) {
//     case etapaDoJogo === "SF":
//         valorIndividual = 880
//         break
//     case etapaDoJogo === "DT":
//         valorIndividual = 440
//         break
//     case etapaDoJogo === "FI":
//         valorIndividual = 1320
//         break
// }

// switch (categoria === 3) {
//     case etapaDoJogo === "SF":
//         valorIndividual = 550
//         break
//     case etapaDoJogo === "DT":
//         valorIndividual = 330
//         break
//     case etapaDoJogo === "FI":
//         valorIndividual = 880
//         break
// }

// switch (categoria === 4) {
//     case etapaDoJogo === "SF":
//         valorIndividual = 220
//         break
//     case etapaDoJogo === "DT":
//         valorIndividual = 170
//         break
//     case etapaDoJogo === "FI":
//         valorIndividual = 330
//         break
// }

// if (tipoDeJogo === "IN") {
//     valorIndividual = valorIndividual * (4.1)
// }

// Ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar.


console.log(`Nome Completo: ${nome}
    Tipo de jogo: ${tipoDeJogo}
    Etapa do Jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade de ingressos: ${quantidade}
    Valor do Ingresso: ${valorIndividual}
    Valor total: ${valorIndividual * quantidade}`)