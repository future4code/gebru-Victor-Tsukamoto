// Exercícios de interpretação de código

// Exercício 1

// a) Será impresso no console 3 objetos, cada um contendo 1 array. O objeto terá o nome e o apelido referente ao index (0, 1 e 2), no entanto, exibirá também o array completo.

// Exercício 2

// a) Será impresso no console um novo array contendo os nomes definidos no objeto.

// Exercício 3

// a) Será impresso no console um novo array   { nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }, com exceção do nome da Chijo.

// Exercícios de Escrita de Código

// Exercício 1

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a)

const retornarNomePets = (pet) => {
    return pet.nome
}

const nomeDosPets = pets.map(retornarNomePets)
console.log(nomeDosPets)

// b) 

const retornarRacaPets = (pet) => {
    return pet.raca === "Salsicha"
}

const racaSalsicha = pets.filter(retornarRacaPets)
console.log(racaSalsicha)

// c)

const retornarMensagemPoodles = (pet) => {
    return pet.raca === "Poodle"
}

const mensagemPoodle = pets.filter(retornarMensagemPoodles)
console.log(mensagemPoodle)
const descobrirNomePoodle = mensagemPoodle.map(retornarNomePets)
console.log(descobrirNomePoodle)
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${descobrirNomePoodle[0]}`)
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${descobrirNomePoodle[1]}`)

// Exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a)

const apenasNomesDosProdutos = (produto) => {
    return produto.nome
}

const nomeDosProdutos = produtos.map(apenasNomesDosProdutos)
console.log(nomeDosProdutos)

// b) 

const novoArrayB = produtos.map((produto) => {
    return { nome: produto.nome, preco: (produto.preco * 0.95).toFixed(2) }
})
console.log(novoArrayB)



// c) 
const apenasBebidas = (produto) => {
    return produto.categoria === "Bebidas"
}

const bebidas = produtos.filter(apenasBebidas)
console.log(bebidas)

// d)
const apenasYpe = produto => {
    return produto.nome.includes("Ypê")
}

const produtosYpe = produtos.filter(apenasYpe)
console.log(produtosYpe)

// e)


const apenasNomeProdutosYpe = (produtosYpe) => {
    console.log("Compre", produtosYpe.nome, "por", produtosYpe.preco)
}

const novoArrayE = produtosYpe.map(apenasNomeProdutosYpe)
console.log(novoArrayE)

// Desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

const novoArrayDesafio = (pokemon) => {
    return pokemon.nome
}

const pokemonOrdemAlfabetica = pokemons.map(novoArrayDesafio)
console.log(pokemonOrdemAlfabetica.sort())

const novoArrayDesafioTipo = (pokemon) => {
    return pokemon.tipo
}

const pokemonTipoSemRepeticao = pokemons.map(novoArrayDesafioTipo)
console.log(new Set(pokemonTipoSemRepeticao))