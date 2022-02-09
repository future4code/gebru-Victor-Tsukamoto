import React from 'react'
import styled from 'styled-components'

const InputBox = styled.input `
width: 30vw;
margin: 0 auto;
display: flex;
margin-bottom: 5vh;

`
const PerguntaH1 = styled.h1 `
font-weight: bold;
text-align: center;
`

const PerguntaH2 = styled.h3 `
text-align: center;
`


export default class Pagina3 extends React.Component {

    state = {
        inputPergunta7: "",
        inputPergunta8: ""

    }

    onChangePergunta7 = (event) => {
        this.setState({ inputPergunta7: event.target.value });
    }

    onChangePergunta8 = (event) => {
        this.setState({ inputPergunta8: event.target.value });
    }

    render() {
        return < >
            <
            PerguntaH1 > ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO < /PerguntaH1>; <
            PerguntaH2 > 7. Por que você não terminou um curso de graduação ? < /PerguntaH2> <
            InputBox
        placeholder = { '' }
        value = { this.state.inputPergunta7 }
        onChange = { this.onChangePergunta7 }
        /> <
        PerguntaH2 > 8. Você fez algum curso complementar ? < /PerguntaH2> <
            InputBox
        placeholder = { '' }
        value = { this.state.inputPergunta8 }
        onChange = { this.onChangePergunta8 }
        />

        <
        />
    }
}