import React from 'react';
import styled from 'styled-components'


const StyledBigCard = styled.div `
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
`
const StyledBigCardImg = styled.img `
width: 70px;
    margin-right: 10px;
    border-radius: 50%;`


const StyledBigCardH4 = styled.h4 `
margin-bottom: 15px;`

const StyledBigCardContainerDiv = styled.div `
display: flex;
    flex-direction: column;
    justify-items: flex-start;`

function CardGrande(props) {
    return ( <
        StyledBigCard >
        <
        StyledBigCardImg src = { props.imagem }
        /> <
        StyledBigCardContainerDiv >
        <
        StyledBigCardH4 > { props.nome } < /StyledBigCardH4> <
        p > { props.descricao } < /p> <
        /StyledBigCardContainerDiv> <
        /StyledBigCard>
    )
}

export default CardGrande;