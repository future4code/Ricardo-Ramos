import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

// QUESTÃO 3 - Ainda estou compreendendo as questões de componentização, já entendi sobre a parte de setorizar o site em si, mas estou um pouco confuso em relação aos pormenores. Além disso, estou tentando entender melhor os estados e, consequentemente, o setState.

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    if(!this.state.curtido) {
      this.setState({
          curtido: !this.state.curtido,
          numeroCurtidas: this.state.numeroCurtidas + 1
        })
      } else {
          this.setState({
            curtido: !this.state.curtido,
            numeroCurtidas: this.state.numeroCurtidas - 1
          })
        }
    }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>

    // QUESTÃO 4 - Os itens vêm da função IconeComContador, que definem no componente o que acontece quando se clica na curtida e se deixa um comentário, definidos por meio de estados e de variáveis definidas acima para os ícones de curtida e de comentário.

  }
}

// QUESTÃO 6 - São utilizadas no componente IconeComContador e em estados específicos para definir comportamentos deles antes e depois do clique.

// QUESTÃO 7 - curtido: se mudar para true, preenche o ícone de coração; numeroCurtidas: se alterar, muda o número de curtidas; comentando: se mudar para true, aparece a caixa de texto para comentar; numeroComentarios: modifica o número de comentários que aparece na tela.

// QUESTÃO 8 - Está sendo usada no ícone de coração, pra representar a curtida. Quando se clica ali, aparece no console.log a mensagem "curtiu!" e, posteriormente, é preciso alterar isso para que preencha completamente o ícone, representando que o usuário curtiu o post.

// QUESTÃO 9 - Apresenta a caixa onde o comentário deve ser digitado para o usuário.

// QUESTÃO 10 - A caixa de texto do comentário aparece porque a função onClickComentario está apontada para o ícone de comentário por meio do this.onClickComentario em onClickIcone.

// QUESTÃO 11 - Ao enviar um comentário, o contador acrescenta 1, pois a função aoEnviarComentario tem um estado setado para somar 1 em numeroComentarios a cada clique.

export default Post