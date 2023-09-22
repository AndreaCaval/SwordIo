import styled from 'styled-components';
import { BaseButton } from '../../button/button.styles';

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-y: auto;
  max-height: calc(100% - 150px);
`;

export const BtnContainer = styled.div`
  display:flex;
  justify-content:flex-end;
  margin: 30px 70px;

  svg{
    cursor:pointer;
    margin-top:auto;
    margin-bottom:auto;
    margin-right:25px;
    color:var(--main-color);
    font-size:30px;
    &:hover{
      color:var(--main-color-darker);
    }
  }
`

export const Btn = styled(BaseButton)`
    // margin-left:auto;
    &:hover{
    box-shadow: 0 0 10px var(--main-color-darker);
    border: none;
  }
`
