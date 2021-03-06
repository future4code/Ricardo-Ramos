import React from 'react';
import CatalogPlaylists from '../CatalogPlaylists/CatalogPlaylists';
import ShowPlaylistSongs from '../ShowPlaylistSongs/ShowPlaylistSongs';
import { LabefyMain } from '../../Constants/StyledConstants'

class EditPlaylists extends React.Component {
  state = {
    pageOnScreen: "CatalogPlaylists",
    playlistId: ""
  };

  switchPages = (pageOnScreen, playlistId) => {
    this.setState({ pageOnScreen: pageOnScreen, playlistId: playlistId })
  };

  render() {
    const catalogConditional = () => {
      if (this.state.pageOnScreen === "CatalogPlaylists") {
        return <CatalogPlaylists switchPages={ this.switchPages } />
      } else if (this.state.pageOnScreen === "ShowPlaylistSongs") {
        return <ShowPlaylistSongs
          switchPages={ this.switchPages }
          playlistId={ this.state.playlistId }
        />
      }
    };

    return (
      <LabefyMain>
        <section>
          {catalogConditional()}
        </section>
      </LabefyMain>
    );

  };
};

export default EditPlaylists;