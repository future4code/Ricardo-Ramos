import React from 'react';
import axios from 'axios';
import { API_HEADER, BASE_URL } from '../../Constants/InfoApi';

class NewPlaylist extends React.Component {
  state = {
    playlistName: ""
  };

  addNewPlaylist = (event) => {
    const body = {
      name: this.state.playlistName
    }
    event.preventDefault();

    axios.post(BASE_URL, body, API_HEADER)
      .then (() => {
        alert("Boa! Sua playlist foi criada!")
      })

      .catch(() => {
        alert("Erro na criação da playlist!")
      })
      this.setState({ playlistName: "" })
  };

  addPlaylistName = (event) => {
    this.setState({ playlistName: event.target.value })
  };


  render() {

    return (
      <section>
        <h3> Vamos criar uma nova playlist? </h3>
        <form onSubmit={ this.addNewPlaylist }>
          <input
            placeholder="Escolha um nome incrível para a sua playlist!"
            value={ this.state.playlistName }
            onChange={ this.addPlaylistName }
          />
          <button type="submit"> Criar </button>
        </form>
      </section>
    );
  };
};

export default NewPlaylist;