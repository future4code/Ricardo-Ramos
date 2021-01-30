import React from 'react';
import styled from 'styled-components';

const StyledFinal = styled.section`
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

class Final extends React.Component {
  render() {
    return (
      <StyledFinal>
          <h2>FORMULÁRIO CONCLUÍDO COM SUCESSO!</h2>
          <p>Obrigado pela sua participação! Em breve entraremos em contato!</p>
      </StyledFinal>
    )
  };
}

export default Final;