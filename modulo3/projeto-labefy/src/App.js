import React from 'react'
import MenuScreen from './components/MenuScreen';
import PlaylistScreen from './components/PlaylistScreen';
import styled from 'styled-components';
import CreatePlaylistScreen from './components/CreatePlaylistScreen';
import PlaylistDetailsScreen from './components/PlaylistDetailsScreen';

const Header = styled.h1 `
display: flex;
color:  #1DB954;
justify-content: space-between;
align-items: center ;
margin-bottom: 10vh;
margin-top: -0vh ;
background-color: #282828;
height: 7.5vh ;
`

const HeaderPTitle = styled.p `
display: flex;
margin-right: 5vw;
font-size: smaller;
`

const HeaderP = styled.p `
display: flex;
margin-left: 5vw;
`


const DivBGColor = styled.div `
background-color: #121212;
max-height: 100vh;
min-height: 100vh;
width: 100vw ;
`

class App extends React.Component {
    state = {
        renderedScreen: 'menu',
        playlistId: ''
    }

    chooseScreen = () => {
        switch (this.state.renderedScreen) {
            case 'menu':
                return <MenuScreen goToPlaylistScreen = { this.goToPlaylistScreen }
                goToCreatePlaylistScreen = { this.goToCreatePlaylistScreen }
                /> 
            case 'playlists':
                return <PlaylistScreen goToMenuScreen = { this.goToMenuScreen }
                goToPlaylistDetailsScreen = { this.goToPlaylistDetailsScreen }
                playlistId = { this.state.playlistId }
                />
            case 'createplaylist':
                return <CreatePlaylistScreen goToMenuScreen = { this.goToMenuScreen }
                />
            case 'playlistdetails-screen':
                return <PlaylistDetailsScreen goToMenuScreen = { this.goToMenuScreen }
                playlistId = { this.state.playlistId }
                />
            default:
                return <h2 > Erro!Página não encontrada! < /h2>
        }
    }

    goToMenuScreen = () => {
        this.setState({ renderedScreen: 'menu' })
    }

    goToPlaylistScreen = () => {
        this.setState({ renderedScreen: 'playlists' })
    }

    goToCreatePlaylistScreen = () => {
        this.setState({ renderedScreen: 'createplaylist' })
    }
    goToPlaylistDetailsScreen = (playlistId) => {
        this.setState({ renderedScreen: 'playlistdetails-screen', playlistId: playlistId })
    }
    render() {
        return ( <
            DivBGColor >
            <
            Header > < HeaderP > Labefy < /HeaderP><HeaderPTitle>Not about just music.</HeaderPTitle > < /Header>

            { this.chooseScreen() } < /DivBGColor>
        );
    }
}


export default App;