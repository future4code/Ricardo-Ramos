import React from 'react';
import styled from 'styled-components';
import Step1 from './Components/Step1/Step1';
import Step2 from './Components/Step2/Step2';
import Step3 from './Components/Step3/Step3';
import Final from './Components/Final/Final';

const ButtonStyle = styled.button`
  display: flex;
  margin: auto;
  margin-top: 24px;
`

class App extends React.Component {

  state = {
    step: 1
  };

  renderStep = () => {
    switch (this.state.step) {
      case 1:
        return <Step1 />

        case 2:
          return <Step2 />

        case 3:
          return <Step3 />

        case 4:
          return <Final />

        default:
          alert("Erro no formulário! Favor atualizar a página e reiniciar o processo.")
    }
  };

  changeStep = () => {
    this.setState({ step: this.state.step + 1 })
  }

  currentStep = () => {
    if (this.state.step < 3) {
      return <ButtonStyle onClick={this.changeStep}> Próxima etapa </ButtonStyle>
    } else if (this.state.step === 3) {
      return <ButtonStyle onClick={this.changeStep}> Enviar formulário </ButtonStyle>
    }
  };


  render() {
    return (
      <>
        {this.renderStep()}
        {this.currentStep()}
      </>
    )
  };
}

export default App;