import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import ricardoUser from './img/ricardo-user.jpg'
import ricardoPost from './img/ricardo-post.jpg'
import triceratopsUser from './img/triceratops-user.png'
import triceratopsPost from './img/triceratops-post.jpg'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'ricardo'}
          fotoUsuario={ricardoUser}
          fotoPost={ricardoPost}
        />
        <Post
          nomeUsuario={'triceratops'}
          fotoUsuario={triceratopsUser}
          fotoPost={triceratopsPost}
        />
        <Post
          nomeUsuario={'namelessuser'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </div>
    );
  }
}

export default App;
