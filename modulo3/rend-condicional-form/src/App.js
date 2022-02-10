import React from 'react'
import styled from 'styled-components'
import Home from "./components/pages/Home"
import Pagina2 from "./components/pages/Pagina2"
import Pagina3 from "./components/pages/Pagina3"
import PaginaFinal from "./components/pages/PaginaFinal"


const Botão = styled.button `
display: flex;
margin: 0 auto;

`

export default class App extends React.Component {

    state = {
        etapa: 1,
    }

    renderEtapa = () => {
        switch (this.state.etapa) {
            case 1:
                return <Home / > ;

            case 2:
                return <Pagina2 / > ;

            case 3:
                return <Pagina3 / > ;

            case 4:
                return <PaginaFinal / > ;
        }
    }

    irParaProximaEtapa = () => {
        this.setState({ etapa: this.state.etapa + 1 })
    }


    render() {


        if (this.state.etapa >= 4) {
            return ( <
                div > { this.renderEtapa() }

                <
                /div>

            );


        }

        return ( <
            div > { this.renderEtapa() } <
            Botão onClick = { this.irParaProximaEtapa } > Próxima Etapa < /Botão> <
            /div>

        );

    }
}