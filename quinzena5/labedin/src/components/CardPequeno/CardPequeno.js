import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="card-pequeno">
            <img src={props.imagem} className="icones" />
            <div className="card-pequeno-textos">
                <h4>{props.titulo}</h4>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}

export default CardPequeno;