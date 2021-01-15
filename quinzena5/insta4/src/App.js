import React from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'
import ricardoUser from './img/ricardo-user.jpg'
import ricardoPost from './img/ricardo-post.jpg'
import triceratopsUser from './img/triceratops-user.png'
import triceratopsPost from './img/triceratops-post.jpg'

const EstiloDaPagina = styled.main`
  background-color: #999a9e;
  height: 100vh;
`

const ContainerPosts = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormularioNovoPost = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  margin: 16px;
`

const CampoFormularioNovoPost = styled.input`
  padding: 4px;
`

class App extends React.Component {
  state = {

    usuarios: [
      {
        nomeUsuario: 'ricardo',
        avatarUsuario: ricardoUser,
        fotoPost: ricardoPost
      },

      {
        nomeUsuario: 'triceratops',
        avatarUsuario: triceratopsUser,
        fotoPost: triceratopsPost
      },

      {
        nomeUsuario: 'namelessuser',
        avatarUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      }
    ]
  }

  incluirNomeUsuario = (event) => {
    this.setState({
      valorUsuario: event.target.value
    })
  }

  incluirAvatarUsuario = (event) => {
    this.setState ({
      valorAvatar: event.target.value
    })
  }

  incluirFotoPost = (event) => {
    this.setState ({
      valorFotoPost: event.target.value
    })
  }

  incluirNovoPost = () => {
    const dadosNovoPost = {
      nome: this.state.valorUsuario,
      avatar: this.state.valorAvatar,
      fotoPost: this.state.valorFotoPost
    }

    const feedNovoPost = [...this.state.usuarios, dadosNovoPost]
    this.setState ({
      usuarios: feedNovoPost,

      valorUsuario: "",
      valorAvatar: "",
      valorFotoPost: ""
    })
  }

  render() {
    const feedPosts = this.state.usuarios.map((usuario) => {
      return (
        <Post
          nomeUsuario = {usuario.nomeUsuario}
          avatarUsuario = {usuario.avatarUsuario}
          fotoPost = {usuario.fotoPost}
        />
      )
    })
    return (
      <EstiloDaPagina>
        <ContainerPosts> 
          <FormularioNovoPost>
            <CampoFormularioNovoPost
                value = {this.state.valorUsuario}
                onChange = {this.incluirNomeUsuario}
                placeholder = {"Nome"}
            />
            <CampoFormularioNovoPost
              value = {this.state.valorAvatar}
              onChange = {this.incluirAvatarUsuario}
              placeholder={"Foto"}
            />
            <CampoFormularioNovoPost
              value = {this.state.valorFotoPost}
              onChange = {this.incluirFotoPost}
              placeholder = {"Post"}
            />
            <button onClick = {this.incluirNovoPost}> Postar </button>
          </FormularioNovoPost>
        {feedPosts}
        </ContainerPosts>
      </EstiloDaPagina>
    )
  }
}

export default App