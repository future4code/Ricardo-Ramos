import React from "react"
// import styled from "styled-components"
import EstiloMain from "./ComponenteDeEstilo"
import TituloDaEtapa from "./ComponenteDeEstilo"
import EstiloDaPergunta from "./ComponenteDeEstilo"


/* STYLED COMPONENTS



*/

class Etapa1 extends React.Component {
    render() {
        return (
            <EstiloMain>
            <TituloDaEtapa>ETAPA 1 - DADOS GERAIS</TituloDaEtapa>
                <EstiloDaPergunta>1 - Qual seu nome?</EstiloDaPergunta>
                    <input></input>
                <EstiloDaPergunta>2 - Qual sua idade?</EstiloDaPergunta>
                    <input></input>
                <EstiloDaPergunta>3 - Qual seu email?</EstiloDaPergunta>
                    <input></input>
                <EstiloDaPergunta>4 - Qual sua escolaridade?</EstiloDaPergunta>
                    <select>
                        <option>Ensino Medio Incompleto</option>
                        <option>Ensino Medio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </select>            
            </EstiloMain>
        )
    }
}



export default Etapa1