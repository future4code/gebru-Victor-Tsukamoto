// Exercícios Aula 05 - Strings e Arrays


//Exercícios de interpretação de código

// Exercício 1

// let array
// console.log('a. ', array)

//  a. Undefined

// array = null
// console.log('b. ', array)

//  b. Null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

//  c. 11

// let i = 0
// console.log('d. ', array[i])

// d. 3

// array[i + 1] = 19
// console.log(array)

//  e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i + 6]
// console.log('f. ', valor)

// f. 9

// Exercício 2

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// O resultado será: SUBI NUM ÔNIBUS EM MIRROCOS (27)

// Exercícios de escrita de código

// Exercício 1

const nomeDoUsuário = prompt("What's your name?")
const emaildoUsuário = prompt("What's your email?")

console.log("O e-mail " + emaildoUsuário.trim() + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuário + "!")

// Exercício 2

const comidasFavoritas = ["Japonesa", "Hamburguer", "Pastel", "Pão de Queijo", "Açai"]

// a) Imprima no console o array completo

console.log(comidasFavoritas)

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.

console.log("Essas são as minhas comidas preferidas: ")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

const comidaUsuário = prompt("Qual a sua comida favorita?")

comidasFavoritas[1] = comidaUsuário

console.log(comidasFavoritas)

// Exercício 3

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
const listaDeTarefas = []

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

const tarefaUsuário1 = prompt("Cite a 1ª tarefa que você precisa realizar hoje")
const tarefaUsuário2 = prompt("Cite a 2ª tarefa que você precisa realizar hoje")
const tarefaUsuário3 = prompt("Cite a 3ª tarefa que você precisa realizar hoje")
listaDeTarefas.push(tarefaUsuário1, tarefaUsuário2, tarefaUsuário3)

// c) Imprima o array no console

console.log(listaDeTarefas)

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

const tarefaRealizada = prompt("Qual tarefa você já realizou: 1ª, 2ª ou 3ª? Digite o numero 1, o 2 ou o 3!")

// e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(tarefaRealizada - 1)

// f) Imprima o array no console

console.log(listaDeTarefas)

// Desafio 1

const frase = prompt("Digite uma frase")
const fraseArray = frase.split(" ")
console.log(fraseArray)

// Desafio 2

const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(array.indexOf("Abacaxi"))
console.log(array.length)