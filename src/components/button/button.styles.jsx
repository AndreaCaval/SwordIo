import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  width:125px;
  height:40px;
  border-radius:10px; 
  width: auto;
  line-height: 40px;
  padding: 0 35px 0 35px;
  font-size: 14px;
  background-color: var(--main-color);
  color: var(--white);
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items:center;
  &:hover {
    box-shadow: 0 0 10px var(--main-color-darker);
    background-color: var(--main-color-darker);
    // border: 1px solid var(--background-color-lighter);
  }
`;

export const CloseButton = styled(BaseButton)`
  background-color: #f0506e;
  &:hover {
    background-color: #EE395B;
    box-shadow: 0 0 10px #EE395B;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width:30px;
  height:30px;
`