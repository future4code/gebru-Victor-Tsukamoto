/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// console.log("Boas vindas ao jogo de Blackjack!")
// const novaRodada = confirm("Quer iniciar uma nova rodada?")
// if (novaRodada === false) {
//     console.log("O jogo acabou.")
// } else if (novaRodada === true) {
//     const carta1 = comprarCarta()
//     const carta2 = comprarCarta()
//     console.log(`Usuário - Cartas: ${carta1.texto + carta2.texto} - Pontuação: ${carta1.valor + carta2.valor}`)
//     const cartaComputador1 = comprarCarta()
//     const cartaComputador2 = comprarCarta()
//     console.log(`Computador - Cartas: ${cartaComputador1.texto + cartaComputador2.texto} - Pontuação: ${cartaComputador1.valor + cartaComputador2.valor}`)
//     const cartasJogador = (carta1.valor + carta2.valor)
//     const cartasComputador = (cartaComputador1.valor + cartaComputador2.valor)



//     if (cartasJogador > 21 + cartasComputador > 21) {
//         console.log("Empate!")
//     } else if (cartasJogador === cartasComputador) {
//         console.log("Empate!")
//     }
//     if (cartasComputador <= 21, cartasJogador >= 22) {
//         console.log("O computador ganhou!")
//     } else if (cartasJogador <= 21, cartasComputador >= 22) {
//         console.log("O Usuário Ganhou!")
//     } else if (cartasJogador > cartasComputador) {
//         console.log("O usuário ganhou!")
//     } else if (cartasJogador < cartasComputador) {
//         console.log("O computador ganhou!")
//     }

// }