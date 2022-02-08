import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputAddPost = styled.div `
display:flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin-bottom: 10vh;
margin-top: 2vh;
`




class App extends React.Component {

    state = {
        valorInputUsuario: "",
        valorInputFoto: "",
        valorInputPost: "",
        post: [{
                nomeUsuario: "paulinha",
                fotoUsuario: "https://picsum.photos/50/50",
                fotoPost: "https://picsum.photos/200/150"
            },
            {
                nomeUsuario: "vitinho",
                fotoUsuario: "https://img.ibxk.com.br/2019/02/17/17124052466014.jpg",
                fotoPost: "https://img.elo7.com.br/product/original/338BB23/painel-de-festa-paisagem-natureza-3x2-festa-infantil.jpg"
            },
            {
                nomeUsuario: "jade",
                fotoUsuario: "https://fotografiadicas.com.br/wp-content/uploads/2017/10/15-Como-fotografar-pessoas-Fotografia-Dicas.jpg",
                fotoPost: "https://www.ocasaldafoto.com/wp-content/uploads/2018/09/Foto-de-Paisagem-Lago-da-Pampulha-Belo-Horizonte-Charles-Torres.jpg"
            }
        ]



    };

    adicionaPost = () => {
        const novoPost = {
            nomeUsuario: this.state.valorInputUsuario,
            fotoUsuario: this.state.valorInputFoto,
            fotoPost: this.state.valorInputPost
        }
        const novosPosts = [...this.state.post, novoPost];

        this.setState({ post: novosPosts });
    };


    onChangeInputUsuario = (event) => {

        this.setState({ valorInputUsuario: event.target.value });
    };

    onChangeInputFoto = (event) => {

        this.setState({ valorInputFoto: event.target.value });
    };

    onChangeInputPost = (event) => {

        this.setState({ valorInputPost: event.target.value });
    };

    render() {
        const listaDePosts = this.state.post.map((post) => {
            return ( <
                MainContainer >
                <
                Post > { post.nomeUsuario } <
                img src = { post.fotoUsuario } > < /img> <
                img src = { post.fotoPost } > < /img> <
                /Post> <
                /MainContainer>
            )
        })
        return ( <
            >
            <
            InputAddPost >
            <
            input

            value = { this.state.valorInputUsuario }

            onChange = { this.onChangeInputUsuario }
            placeholder = { "Username" }
            /> <
            input
            // Diferente do input acima, a variável de estado aqui é outra
            value = { this.state.valorInputFoto }
            // E a função também é outra
            onChange = { this.onChangeInputFoto }
            placeholder = { "Foto de Usuario" }
            /> <
            input
            // Diferente do input acima, a variável de estado aqui é outra
            value = { this.state.valorInputPost }
            // E a função também é outra
            onChange = { this.onChangeInputPost }
            placeholder = { "Foto do Post" }
            /> <
            button onClick = { this.adicionaPost } > Postar! < /button> <
            /InputAddPost> { listaDePosts } <
            />

        );
    }
}

export default App;