import React from 'react'
import styled from 'styled-components'

/* STYLED COMPONENTS



*/

class Etapa3 extends React.Component {
    render() {
        return (
            <div className="Etapa3">
                  <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                  {/* <TituloDaEtapa>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</TituloDaEtapa> */}
                  <p>5. Qual o motivo de não ter terminado um curso de graduação?</p>
                  {/* <EstiloDaPergunta>5. Qual o motivo de não ter terminado um curso de graduação?</EstiloDaPergunta> */}
                  <input></input>
                  <p>6. Fez algum curso complementar?</p>
                  {/* <EstiloDaPergunta>6. Fez algum curso complementar?</EstiloDaPergunta> */}
                  <select>
                      <option>Nenhum</option>
                      <option>Curso Técnico</option>
                      <option>Curso de Inglês</option>
                  </select>
            </div>
        )
    }
}


export default Etapa3