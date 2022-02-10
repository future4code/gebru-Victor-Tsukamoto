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


export default class PaginaFinal extends React.Component {

    render() {
        return < >
            <
            PerguntaH1 > O FORMULÁRIO ACABOU! < /PerguntaH1>; <
            PerguntaH2 > Muito obrigado pela participação! < br / > Entraremos em contato em breve! < /PerguntaH2> <
            />
    }
}