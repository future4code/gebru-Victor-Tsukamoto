import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const UserCard = styled.div `
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border: 1px solid #1DB954;
  width: 300px;
  height: 50px;
`
const TituloH3 = styled.h3 `
display: flex;
color:  #1DB954;
justify-content: center;
`

const CenterTheSpan = styled.span `
display: flex;
margin: 0 auto;
margin-top:12px;
`
const Button = styled.button `
display: flex;
background-color: #181818;
margin: 0 auto;
margin-top: 100px ;
color: white;
padding: 10px;
`

class PlaylistScreen extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = async() => {
        try {
            const res = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
                headers: {
                    Authorization: 'victor-tsukamoto-gebru'
                }
            })

            this.setState({ playlists: res.data })
        } catch (err) {
            console.log(err.response)
        }


    }

    deletePlaylist = async(playlistId) => {
        try {
            const res = await axios.delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, {
                    headers: {
                        Authorization: 'victor-tsukamoto-gebru'
                    }
                })

            alert('Playlist deletada com sucesso!')
            this.getAllPlaylists()
        } catch (err) {
            console.log(err.response)
        }


    }

    render() {
        const renderedPlaylists = this.state.playlists.map((playlists) => {
            return ( <
                UserCard key = { playlists.id } >
                <
                CenterTheSpan > { playlists.name } < /CenterTheSpan> <
                button onClick = {
                    () => this.deletePlaylist(playlists.id) } > Apagar playlist { playlists.name } < /button> <
                /UserCard>
            )
        })

        return ( <
            div >
            <
            TituloH3 > Playlists: < /TituloH3> { renderedPlaylists } <
            Button onClick = { this.props.goToMenuScreen } > Ir para Cadastro < /Button> <
            /div>
        )
    }
}

export default PlaylistScreen