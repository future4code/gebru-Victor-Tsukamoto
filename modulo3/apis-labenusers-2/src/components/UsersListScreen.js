import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border: 1px solid cadetblue;
  width: 300px;
  height: 50px;
`
const TituloH3 = styled.h3`
display: flex;
color:  cadetblue;
justify-content: center;
`

const CenterTheSpan = styled.span`
display: flex;
margin: 0 auto;
margin-top:12px;
`
const Button = styled.button`
display: flex;
background-color: aliceblue;
margin: 0 auto;
margin-top: 100px ;
`

class UsersListScreen extends React.Component {
  state = {
    usersList: []
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = async () => {
    try {
      const res = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
          Authorization: 'victor-tsukamoto-gebru'
        }
      })

      this.setState({ usersList: res.data })
    } catch (err) {
      console.log(err.response)
    }


  }

  deleteUser = async (userId) => {
    try {
      const res = await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
        headers: {
          Authorization: 'victor-tsukamoto-gebru'
        }
      })

      alert('Usuário deletado com sucesso!')
      this.getAllUsers()
    } catch (err) {
      console.log(err.response)
    }


  }

  render() {
    const renderedUsersList = this.state.usersList.map((user) => {
      return (
        <UserCard key={user.id}>
          <CenterTheSpan>{user.name}</CenterTheSpan>
          <button onClick={() => this.deleteUser(user.id)}>Apagar {user.name}</button>
        </UserCard>
      )
    })

    return (
      <div>
        <TituloH3>Tela com a Lista de Pessoas Usuárias</TituloH3>
        {renderedUsersList}
        <Button onClick={this.props.goToSignUpScreen} >Ir para Cadastro</Button>
      </div>
    )
  }
}

export default UsersListScreen