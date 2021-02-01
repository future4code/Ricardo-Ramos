import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  gap: 12px;
  text-align: center;
`;

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  margin-top: 8px;
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`;

const InputsContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-flow: column;
`;

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    };

  componentDidUpdate() {
    const tarefas = this.state.tarefas;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  };

  componentDidMount() {
    const pegarTarefas = localStorage.getItem("tarefas");
    const objetoTarefa = JSON.parse(pegarTarefas);
    this.setState({ tarefas: objetoTarefa })
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  };

  criaTarefa = () => {
    const tarefaNova = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    };

    const novoArrayTarefas = [...this.state.tarefas, tarefaNova];

    this.setState({ tarefas: novoArrayTarefas });
  };

  selectTarefa = (id) => {
    const riscarCompleta = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return {
          ...tarefa, completa: !tarefa.completa
        };
      }
      return tarefa;
    });

    this.setState({ tarefas: riscarCompleta });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

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
    });

    return (
      <MainContainer>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </MainContainer>
    );
  };
};

export default App;
