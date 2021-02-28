import React from 'react';
import SongPlayer from '../SongPlayer/SongPlayer';
import axios from 'axios';
import { API_HEADER, BASE_URL } from '../../Constants/InfoApi';
import { StyledTitle } from '../../Constants/StyledConstants';
import { StyledButtons } from '../../Constants/StyledConstants'
import { StyledInput } from '../../Constants/StyledConstants'
import { PlaylistSongsSection } from './Styled'
import { NewSongInputs } from './Styled'

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
      <PlaylistSongsSection>
        <StyledButtons onClick={() => this.props.switchPages("CatalogPlaylists", "") } className="buttonBackToPlaylists"> Voltar para a seleção de playlists </StyledButtons>
        <StyledTitle className="titleAddSong"> Lembrou de música nova? Adiciona aí na playlist! </StyledTitle>
        <form>
          <NewSongInputs>
              <StyledInput
                placeholder="Nome da música"
                name="songName"
                value={ this.state.songName }
                onChange={ this.onChangeInput }
              />
              <StyledInput
                placeholder="Nome de banda ou artista"
                name="artistName"
                value={ this.state.artistName }
                onChange={ this.onChangeInput }
              />
              <StyledInput
                placeholder="Link da música"
                name="songUrl"
                value={ this.state.songUrl }
                onChange={ this.onChangeInput }
              />
          </NewSongInputs>
          <StyledButtons type="submit" onClick={this.addNewSongs} className="buttonAddNewSong"> Adicionar música </StyledButtons>
        </form>
        <StyledTitle className="titleCurrentPlaylist"> No momento, sua playlist tá assim: </StyledTitle>
        { songs }
      </PlaylistSongsSection>
    );

  };
};

export default ShowPlaylistSongs;