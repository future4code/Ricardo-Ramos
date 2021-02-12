import React from "react"
// import styled from "styled-components"
import EstiloMain from "./components/ComponenteDeEstilo"
import ContainerFormulario from "./components/ComponenteDeEstilo"
import TituloDaEtapa from "./components/ComponenteDeEstilo"
import BotaoProximaEtapa from "./components/ComponenteDeEstilo"


import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"

// const EstiloMain = styled.main`
//   display: flex;
//   justify-content: center;
//   text-align: center;
// `

// const ContainerFormulario = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// const TituloDaEtapa = styled.h2`
//   letter-spacing: 16px;
// `

// const EstiloDaPergunta = styled.p`
//   font-weight: bold;
// `

// const BotaoProximaEtapa = styled.button`
//   margin-top: 16px;
//   height: 48px;
//   width: 72px;
// `

class App extends React.Component {
  state = {
    etapa: 1
  }

  botaoMudarEtapa = () => {
    this.setState ({
      etapa: this.state.etapa + 1
    })
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <Etapa1 />
    }
  }

  render() {
    return (  

      <EstiloMain>
        <ContainerFormulario>
          <TituloDaEtapa />
            {this.renderizaEtapa()}
            <BotaoProximaEtapa onClick={this.botaoMudarEtapa}> Próxima Etapa </BotaoProximaEtapa>
        </ContainerFormulario>
	    </EstiloMain>

      
    )
  }
}

export default App