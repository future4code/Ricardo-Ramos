import styled from 'styled-components';

export const SectionNewPlaylist = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;
  padding-top: 200px;

  h3 {
    font-weight: 800;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  .inputNewPlaylistName {
    height: 48px;
    text-align: center;
    width: 320px;

    @media screen and (max-width: 400px) {
      width: 280px;
    }
  }
`