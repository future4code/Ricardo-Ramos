import React from 'react';

class PlaylistItem extends React.Component {

  render() {
    return (
      <div>
        <h3> {this.props.name} </h3>
        <button onClick={() => this.props.switchPages("ShowPlaylistSongs", this.props.playlistId) }> Ver músicas da playlist </button>
        <button onClick={() => this.props.deletePlaylists(this.props.playlistId)}> Excluir playlist </button>
      </div>
    );
  };
};

export default PlaylistItem;