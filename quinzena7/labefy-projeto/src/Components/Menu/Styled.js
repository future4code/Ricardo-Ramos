import styled from 'styled-components';

export const LabefyHeader = styled.header`
  align-items: center;
  background-color: #121212;
  display: flex;
  flex-wrap: wrap;
  height: 16vh;
  justify-content: space-around;
  padding: 16px;

  @media screen and (max-width: 543px) {
    height: 24vh;
  }
`

export const LabefyLogo = styled.div`
  color: #1db954;
  font-size: 20px;
  text-align: center;

  h6 {
    margin-top: 4px;
  }
`

export const MenuButtons = styled.div`
  display: flex;
  gap: 72px;
`