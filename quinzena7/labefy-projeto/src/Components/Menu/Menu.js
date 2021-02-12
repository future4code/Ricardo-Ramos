import React from 'react';
import { LabefyHeader } from './Styled'
import { LabefyLogo } from './Styled'
import { MenuButtons } from './Styled'
import { StyledButtons } from '../../Constants/StyledConstants'


class Menu extends React.Component {
  render() {
    return (
      <LabefyHeader>
        <LabefyLogo>
          <h1>Labefy</h1>
          <h6>O player de músicas da Labenu</h6>
        </LabefyLogo>
        <MenuButtons>
          <StyledButtons onClick={() => this.props.switchPages("NewPlaylist") }> Nova Playlist </StyledButtons>
          <StyledButtons onClick={() => this.props.switchPages("EditPlaylists") }> Editar playlists </StyledButtons>
        </MenuButtons>
      </LabefyHeader>
    );
  };
};

export default Menu;