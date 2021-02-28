import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
 
export const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const LabefyMain = styled.main`
  background-color: #535353;
  height: 84vh;
`

export const StyledButtons = styled.button`
  background-color: #212121;
  border: 1px solid #b3b3b3;
  border-radius: 4px;
  color: #1db954;
  cursor: pointer;
  font-weight: 600;
  outline: none;
  padding: 16px;
`

export const StyledTitle = styled.h3`
  color: #b3b3b3;
`

export const StyledInput = styled.input`
  background-color: #b3b3b3;
  outline: none;
  padding: 4px;
`