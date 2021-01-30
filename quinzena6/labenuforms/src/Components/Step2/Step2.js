import React from 'react';
import styled from 'styled-components';

const StyledStep2 = styled.section`
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

class Step2 extends React.Component {
  render() {
    return (
      <StyledStep2>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <p>5.Qual o curso?</p>
        <input />
        <p>5.Qual a instituição?</p>
        <input />
      </StyledStep2>
    )
  };
}
  
export default Step2;