import styled from 'styled-components';

export const SongPlayerWrapper = styled.section`
  margin-top: 20px;

  p {
    margin-bottom: 8px;
    text-align: center;
  }

  audio {
    outline: none;
  }
`

export const SongPlayerStyled = styled.div`
  align-items: center;
  gap: 8px;
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`