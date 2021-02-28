import React from 'react';
import { StyledButtons } from '../../Constants/StyledConstants'
import { PlaylistItemWrapper } from './Styled';
import { ButtonWrapper } from './Styled';
import { StyledTitle } from '../../Constants/StyledConstants';

class PlaylistItem extends React.Component {

  render() {
    return (
      <PlaylistItemWrapper>
        <StyledTitle> {this.props.name} </StyledTitle>
        <ButtonWrapper>
          <StyledButtons onClick={() => this.props.switchPages("ShowPlaylistSongs", this.props.playlistId) }> Ver músicas da playlist </StyledButtons>
          <StyledButtons onClick={() => this.props.deletePlaylists(this.props.playlistId)}> Excluir playlist </StyledButtons>
        </ButtonWrapper>
      </PlaylistItemWrapper>
    );
  };
};

export default PlaylistItem;