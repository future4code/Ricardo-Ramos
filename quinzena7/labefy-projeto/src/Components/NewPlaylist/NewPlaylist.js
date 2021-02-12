import React from 'react';
import axios from 'axios';
import { API_HEADER, BASE_URL } from '../../Constants/InfoApi';
import { LabefyMain } from '../../Constants/StyledConstants'
import { StyledButtons } from '../../Constants/StyledConstants'
import { StyledTitle } from '../../Constants/StyledConstants';
import { StyledInput } from '../../Constants/StyledConstants'
import { SectionNewPlaylist } from './Styled'

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
      <LabefyMain>
        <SectionNewPlaylist>
          <StyledTitle> Vamos criar uma nova playlist? </StyledTitle>
          <form onSubmit={ this.addNewPlaylist }>
            <StyledInput
              placeholder="Escolha um nome incrível para a sua playlist!"
              value={ this.state.playlistName }
              onChange={ this.addPlaylistName }
              className="inputNewPlaylistName"
            />
            <StyledButtons type="submit"> Criar </StyledButtons>
          </form>
        </SectionNewPlaylist>
      </LabefyMain>
    );
  };
};

export default NewPlaylist;