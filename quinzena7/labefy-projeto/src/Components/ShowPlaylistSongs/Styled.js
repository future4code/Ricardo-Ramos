import styled from 'styled-components';

export const PlaylistSongsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .buttonBackToPlaylists {
    margin-top: 16px;
    width: 280px;
  }

  .titleAddSong {
    margin-top: 20px;
  }

  .buttonAddNewSong {
    display: flex;
    margin: auto;
    margin-top: 16px;
  }

  .titleCurrentPlaylist {
    margin-top: 24px;
  }
`

export const NewSongInputs = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 16px;
  width: 100vw;
`