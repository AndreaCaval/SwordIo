import styled, { css } from 'styled-components';
import Select from "react-select";



export const FormSelectLabel = styled.label`
  font-size: 12px;
  color: var(--light-grey);
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 0px;
  transition: 300ms ease all;
`;

export const SelectI = styled(Select)`
  background-color: var(--light-grey);
  color: var(--black);
  font-size: 14px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
  .css-9gakcf-option, .css-1s2u09g-control{
    background: none;
    color:black;
  }
  .css-9gakcf-option:hover{ background-color:#DEEBFF;}
  svg{color:black;}
`;

export const Group = styled.div`
  position: relative;
`;
