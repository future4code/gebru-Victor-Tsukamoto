import React from "react";
import axios from "axios";
import styled from 'styled-components';

const EstiloInput = styled.div `
  display: grid;
  align-items: center;
  text-align: center;
  padding: 10px;
`
const EstiloPage = styled.div `
  display: grid;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 10px;
`

const headers = {
    headers: {
        Authorization: "bruno-moura-gebru"
    }
}

const TituloH3 = styled.h3 `
display: flex;
color:  #1DB954;
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

export default class DetalhePlaylist extends React.Component {

    state = {
        tracks: [],
        inputNameMusic: '',
        inputNameArtist: '',
        inputLinkMusic: ''
    }

    componentDidMount() {
        this.getPlaylistTracks()
    }

    getPlaylistTracks = (playlistId) => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, headers)
            .then(res => {
                this.setState({ tracks: res.data.result.tracks })
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    removeTrackFromPlaylist = (trackId) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${trackId}`, headers)
            .then(res => {
                alert('Música deletada com sucesso!')
                this.getPlaylistTracks()
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    addTrackToPlaylist = (playlistId) => {
        const body = {
            name: this.state.inputNameMusic,
            artist: this.state.inputNameArtist,
            url: this.state.inputLinkMusic
        }
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, body, headers)
            .then(res => {
                alert(`A música ${this.state.inputNameMusic} foi adicionada com sucesso!`)
                this.setState({ inputNameMusic: '' })
                this.setState({ inputNameArtist: '' })
                this.setState({ inputLinkMusic: '' })
                this.getPlaylistTracks()
            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }



    onMusicNameChange = (event) => {
        this.setState({ inputNameMusic: event.target.value })
    }

    onArtistNameChange = (event) => {
        this.setState({ inputNameArtist: event.target.value })
    }

    onLinkMusicChange = (event) => {
        this.setState({ inputLinkMusic: event.target.value })
    }

    render() {

        const renderedTracks = this.state.tracks.map((tracks) => {
            return <li key = { tracks.id } > < audio src = { tracks.url }
            controls / > { tracks.name } - { tracks.artist } <
                button onClick = {
                    () => this.removeTrackFromPlaylist(tracks.id) } > Delete that song < /button> </li >
        });

        return ( <
            div >
            <
            TituloH3 > Add Music < /TituloH3> <
            EstiloInput >
            <
            input placeholder = "Music name"
            value = { this.state.inputNameMusic }
            onChange = { this.onMusicNameChange }
            /> <
            input placeholder = "Artist name"
            value = { this.state.inputNameArtist }
            onChange = { this.onArtistNameChange }
            /> <
            input placeholder = "Music link"
            value = { this.state.inputLinkMusic }
            onChange = { this.onLinkMusicChange }
            /> <
            /EstiloInput> <
            Button onClick = { this.addTrackToPlaylist } > Add Music < /Button> <
            Button onClick = { this.props.goToMenuScreen } > Go to home page < /Button> <
            div > { renderedTracks } < /div>

            <
            /div>
        );
    }
}