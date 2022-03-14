import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const DivBGColor = styled.div `
background-color: #121212;
`

const TituloH3 = styled.h3 `
display: flex;
color: #1DB954;
justify-content: center;
`

const DivInputs = styled.div `
display: flex;
justify-content: center;
`

const Button = styled.button `
display: flex;
background-color: #181818;
margin: 0 auto;
margin-top: 100px ;
color: white;
padding: 10px;
`



class CreatePlaylistScreen extends React.Component {
    state = {
        playlistNameInput: '',

    }

    handlePlaylistNameInput = (event) => {
        this.setState({ playlistNameInput: event.target.value })
    }


    createPlaylist = async() => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        const body = {
            name: this.state.playlistNameInput

        }

        try {
            const res = await axios.post(url, body, {
                headers: {
                    Authorization: 'victor-tsukamoto-gebru'
                }
            })

            alert(`Playlist ${this.state.playlistNameInput} foi criada com sucesso!`)
            this.setState({ playlistNameInput: '' })
        } catch (error) {
            alert(error.response.data.message)
        }

    }

    render() {
        return ( <
            DivBGColor >
            <
            TituloH3 > Create yours playlist name < /TituloH3> <
            DivInputs >
            <
            input placeholder = "Insira o nome da sua playlist =)"
            value = { this.state.playlistNameInput }
            onChange = { this.handlePlaylistNameInput }

            />

            <
            button onClick = { this.createPlaylist } > Criar < /button> </DivInputs > <
            Button onClick = { this.props.goToMenuScreen } > Voltar para a página inicial < /Button> </DivBGColor >
        )
    }
}

export default CreatePlaylistScreen