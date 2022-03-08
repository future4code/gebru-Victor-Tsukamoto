import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const TituloH3 = styled.h3`
display: flex;
color: cadetblue;
justify-content: center;
`

const DivInputs = styled.div`
display: flex;
justify-content: center;
`

const Button = styled.button`
display: flex;
background-color: aliceblue;
margin: 0 auto;
margin-top: 100px ;
`



class SignUpScreen extends React.Component {
  state = {
    nameInput: '',
    emailInput: ''
  }

  handleNameInput = (event) => {
    this.setState({ nameInput: event.target.value })
  }

  handleEmailInput = (event) => {
    this.setState({ emailInput: event.target.value })
  }

  createUser = async () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput
    }

    try {
      const res = await axios.post(url, body, {
        headers: {
          Authorization: 'victor-tsukamoto-gebru'
        }
      })

      alert(`Usuário ${this.state.nameInput} foi criado com sucesso!`)
      this.setState({ nameInput: '', emailInput: '' })
    } catch (error) {
      alert(error.response.data.message)
    }

  }

  render() {
    return (
      <div>
        <TituloH3>Tela de Cadastro de Pessoas Usuárias</TituloH3>
        <DivInputs>
          <input
            placeholder="Insira seu nome"
            value={this.state.nameInput}
            onChange={this.handleNameInput}
    
          />
          <input
            placeholder="Insira seu email"
            value={this.state.emailInput}
            onChange={this.handleEmailInput}
            
          />
          <button onClick={this.createUser} >Cadastrar</button>
        </DivInputs>
        
        <Button onClick={this.props.goToUsersListScreen}>Ir para Lista de Pessoas Usuárias</Button>
      </div>
    )
  }
}

export default SignUpScreen