import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <header>
        <h1>Labefy</h1>
        <h6>O player de músicas da Labenu</h6>
        <div>
          <button onClick={() => this.props.switchPages("NewPlaylist") }> Nova Playlist </button>
          <button onClick={() => this.props.switchPages("EditPlaylists") }> Editar playlists </button>
        </div>
      </header>
    );
  };
};

export default Menu;