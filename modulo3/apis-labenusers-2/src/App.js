import React from 'react'
import SignUpScreen from './components/SignUpScreen';
import UsersListScreen from './components/UsersListScreen';
import styled from 'styled-components';


const TituloH1 = styled.h1`
display: flex;
color:  cadetblue;
justify-content: center;
margin-bottom:100px ;
`

class App extends React.Component {
  state = {
    renderedScreen: 'signUp'
  }

  chooseScreen = () => {
    switch (this.state.renderedScreen) {
      case 'signUp':
        return <SignUpScreen goToUsersListScreen={this.goToUsersListScreen} />
      case 'usersList':
        return <UsersListScreen goToSignUpScreen={this.goToSignUpScreen} />
      default:
        return <h2>Erro! Página não encontrada!</h2>
    }
  }

  goToSignUpScreen = () => {
    this.setState({ renderedScreen: 'signUp' })
  }

  goToUsersListScreen = () => {
    this.setState({ renderedScreen: 'usersList' })
  }

  render() {
    return (
      <div>
        <TituloH1>LabenUsers - Gebru <br/> [Exercício de integração de API's]</TituloH1>
        {this.chooseScreen()}
      </div>
    );
  }
}

export default App
