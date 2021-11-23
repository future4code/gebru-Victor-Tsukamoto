// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')

    console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    // implemente sua lógica aqui

    const altura = prompt("Digite a altura")
    const largura = prompt("Digite a largura")
    const alturaNumber = Number(altura)
    const larguraNumber = Number(largura)

    console.log(alturaNumber * larguraNumber)
}

// EXERCÍCIO 02
function imprimeIdade() {
    // implemente sua lógica aqui

    const anoAtual = prompt("Em que ano estamos?")
    const anoDeNascimento = prompt("Que ano você nasceu?")

    console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
    const IMC = peso / (altura * altura)
    return IMC
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

    const nome = prompt()
    const idade = prompt()
    const email = prompt()

    console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui

    const cor1 = prompt()
    const cor2 = prompt()
    const cor3 = prompt()
    const coresFavoritas = [cor1, cor2, cor3]

    console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui

    stringMaiusculo = string.toUpperCase()
    return stringMaiusculo

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui

    numeroDeIngressos = custo / valorIngresso
    return numeroDeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui

    const tamanhoDasStrings = string1.length === string2.length
    return tamanhoDasStrings
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui

    const primeiroElemento = (array[0])

    return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui

    const ultimoElemento = array.slice(-1)[0]
    return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui

    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];

    return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
    const iguais = string1.toUpperCase() === string2.toUpperCase()

    return iguais
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
    // implemente sua lógica aqui

    const anoAtual2 = prompt("Em que ano estamos?")
    const anoDeNascimento2 = prompt("Em que ano você nasceu?")
    const anoCarteiraDeIdentidade = prompt("Em que ano sua carteira de identidade foi emitida?")

    const idade2 = anoAtual2 - anoDeNascimento2
    const prazoRenovação = anoAtual2 - anoCarteiraDeIdentidade


    if (idade2 <= 20) {
        result = (prazoRenovação >= 5)
    } else if (idade2 > 20 <= 50) {
        result = (prazoRenovação >= 10)
    }
    if (idade2 > 50) {
        result = (prazoRenovação >= 15)
    }

    console.log(result)
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    // implemente sua lógica aqui

    const bissexto = (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)
    return bissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui

    const idade3 = prompt("Você tem mais de 18 anos?")
    const ensino = prompt("Você possui ensino médio completo?")
    const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
    const sim1 = idade3 === "sim"
    const sim2 = ensino === "sim"
    const sim3 = disponibilidade === "sim"
    const sim4 = sim1 === sim2 === sim3

    console.log(sim4)
}