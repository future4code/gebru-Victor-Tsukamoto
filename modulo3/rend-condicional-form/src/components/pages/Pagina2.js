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


export default class Pagina2 extends React.Component {

    state = {
        inputPergunta5: "",
        inputPergunta6: ""

    }

    onChangePergunta5 = (event) => {
        this.setState({ inputPergunta5: event.target.value });
    }

    onChangePergunta6 = (event) => {
        this.setState({ inputPergunta6: event.target.value });
    }

    render() {
        return < >
            <
            PerguntaH1 > ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR < /PerguntaH1>; <
            PerguntaH2 > 5. Qual curso ? < /PerguntaH2> <
            InputBox
        placeholder = { '' }
        value = { this.state.inputPergunta5 }
        onChange = { this.onChangePergunta5 }
        /> <
        PerguntaH2 > 6. Qual é a sua unidade do curso ? < /PerguntaH2> <
                InputBox
            placeholder = { '' }
        value = { this.state.inputPergunta6 }
        onChange = { this.onChangePergunta6 }
        />

        <
        />
    }
}