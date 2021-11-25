// Exercícios aula 07 - Objetos - 21/11/2021

// Exercícios de interpretação de código

// Exercício 1

// a)
// Será impresso no console:
// Matheus Nachtergaele
// 3
// Canal: Globo 
//Horário: 14h

// Exercício 2

// a)
// console.log(cachorro)
// Nome: Juca
// idade: 3
// Raça: SRD

// console.log(gato)
// Nome: Juba
// idade: 3
// Raça: SRD

// console.log(tartaruga)
// Nome: Jubo
// idade: 3
// Raça: SRD

// b) Os três pontos (...) antes do nome de um objeto é chamado de Spread. Ele é responsável pelo "espelhamento" de um objeto anteriormente proclamado.

// Exercício 3

// a) 
// console.log(minhaFuncao(pessoa, "backender"))
// false

// console.log(minhaFuncao(pessoa, "altura"))
// undefined

// b) 
// O valor undefined foi impresso no console porque a propriedade "altura" não foi definida no objeto pessoa.

// Exercícios de escrita de código

// Exercício 1

// a)

const ex1a = {
    nome: "Victor",
    apelidos: ["Vitinho", "Vitão", "Vito"]
}

function funcaoex1(objeto) {

    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]},  ${objeto.apelidos[1]} ou  ${objeto.apelidos[2]}`)
}

funcaoex1(ex1a)

// b)

const ex1b = {
    ...ex1a,
    apelidos: ["Vitinho1", "Vitão1", "Vito1"]

}

funcaoex1(ex1b)

// Exercício 2

const pessoa1 = {
    nome: "Marcos",
    idade: 25,
    profissão: "Dentista"
}

const pessoa2 = {
    nome: "Luiz",
    idade: 24,
    profissão: "Marceneiro"
}

function ex2(pessoa) {
    console.log([pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissão, pessoa.profissão.length])
}

ex2(pessoa1)
ex2(pessoa2)

// Exercício 3

const carrinho = []
const fruta1 = {
    nome: "banana",
    disponibilidade: true
}
const fruta2 = {
    nome: "uva",
    disponibilidade: true
}
const fruta3 = {
    nome: "limao",
    disponibilidade: true
}

function ex3(frutas) {
    carrinho.push(frutas)
}

ex3(fruta1.nome)
ex3(fruta2.nome)
ex3(fruta3.nome)
console.log(carrinho)

// Desafio 1

function desafio1() {
    const nome = prompt("Qual o seu nome?")
    const idade = prompt("Qual é a sua idade?")
    const profissão = prompt("Qual é a sua profissão?")
    console.log(objetoDesafio1 = {
            nome: nome,
            idade: idade,
            profissão: profissão
        },
        typeof objetoDesafio1)
}
desafio1()

// Desafio 2

function desafio2() {
    filme1 = {
        anoDeLancamento: 2013,
        nome: "About Time"
    }
    filme2 = {
        anoDeLancamento: 2008,
        nome: "Sim, Senhor"
    }
    console.log("O primeiro filme foi lançado antes do segundo?", filme1.anoDeLancamento < filme2.anoDeLancamento)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.anoDeLancamento === filme2.anoDeLancamento)
}
desafio2()

// Desafio 3

function desafio3(frutas) {
    console.log(!frutas.disponibilidade)
}

desafio3(fruta1)
desafio3(fruta2)
desafio3(fruta3)