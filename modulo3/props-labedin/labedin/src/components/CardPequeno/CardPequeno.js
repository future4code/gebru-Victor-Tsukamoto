import React from 'react';
import styled from 'styled-components'

const SmallCardContainer = styled.div `
 display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;`

const SmallCardContainerImg = styled.img `
      width: 30px;
    margin-right: 10px;
    border-radius: 50%;`

const SmallCardContainerH4 = styled.h4 `
     margin-right: 15px;`

const SmallCardContainerDiv = styled.div `
     display: flex;
    flex-direction: row;
    justify-items: flex-start;
     `

function CardPequeno(props) {
    return ( <
        SmallCardContainer >
        <
        SmallCardContainerImg src = { props.imagem }
        /> <
        SmallCardContainerDiv >
        <
        SmallCardContainerH4 > { props.nome } < /SmallCardContainerH4> <
        p > { props.descricao } < /p> <
        /SmallCardContainerDiv> <
        /SmallCardContainer>
    )
}

export default CardPequeno;