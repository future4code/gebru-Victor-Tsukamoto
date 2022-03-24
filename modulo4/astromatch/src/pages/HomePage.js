import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContainerPrincipal = styled.div `
display: flex;
flex-direction: column;
border: 1px solid black;
text-align: center;
width: 30vw;
height: 70vh;
max-width: 30vw;
max-height: 70vh;
background-color: #F8F8FF;
margin: 0 auto;

@media(max-width: 1000px) {
  width: 90vw;
  height: 70vh;
  max-width: 90vw;
max-height: 70vh;
}
`

const Img = styled.img `
display: flex;
margin: 0 auto;
width: 20vw;
height: 40vh;
border-radius: 30%;
max-width: 20vw;
max-height: 40vh;
margin-top: 3vh;

@media(max-width: 1000px) {
  width: 60vw;
  height: 40vh;
  max-width: 60vw;
max-height: 40vh;
}
`

const ButtonLike = styled.button `
background-color: green;
width: 100px;
height: 100px;
color: black;
border: 1px solid black;
border-radius: 100px;
margin: 0% 4% 1% 4%;

@media(max-width: 1000px) {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
`

const ButtonDislike = styled.button `
width: 100px;
height: 100px;
background-color: red;
color: black;
border: 1px solid black;
border-radius: 100px;
margin: 0% 4% 1% 4%;

@media(max-width: 1000px) {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
`


const ButtonDiv = styled.div `
display: flex;
margin: 0 auto;
`

const headers = 'Content-Type: application/json'

export const HomePage = () => {

    const [perfilNaoVisto, setPerfilNaoVisto] = useState([])
    const [teste, setTeste] = useState(true)

    useEffect(() => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-tsukamoto-gebru/person")
            .then(response => {
                setPerfilNaoVisto(response.data.profile)
                console.log(perfilNaoVisto)
            })
            .catch(err => {
                console.log(err);
            });
    }, [teste])


    const like = (idNumber) => {

        const body = {
            id: idNumber,
            choice: true
        }

        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-tsukamoto-gebru/choose-person", body, headers)
            .then(response => {
                setTeste(!teste)
            })
            .catch(err => {
                console.log(err);
            });
    }

    const dislike = (idNumber) => {

        const body = {
            id: idNumber,
            choice: false
        }

        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor-tsukamoto-gebru/choose-person", body, headers)
            .then(response => {
                setTeste(!teste)
            })
            .catch(err => {
                console.log(err);
            });
    }

    return ( <
        div >
        <
        ContainerPrincipal >

        <
        Img src = { perfilNaoVisto.photo }
        /> <
        p > < b > { perfilNaoVisto.name }, { perfilNaoVisto.age } < /b></p >
        <
        p > { perfilNaoVisto.bio } < /p> <
        ButtonDiv >
        <
        ButtonLike onClick = {
            () => like(perfilNaoVisto.id) } > < b > Like < /b></ButtonLike >
        <
        ButtonDislike onClick = {
            () => dislike(perfilNaoVisto.id) } > < b > Dislike < /b></ButtonDislike >
        <
        /ButtonDiv>

        <
        /ContainerPrincipal>  <
        /div>
    );
}