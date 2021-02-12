import React from 'react';
import { StyledButtons } from '../../Constants/StyledConstants'
import { SongPlayerWrapper } from './Styled'
import { SongPlayerStyled } from './Styled'

class SongPlayer extends React.Component {

  render() {
    return (
      <SongPlayerWrapper>
        <p><strong>{this.props.artistName}</strong> - {this.props.songName}</p>
        <SongPlayerStyled>
          <audio controls="controls">
            <source src={this.props.songUrl} type="audio/mpeg" />
          </audio>
          <StyledButtons onClick={() => this.props.deleteSongs(this.props.songId)}> Excluir música </StyledButtons>
        </SongPlayerStyled>
      </SongPlayerWrapper>
    );
  };
};

export default SongPlayer;