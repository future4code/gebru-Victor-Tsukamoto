import React from 'react'

import styled from 'styled-components'

const DivBGColor = styled.div `
background-color: #121212;
`

const TituloH3 = styled.h3 `
display: flex;
color: #1DB954;
justify-content: center;
`

const ButtonDiv = styled.div `
display: flex;
justify-content: center;
margin-right: 10px;
`

const Button = styled.button `
display: flex;
background-color: #181818;
padding: 10px;
margin-top: 100px ;
color: white;
`



class MenuScreen extends React.Component {
    state = {

    }



    render() {
        return ( <
            DivBGColor >
            <
            TituloH3 > What do you want to do today ? < /TituloH3>

                <
                ButtonDiv >
                <
                Button onClick = { this.props.goToCreatePlaylistScreen } > Create a Playlist < /Button> <
            Button onClick = { this.props.goToPlaylistScreen } > Show my Playlists < /Button> </ButtonDiv >

            <
            /DivBGColor>
        )
    }
}

export default MenuScreen