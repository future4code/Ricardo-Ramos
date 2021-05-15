import React from 'react';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import axios from 'axios';
import { API_HEADER, BASE_URL } from '../../Constants/InfoApi'

class CatalogPlaylists extends React.Component {

  state = {
    catalogPlaylists: []
  }

  getCreatedPlaylists = () => {
    axios.get(BASE_URL, API_HEADER)
      .then(response => {
        this.setState({ catalogPlaylists: response.data.result.list })
      })

      .catch(() => {
        alert("Erro ao carregar playlists!")
      })
  };

  componentDidMount = () => {
    this.getCreatedPlaylists()
  };

  deletePlaylists = (playlistId) => {
    axios.delete(`${BASE_URL}/${playlistId}`, API_HEADER)
      .then(() => {
        this.getCreatedPlaylists()
        alert("Playlist excluída com sucesso!")
      })

      .catch(() => {
        alert("Ops! Deu erro ao tentar deletar a playlist!")
      })
  }

  render() {
    const catalogPlaylists = this.state.catalogPlaylists.map(playlist => {
      return <PlaylistItem
        key={ playlist.id }
        playlistId={ playlist.id }
        switchPages={ this.props.switchPages }
        name={ playlist.name }
        deletePlaylists={ this.deletePlaylists }
      />
    });

    return (
      <div>
        {catalogPlaylists}
      </div>
    );

  };
};

export default CatalogPlaylists;