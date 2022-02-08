import React from 'react'
import './App.css';
import styled from 'styled-components'

const MensagemCard = styled.p `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;

`
const NameText = styled.p `
font-weight: bold;

`

const MessageText = styled.p `
  color: green;
  margin-left: 20px;
`
const TituloLabewhats = styled.h1 `
text-align: center;
`

const InputsMensagens = styled.div `
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;

`
const MensagensContainer = styled.div `
width: 90vw;
height: 80vh;
border: 1px solid black;
margin-left: 5vw;
margin-bottom: 1vh;
background-color: #E5DDD5;
`

const InputMensagemBox = styled.input `
width: 40vw;
height: 5vh;
`
const InputNomeBox = styled.input `
width: 10vw;
height: 5vh;
`
const EnviarButton = styled.button `
width: 10vw;
height: 5.5vh;
`

class App extends React.Component {
    state = {
        inputNome: '',
        inputMensagem: '',
        mensagemState: [
            { id: 1, nome: 'LabeWhats Bot', mensagem: "Olá! Seja bem vindo ao LabeWhats! Insira seu nome de usuário abaixo e sua mensagem! =) [Caso queira deletar a mensagem, dê um double click em cima dela]" },

        ]
    }

    guardaNome = (event) => {
        this.setState({ inputNome: event.target.value })
    }

    guardaMensagem = (event) => {
        this.setState({ inputMensagem: event.target.value })
    }

    addMensagem = () => {

        const newMessage = {
            id: Math.random(),
            nome: this.state.inputNome,
            mensagem: this.state.inputMensagem
        }


        const copiaMensagem = [...this.state.mensagemState, newMessage]



        this.setState({ mensagemState: copiaMensagem })


        this.setState({ inputNome: '', inputMensagem: '' })


    }

    deleteMessage = (idDaMensagemParaApagar) => {
        const copiaMensagem = [...this.state.mensagemState]

        const newMessageList = copiaMensagem.filter((mensagem) => {
            return mensagem.id !== idDaMensagemParaApagar
        })

        this.setState({ mensagemState: newMessageList })
    }



    render() {
        const mensagem = this.state.mensagemState.map((mensagem) => {
            return (

                <
                MensagemCard onDoubleClick = {
                    () => this.deleteMessage(mensagem.id) }
                key = { mensagem.id } >
                <
                NameText > { mensagem.nome }: < /NameText> <
                MessageText > { mensagem.mensagem } < /MessageText>

                <
                /MensagemCard>

            )
        })

        return ( <
            > < div >
            <
            TituloLabewhats > LabeWhats < /TituloLabewhats>

            <
            /div> <
            MensagensContainer >

            { mensagem } <
            /MensagensContainer> <
            InputsMensagens >
            <
            InputNomeBox placeholder = { 'Nome' }
            value = { this.state.inputNome }
            onChange = { this.guardaNome }
            /> <
            InputMensagemBox placeholder = { 'Mensagem' }
            value = { this.state.inputMensagem }
            onChange = { this.guardaMensagem }
            /> <
            EnviarButton onClick = { this.addMensagem } > Enviar Mensagem < /EnviarButton> <
            /InputsMensagens>

            <
            />
        )
    }
}


export default App;