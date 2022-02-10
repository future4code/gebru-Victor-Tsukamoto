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

export default class Home extends React.Component {
    state = {
        inputPergunta1: "",
        inputPergunta2: "",
        inputPergunta3: "",
        inputPergunta4: ""
    }

    onChangePergunta1 = (event) => {
        this.setState({ inputPergunta1: event.target.value });
    }

    onChangePergunta2 = (event) => {
        this.setState({ inputPergunta2: event.target.value });
    }

    onChangePergunta3 = (event) => {
        this.setState({ inputPergunta3: event.target.value });
    }

    onChangePergunta4 = (event) => {
        this.setState({ inputPergunta4: event.target.value });
    }





    render() {
        return < >
            <
            PerguntaH1 > ETAPA 1 - DADOS GERAIS < /PerguntaH1>; <
            PerguntaH2 > 1. Qual o seu nome ? < /PerguntaH2> <
            InputBox
        placeholder = { '' }
        value = { this.state.inputPergunta1 }
        onChange = { this.onChangePergunta1 }
        /> <
        PerguntaH2 > 2. Qual é a sua idade ? < /PerguntaH2> <
            InputBox
        placeholder = { '' }
        value = { this.state.inputPergunta2 }
        onChange = { this.onChangePergunta2 }
        /> <
        PerguntaH2 > 3. Qual é seu email ? < /PerguntaH2> <
            InputBox
        placeholder = { '' }
        value = { this.state.inputPergunta3 }
        onChange = { this.onChangePergunta3 }
        /> <
        PerguntaH2 > 4. Qual é sua escolaridade ? < /PerguntaH2> <
            InputBox
        placeholder = { '' }
        value = { this.state.inputPergunta4 }
        onChange = { this.onChangePergunta4 }
        /> <
        />
    }
}