import React, { Component } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div `
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input `
    width: 100%;
    margin-right: 5px;
`

const Comentario = console.log()

export class SecaoComentario extends Component {
    state = {
        inputValue: "",
    }

    onChangeComentario = (event) => {
        this.setState({ inputValue: event.target.value });
        console.log(this.state.inputValue)
    }

    render() {
        return <CommentContainer >
            <
            InputComentario
        placeholder = { 'Comente aqui!' }
        value = { this.state.inputValue }
        onChange = { this.onChangeComentario }
        /> <
        button onClick = { this.props.aoEnviar } > Enviar < /button> <
            /CommentContainer>
    }
}