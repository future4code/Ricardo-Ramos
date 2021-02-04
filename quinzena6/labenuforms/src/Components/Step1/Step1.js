import React from 'react';
import styled from 'styled-components';

const StyledStep1 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  input {
    width: 400px;
  }

  select {
    width: 200px;
  }
`

class Step1 extends React.Component {
  render() {
    return (
      <StyledStep1>
          <h2>ETAPA 1 - DADOS GERAIS</h2>
          <p>1.Qual o seu nome ?</p>
          <input />
          <p>2.Qual a sua idade ?</p>
          <input />
          <p>3.Qual o seu email ?</p>
          <input />
          <p>4.Qual é sua escolaridade ?</p>
          <select>
            <option>Ensino Médio incompleto</option>
            <option>Ensino Médio completo</option>
            <option>Ensino Superior incompleto</option>
            <option>Ensino Superior completo</option>
          </select>
      </StyledStep1>
    )
  };
}

export default Step1;