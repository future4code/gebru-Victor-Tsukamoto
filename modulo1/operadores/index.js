// Exercícios Aula 04 - Operadores e Lógica de Programação

// Exercícios de interpretação de código

// Exercício 1

// a. false
// b. false
// c. true
// d. boolean

// Exercício 2 e 3

// O Código do colega:

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// As variáveis que retornam do prompt são strings,
// ou seja, ao efetuar a soma de duas strings, elas concatenam, uma vez que só é possivel realizar operações aritméticas com variaveis number.
// Será impresso no console as variaveis uma seguida da outra, como por exemplo: primeiroNumero = 1 e segundoNumero = 2: soma = 12.
// Dessa maneira, o colega deverá realizar a conversão de tipos, transformando as variaveis em number:

// let primeiroNumero = Number(prompt("Digite um Numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// Exercícios de escrita de código

// Exercício 1

const idade1 = prompt("Qual é a sua idade?")
const idadeMelhorAmigo1 = prompt("Qual é a idade do seu melhor amigo?")

console.log("Sua idade é maior do que a do seu melhor amigo? ", idade1 > idadeMelhorAmigo1)
console.log("Diferença de idade: ", idade1 - idadeMelhorAmigo1)

// Exercício 2

const numeroPar = prompt("Insira um número par")

console.log("O resto da divisão: ", numeroPar % 2)

// Todo número par dividido por 2 terá resto 0.
// Todo número ímpar terá resto 1.

// Exercício 3

const idade3 = prompt("Qual é a sua idade em anos?")
console.log("Idade em meses: ", idade3 * 12, "meses.")
console.log("Idade em dias: ", idade3 * 365, "dias.")
console.log("Idade em horas: ", idade3 * 8760, "horas.")

// Exercício 4

const numero1 = prompt("Digite um número")
const numero2 = prompt("Digite outro número")

console.log("O primeiro número é maior que o segundo? ", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo? ", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo? ", numero1 % numero2 === 0)
console.log("O segundo numero é divisível pelo primeiro? ", numero2 % numero1 === 0)

// Desafios

// Desafio 1

// a)

const fahrenheit1 = 77
const kelvin1 = (fahrenheit1 - 32) * (5 / 9) + 273.15

console.log("77° Fahrenheit é equivalente a ", kelvin1, "graus Kelvin.")

// // b)

const celsius2 = 80
const fahrenheit2 = (celsius2) * (9 / 5) + 32

console.log("80° Celsius é equivalente a", fahrenheit2, "graus Fahrenheit.")

// // c)

const celsius3 = 30
const fahrenheit3 = (celsius3) * (9 / 5) + 32
const kelvin3 = (fahrenheit3 - 32) * (5 / 9) + 273.15

console.log("30° Celsius é equivalente a", fahrenheit3, "graus Fahrenheit.")
console.log("30° Celsius é equivalente a", kelvin3, "graus Kelvin.")

// // d)

const celsius4 = prompt("Insire aqui a temperatura em graus Celsius que deseja converter!")
const celsius4number = Number(celsius4)

const fahrenheit4 = (celsius4number) * (9 / 5) + 32
const kelvin4 = (fahrenheit4 - 32) * (5 / 9) + 273.15

console.log(celsius4, "Celsius é equivalente a", fahrenheit4, "graus Fahrenheit.")
console.log(celsius4, "Celsius é equivalente a", kelvin4, "graus Kelvin.")

// Desafio 2

const quilowatts = prompt("Insira a quantidade de Quilowatts consumida por sua residência")
const desconto = prompt("Insira aqui a quantidade de desconto.")
const quilowattsNumber = Number(quilowatts)
const descontoNumber = Number(desconto)
const valorPago = (quilowattsNumber) * 0.05
const descontoEmValor = (valorPago / 100) * descontoNumber

console.log("Seu consumo em quilowatts hora equivale a ", valorPago, "reais.")

console.log("O valor a ser pago com o desconto inserido é de ", (valorPago) - (descontoEmValor))

// // a) Se a quantidade de Quilowatts for 280, o valor a ser pago será de 14 reais.
// // b) Se o desconto for de 15%, o valor a ser pago será de R$11,90.

// Desafio 3

// a)

const libras1 = 20
const quilogramas1 = libras1 / 2.2046

console.log("20lb equivalem a", quilogramas1, "kg.")

// b)

const oz2 = 10.5
const quilogramas2 = oz2 / 35.274

console.log("10.5oz equivalem a ", quilogramas2, "kg.")

// c)

const mi3 = 100
const metros3 = mi3 * 1609

console.log("100mi equivalem a ", metros3, "m.")

// d)

const pés4 = 50
const metros4 = pés4 / 3.333

console.log("50ft equivalem a", metros4, "m.")

// e)

const galão5 = 103.56
const litros5 = galão5 * 3.806

console.log("103.56gal equivalem a", litros5, "l.")

// f)

const xicara6 = 450
const litros6 = (xicara6 * 6) / 25

console.log("450 xic equivalem a", litros6, "l.")

// g)

const milhas = prompt("Insira a quantidade de milhas que queira transformar em metros! =)")
const milhasNumber = Number(milhas)
const metros = milhasNumber * 1609

console.log("O valor inserido em milhas equivale a ", metros, "metros.")