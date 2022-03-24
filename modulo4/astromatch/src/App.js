import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { HomePage } from './pages/HomePage'
import { Matches } from './pages/Matches'
import { Clear } from './components/Clear';

const Title = styled.h1 `
display: flex;
justify-content: center;
margin: 0 auto;
`

const ResponsePage = styled.div `
width: 100vw;
height: 100vh;
max-width: 100vw;
max-height: 100vh;
background-color: #FF7F50;
`

const ButtonShowMatches = styled.button `
background-color: lightblue;
color: black;
border: 1px solid black;
border-radius: 10px;

display: flex;
margin: 0 auto;
margin-top: 2vh;;
margin-bottom: 4vh;;

@media(max-width: 1000px) {
    margin-top: 1vh;;
margin-bottom: 1vh;;
}
`

const Footer = styled.footer `
display: flex;
align-items: flex-end;
justify-content: center;

`

const App = () => {

    const [screen, setScreen] = useState("HomePage")

    const changePage = () => {
        if (screen === "HomePage") {
            setScreen("Matches")
        } else {
            setScreen("HomePage")
        }
    }

    return ( <
        ResponsePage >
        <
        Title > Astromatch < /Title> <
        ButtonShowMatches onClick = { changePage } > < b > Ver Matches < /b></ButtonShowMatches >
        <
        > { screen === "HomePage" ? < HomePage / > : < Matches / > } <
        /> <
        Clear / >
        <
        Footer >
        <
        a href = "https://www.linkedin.com/in/victorytsukamoto" > < img src = "https://img.icons8.com/ios/50/000000/linkedin.png" / > < /a> <
        a href = "https://github.com/VictorTsuka" > < img src = "https://img.icons8.com/ios-filled/50/000000/github.png" / > < /a> <
        a href = "https://www.instagram.com/victortsuka" > < img src = "https://img.icons8.com/ios/50/000000/instagram-new--v1.png" / > < /a> <
        a href = "https://twitter.com/victorTsuka1" > < img src = "https://img.icons8.com/ios/50/000000/twitter--v1.png" / > < /a> <
        /Footer> <
        /ResponsePage>
    );
}

export default App;