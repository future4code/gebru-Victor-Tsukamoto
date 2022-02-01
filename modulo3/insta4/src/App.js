import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
    render() {
        return ( <
            >
            <
            MainContainer >
            <
            Post nomeUsuario = { 'paulinha' }
            fotoUsuario = { 'https://picsum.photos/50/50' }
            fotoPost = { 'https://picsum.photos/200/150' }
            /> <
            /MainContainer> <
            MainContainer >
            <
            Post nomeUsuario = { 'vitinho' }
            fotoUsuario = { 'https://img.ibxk.com.br/2019/02/17/17124052466014.jpg' }
            fotoPost = { 'https://img.elo7.com.br/product/original/338BB23/painel-de-festa-paisagem-natureza-3x2-festa-infantil.jpg' }
            /> <
            /MainContainer> <
            MainContainer >
            <
            Post nomeUsuario = { 'jade' }
            fotoUsuario = { 'https://fotografiadicas.com.br/wp-content/uploads/2017/10/15-Como-fotografar-pessoas-Fotografia-Dicas.jpg' }
            fotoPost = { 'https://www.ocasaldafoto.com/wp-content/uploads/2018/09/Foto-de-Paisagem-Lago-da-Pampulha-Belo-Horizonte-Charles-Torres.jpg' }
            /> <
            /MainContainer> <
            />

        );
    }
}

export default App;