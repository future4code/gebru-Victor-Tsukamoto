// Exercícios aula 06 - Funções

// Exercícios de interpretação de código

// Exercício 1

// a) 10 e 50
// b) Não apareceria nada porque não existiria o comando para aparecer no console.

// Exercício 2
// a) Essa função transforma os caracteres de uma string para minúsculos e confere se a palavra 'cenoura" se encontra na string. Essa string, no caso em questão, seria a variável
// perguntada pelo prompt ao usuário.

// b) 

// i. eu gosto de cenoura (true)
// ii. cenoura é bom pra vista (true)
// iii. cenouras crescem na terra (false)

// Exercícios de escrita de código

// Exercício 1


function ex1() {
    const nome1 = `Eu sou Victor, tenho 22 anos, moro em Londrina e sou estudante`
    console.log(nome1)
}
ex1()

function ex2() {
    const nome = prompt("Qual o seu nome?")
    const idade = Number(prompt("Qual é a sua idade?"))
    const cidade = prompt("Onde você mora?")
    const profissão = prompt("Qual é a sua profissão?")
    console.log("Eu sou ", nome, ", tenho ", idade, " anos, moro em ", cidade, " e sou ", profissão, ".")
}
ex2()

// Exercício 2

function ex3() {
    const num1 = Number(prompt("numero1"))
    const num2 = Number(prompt("numero2"))
    console.log(num1 + num2)
}
ex3()

function ex4() {
    const num3 = Number(prompt("numero3"))
    const num4 = Number(prompt("numero4"))
    console.log(num3 >= num4)
}
ex4()

function ex5() {
    const num5 = Number(prompt("numero5"))
    console.log(num5 % 2 == 0)
}
ex5()

function ex6() {
    const string1 = (prompt("string1"))
    console.log(string1.length)
    console.log(string1.toUpperCase())

}
ex6()

// Exercício 3

function soma() {

    console.log("Soma: ", num1 + num2)
}

function subtracao() {
    console.log("subtração: ", num1 - num2)
}

function multiplicacao() {
    console.log("multiplicação: ", num1 * num2)
}

function divisao() {
    console.log("divisão: ", num1 / num2)
}

const num1 = Number(prompt("Insira o primeiro número."))
const num2 = Number(prompt("Insira o segundo numero."))
console.log("Números inseridos: ", num1, " e ", num2)

soma()
subtracao()
multiplicacao()
divisao()