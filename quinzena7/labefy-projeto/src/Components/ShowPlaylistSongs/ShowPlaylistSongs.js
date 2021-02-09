import React from 'react';
import SongPlayer from '../SongPlayer/SongPlayer';
import axios from 'axios';
import { API_HEADER, BASE_URL } from '../../Constants/InfoApi';

class ShowPlaylistSongs extends React.Component {
  state = {
    songs: [],
    songName: "",
    artistName: "",
    songUrl: ""
  };

  getPlaylistSongs = () => {
    axios.get(`${BASE_URL}/${this.props.playlistId}/tracks`, API_HEADER)
      .then(response => {
        this.setState({ songs: response.data.result.tracks })
      })

      .catch(() => {
        alert("Erro ao carregar sua playlist!")
      })
  };

  componentDidMount = () => {
    this.getPlaylistSongs()
  };

  addNewSongs = (event) => {
    event.preventDefault()
    const body = {
      name: this.state.songName,
      artist: this.state.artistName,
      url: this.state.songUrl
    }

    axios.post(`${BASE_URL}/${this.props.playlistId}/tracks`, body, API_HEADER)
      .then(() => {
        this.getPlaylistSongs()
        this.setState({
          songName: "",
          artistName: "",
          songUrl: ""
        })
        alert("Música adicionada com sucesso!")
      })

      .catch(() => {
        alert("Erro ao adicionar música!")
      })
  };

  deleteSongs = (songId) => {
    axios.delete(`${BASE_URL}/${this.props.playlistId}/tracks/${songId}`, API_HEADER)
      .then(() => {
        this.getPlaylistSongs()
        alert("Música excluída!")
      })

      .catch(() => {
        alert("Erro ao excluir música!")
      })
  };

  onChangeInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const songs = this.state.songs.map(song => {
      return <SongPlayer
        key={song.id}
        songId={song.id}
        songName={song.name}
        artistName={song.artist}
        songUrl={song.url}
        deleteSongs={this.deleteSongs}
      />
    })

    return (
      <section>
        <button onClick={() => this.props.switchPages("CatalogPlaylists", "") }> Voltar para a seleção de playlists </button>
        <form>
          <h3> Lembrou de música nova?<br />Adiciona aí na playlist! </h3>
          <div>
            <input
              placeholder="Nome da música"
              name="songName"
              value={ this.state.songName }
              onChange={ this.onChangeInput }
            />
          </div>
          <div>
            <input
              placeholder="Nome de banda ou artista"
              name="artistName"
              value={ this.state.artistName }
              onChange={ this.onChangeInput }
            />
          </div>
          <div>
            <input
              placeholder="Link da música"
              name="songUrl"
              value={ this.state.songUrl }
              onChange={ this.onChangeInput }
            />
          </div>
          <button type="submit" onClick={this.addNewSongs}> Adicionar música </button>
        </form>
        <h3> No momento, sua playlist tá assim: </h3>
        { songs }
      </section>
    );

  };
};

export default ShowPlaylistSongs;