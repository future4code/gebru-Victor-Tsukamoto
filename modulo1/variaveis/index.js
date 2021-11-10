// // // Exercícios de interpretação de código

// // 1. No console será impresso: "10" e "10, 5" 

// // 2. No console será impresso: 10, 10, 10

// // 3. Sugestão: p = horasTrabalhadas
// //              t = remuneraçãoPorHora

// // //

// // Exercício de escrita de Código
// // Exercício 1

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// Esse tipo "undefined" foi impresso porque não há nenhum valor atribuido à variavel

let nome2 = prompt("Qual é o seu nome?")
let idade2 = prompt("Qual é a sua idade?")

console.log(typeof nome2)
console.log(typeof idade2)

// Todo typeof de prompt são retornadas em string.

console.log("Olá", nome2, "você tem", idade2, "anos")

// // Exercício 2

let coca = "Você gosta de coca-cola?"
let pizza = "Você gosta de pizza?"
let redbull = "Você gosta de energético?"


let respostaCoca = prompt("Você gosta de coca-cola?")
let respostaPizza = prompt("Você gosta de pizza?")
let respostaRedbull = prompt("Você gosta de energético?")


console.log(coca, respostaCoca)
console.log(pizza, respostaPizza)
console.log(redbull, respostaRedbull)


// // Exercício 3

let a = 10
let b = 25

a = b
b = a - 15

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// Desafio

let numero1 = prompt("Digite um numero aqui")
let numero2 = prompt("Digite outro numero aqui")

const numero1n = Number(numero1)
const numero2n = Number(numero2)

x = parseInt(numero1n) + parseInt(numero2n)
y = (numero1n * numero2n)

console.log("O valor de x é", x)
console.log("O valor de y é", y)