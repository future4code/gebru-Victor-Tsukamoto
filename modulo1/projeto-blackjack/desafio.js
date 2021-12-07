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

projeto-blackjack

console.log("Boas vindas ao jogo de Blackjack!")
const novaRodada = confirm("Quer iniciar uma nova rodada?")
if (novaRodada === false) {
    console.log("O jogo acabou.")
} else if (novaRodada === true) {
    let carta1 = comprarCarta()
    let carta2 = comprarCarta()
        // console.log(`Usuário - Cartas: ${carta1.texto + carta2.texto} - Pontuação: ${carta1.valor + carta2.valor}`)

    let cartaComputador1 = comprarCarta()
    let cartaComputador2 = comprarCarta()

    // console.log(`Computador - Cartas: ${cartaComputador1.texto + cartaComputador2.texto} - Pontuação: ${cartaComputador1.valor + cartaComputador2.valor}`)

    let cartasJogador = ((carta1.valor + carta2.valor))
    let cartasComputador = ((cartaComputador1.valor + cartaComputador2.valor))


    if (cartaComputador1.texto === "A", cartaComputador2.texto === "A") {
        cartaComputador1 = comprarCarta()
        cartaComputador2 = comprarCarta()
    } else if (carta1.valor = "A", carta2.valor = "A") {
        carta1 = comprarCarta()
        carta2 = comprarCarta()
    }


    const novaCarta = confirm(
        `Suas cartas são ${carta1.texto} ${carta2.texto}. A carta revelada do computador é ${cartaComputador1.texto}. ` +
        "\n" +
        "Deseja comprar mais uma carta?"
    )

    if (novaCarta === false) {
        let cartasJogador = ((carta1.valor + carta2.valor))
        let cartasComputador = ((cartaComputador1.valor + cartaComputador2.valor))
        console.log(`Usuário - Cartas: ${carta1.texto + carta2.texto} - Pontuação: ${carta1.valor + carta2.valor}`)
        console.log(`Computador - Cartas: ${cartaComputador1.texto + cartaComputador2.texto} - Pontuação: ${cartaComputador1.valor + cartaComputador2.valor}`)

        if (cartasJogador > 21 + cartasComputador > 21) {

            console.log("Empate!")
        } else if (cartasJogador === cartasComputador) {
            console.log("Empate!")
        }
 projeto-blackjack
        if (cartasComputador <= 21, cartasJogador >= 22) {
            console.log("O computador ganhou!")
        } else if (cartasJogador <= 21, cartasComputador >= 22) {
            console.log("O Usuário Ganhou!")
        } else if (cartasJogador > cartasComputador) {

        if (cartasJogador > cartasComputador) {
 master
            console.log("O usuário ganhou!")
        } else if (cartasJogador < cartasComputador) {
            console.log("O computador ganhou!")
        }
    }
 projeto-blackjack


    if (novaCarta === true) {
        let carta3 = comprarCarta()
        let cartasJogador = ((carta1.valor + carta2.valor + carta3.valor))
        if (cartasJogador >= 21) {
            console.log(`Usuário - Cartas: ${carta1.texto + carta2.texto + carta3.texto} - Pontuação: ${carta1.valor + carta2.valor + carta3.valor}`)
            console.log(`Computador - Cartas: ${cartaComputador1.texto + cartaComputador2.texto} - Pontuação: ${cartaComputador1.valor + cartaComputador2.valor}`)
            if (cartasJogador > 21 + cartasComputador > 21) {
                console.log("Empate!")
            } else if (cartasJogador === cartasComputador) {
                console.log("Empate!")
            }
            if (cartasComputador <= 21, cartasJogador >= 22) {
                console.log("O computador ganhou!")
            } else if (cartasJogador <= 21, cartasComputador >= 22) {
                console.log("O Usuário Ganhou!")
            } else if (cartasJogador > cartasComputador) {
                console.log("O usuário ganhou!")
            } else if (cartasJogador < cartasComputador) {
                console.log("O computador ganhou!")
            }

        } else if (cartasJogador < 21) {
            const novaCarta2 = confirm(
                `Suas cartas são ${carta1.texto} ${carta2.texto} ${carta3.texto}. A carta revelada do computador é ${cartaComputador1.texto}. ` +
                "\n" +
                "Deseja comprar mais uma carta?")

            if (novaCarta2 === false) {
                let cartasJogador = ((carta1.valor + carta2.valor + carta3.valor))
                let cartasComputador = ((cartaComputador1.valor + cartaComputador2.valor))
                console.log(`Usuário - Cartas: ${carta1.texto + carta2.texto + carta3.texto} - Pontuação: ${carta1.valor + carta2.valor + carta3.valor}`)
                console.log(`Computador - Cartas: ${cartaComputador1.texto + cartaComputador2.texto} - Pontuação: ${cartaComputador1.valor + cartaComputador2.valor}`)

                if (cartasJogador > 21 + cartasComputador > 21) {
                    console.log("Empate!")
                } else if (cartasJogador === cartasComputador) {
                    console.log("Empate!")
                }
                if (cartasComputador <= 21, cartasJogador >= 22) {
                    console.log("O computador ganhou!")
                } else if (cartasJogador <= 21, cartasComputador >= 22) {
                    console.log("O Usuário Ganhou!")
                } else if (cartasJogador > cartasComputador) {
                    console.log("O usuário ganhou!")
                } else if (cartasJogador < cartasComputador) {
                    console.log("O computador ganhou!")
                }
            }


            if (novaCarta2 === true) {
                let carta4 = comprarCarta()
                let cartasJogador = ((carta1.valor + carta2.valor + carta3.valor + carta4.valor))
                if (cartasJogador >= 21) {
                    console.log(`Usuário - Cartas: ${carta1.texto + carta2.texto + carta3.texto + carta4.texto} - Pontuação: ${carta1.valor + carta2.valor + carta3.valor + carta4.valor}`)
                    console.log(`Computador - Cartas: ${cartaComputador1.texto + cartaComputador2.texto} - Pontuação: ${cartaComputador1.valor + cartaComputador2.valor}`)
                    if (cartasJogador > 21 + cartasComputador > 21) {
                        console.log("Empate!")
                    } else if (cartasJogador === cartasComputador) {
                        console.log("Empate!")
                    }
                    if (cartasComputador <= 21, cartasJogador >= 22) {
                        console.log("O computador ganhou!")
                    } else if (cartasJogador <= 21, cartasComputador >= 22) {
                        console.log("O Usuário Ganhou!")
                    } else if (cartasJogador > cartasComputador) {
                        console.log("O usuário ganhou!")
                    } else if (cartasJogador < cartasComputador) {
                        console.log("O computador ganhou!")
                    }
                }
            }
        }
    }
 master
}