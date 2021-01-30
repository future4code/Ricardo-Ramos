import React from 'react';
import styled from 'styled-components';

const StyledStep3 = styled.section`
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

class Step3 extends React.Component {
  render() {
    return (
      <StyledStep3>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <p>5. Qual o motivo de não ter terminado um curso de graduação?</p>
        <input />
        <p>6. Fez algum curso complementar?</p>
        <select>
            <option>Nenhum</option>
            <option>Curso Técnico</option>
            <option>Curso de Inglês</option>
        </select>
      </StyledStep3>
    )
  };
}
  
export default Step3;