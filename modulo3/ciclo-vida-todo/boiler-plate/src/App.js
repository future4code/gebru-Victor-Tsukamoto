import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul `
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li `
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div `
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
        tarefas: [{
                id: Date.now(),
                texto: 'texto da tarefa',
                completa: false
            },
            {
                id: Date.now(),
                texto: 'texto da tarefa 2',
                completa: true
            }
        ],
        inputValue: '',
        filtro: ''
    }

    ;

    componentDidMount() {
        this.pegarInfos()
    };

    onChangeInput = (event) => {
        this.setState({ inputValue: event.target.value })
    }

    mudaTarefa = (event) => {
        this.setState({ tarefas: event.target.value })
    }

    componentDidUpdate(prevState) {
        if (prevState.tarefas !== this.state.tarefas) {
            localStorage.setItem('tarefa', this.state.tarefas)
            console.log('O input tarefa mudou')
        }


    }
    pegarInfos = () => {
        const inputValueLS = localStorage.getItem('tarefa')
            // this.setState({inputValue: inputValueLS})
    }

    criaTarefa = () => {
        const novaTarefa = {
            id: Date.now(),
            texto: this.state.inputValue,
            completa: false

        }
        const novaListaDeTarefas = [...this.state.tarefas, novaTarefa]
        this.setState({ tarefas: novaListaDeTarefas })

    }

    selectTarefa = (id) => {
        const novaListaDeTarefasAtualizada = this.state.tarefas.map((tarefa) => {
            if (id === tarefa.id) {
                const novaTarefaAtualizada = {
                    ...tarefa,
                    completa: !tarefa.completa
                }
                return novaTarefaAtualizada
            } else {
                return tarefa
            }
        })

        this.setState({ tarefas: novaListaDeTarefasAtualizada })
    }

    onChangeFilter = (event) => {
        this.setState({ filtro: event.target.value })
    }

    render() {
        const listaFiltrada = this.state.tarefas.filter(tarefa => {
            switch (this.state.filtro) {
                case 'pendentes':
                    return !tarefa.completa
                case 'completas':
                    return tarefa.completa
                default:
                    return true
            }
        })

        return ( <
            div className = "App" >
            <
            h1 > Lista de tarefas < /h1> <
            InputsContainer >
            <
            input value = { this.state.inputValue }
            onChange = { this.onChangeInput }
            /> <
            button onClick = { this.criaTarefa } > Adicionar < /button> <
            /InputsContainer> <
            br / >

            <
            InputsContainer >
            <
            label > Filtro < /label> <
            select value = { this.state.filter }
            onChange = { this.onChangeFilter } >
            <
            option value = "" > Nenhum < /option> <
            option value = "pendentes" > Pendentes < /option> <
            option value = "completas" > Completas < /option> <
            /select> <
            /InputsContainer> <
            TarefaList > {
                listaFiltrada.map(tarefa => {
                    return ( <
                        Tarefa completa = { tarefa.completa }
                        onClick = {
                            () => this.selectTarefa(tarefa.id) } >
                        { tarefa.texto } <
                        /Tarefa>
                    )
                })
            } <
            /TarefaList> <
            /div>
        )
    }
}

export default App