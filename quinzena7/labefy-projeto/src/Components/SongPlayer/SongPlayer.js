import React from 'react';

class SongPlayer extends React.Component {

  render() {
    return (
      <div>
        <p> <strong>{this.props.artistName}</strong> - {this.props.songName} </p>
        <audio controls="controls">
          <source src={this.songUrl} type="audio/mpeg" />
        </audio>
        <button onClick={() => this.props.deleteSongs(this.props.songId)}> Excluir música </button>
      </div>
    );
  };
};

export default SongPlayer;