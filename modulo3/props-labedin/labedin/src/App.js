import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import { StyledContainer, StyledContainerH2, StyledAppDiv } from './styled'




function App() {
    return ( <
        StyledAppDiv >
        <
        StyledContainer >
        <
        StyledContainerH2 > Dados pessoais < /StyledContainerH2> <
        CardGrande imagem = "https://pbs.twimg.com/profile_images/1273258301703229440/GnozUX2A_400x400.jpg"
        nome = "Victor Tsuka"
        descricao = "Oi, eu sou o Victor Tsuka. Sou estudante de Web Development FullStack da Labenu." /
        >

        <
        ImagemButton imagem = "https://image.flaticon.com/icons/png/512/117/117472.png"
        texto = "Ver mais" /
        >
        <
        /StyledContainer>

        <
        StyledContainer >
        <
        CardPequeno imagem = "https://www.caceres.mt.leg.br/banco-de-imagens/email.png/image"
        nome = "E-mail: "
        descricao = "victortsuka@hotmail.com" /
        >
        <
        CardPequeno imagem = "https://sedurb.es.gov.br/Media/Sedurb/Fotos/10-single-default.jpg"
        nome = "Endereço: "
        descricao = "Rua João Wyclif - Londrina/PR" /
        >
        <
        /StyledContainer>

        <
        StyledContainer >
        <
        StyledContainerH2 > Experiências profissionais < /StyledContainerH2> <
        CardGrande imagem = "https://yt3.ggpht.com/ytc/AKedOLSH-PUg_wTvKW7xAKL4PsXFV85N9Ys341g0WSVd=s900-c-k-c0x00ffffff-no-rj"
        nome = "Labenu"
        descricao = "FullStack Web Development - Gebru Noturno" /
        >

        <
        CardGrande imagem = "https://pbs.twimg.com/profile_images/1088455552/logo-uel_400x400.jpg"
        nome = "Universidade Estadual de Londrina"
        descricao = "Graduação em Direito" /
        >
        <
        /StyledContainer>

        <
        StyledContainer >
        <
        StyledContainerH2 > Minhas redes sociais < /StyledContainerH2> <
        ImagemButton imagem = "https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
        texto = "Facebook" /
        >

        <
        ImagemButton imagem = "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
        texto = "Twitter" /
        >
        <
        /StyledContainer> <
        /StyledAppDiv>
    );
}

export default App;