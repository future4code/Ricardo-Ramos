import React from 'react'
import './IconeComContador.css'

export function IconeComContador(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
}

// QUESTÃO 5 - Representa a interação dos ícones de curtidas e de comentários com o clique do usuário