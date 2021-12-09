// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}
retornaTamanhoArray()

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    function numerosPares(valorDoArray) {
        if (valorDoArray % 2 == 0)
            return valorDoArray;
    }
    let numerosPares2 = array.filter(numerosPares);
    return numerosPares2
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    function numerosPares(valorDoArray) {
        if (valorDoArray % 2 == 0)
            return valorDoArray;
    }
    let numerosPares2 = array.filter(numerosPares);
    let numerosParesElevadosADois = []

    for (let i = 0; i < numerosPares2.length; i++) {
        numerosParesElevadosADois.push((Math.pow(numerosPares2[i], 2)))
    }
    return numerosParesElevadosADois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const maiorNumero = Math.max(...array)
    return maiorNumero
}

// EXERCÍCIO 07

function retornaObjetoEntreDoisNumeros(num1, num2) {
    const numerosArray = ([num1, num2])
    const numeroMenor = Math.min(...numerosArray)
    const numeroMaior = Math.max(...numerosArray)
    const objeto = {
        maiorNumero: numeroMaior,
        maiorDivisivelPorMenor: (numeroMaior % numeroMenor == 0),
        diferenca: (numeroMaior - numeroMenor)
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const retornaNumerosPares = (n) => {
        const array = []

        for (let i = 0; array.length < n; i++) {
            if (i % 2 === 0) {
                array.push(i)
            }
        }
        return array
    }

    return retornaNumerosPares(n)
}



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    const ladoANumber = Number(ladoA)
    const ladoBNumber = Number(ladoB)
    const ladoCNumber = Number(ladoC)

    if (ladoANumber == ladoBNumber && ladoANumber == ladoCNumber) {
        return "Equilátero"
    } else if (ladoANumber != ladoBNumber && ladoANumber != ladoCNumber && ladoBNumber != ladoCNumber) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1
        return 0
    })

    const maiorNumero = array[array.length - 2]
    const menorNumero = array[1]
    return [maiorNumero, menorNumero]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}