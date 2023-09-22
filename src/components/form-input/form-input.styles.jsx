import styled, { css } from 'styled-components';

const shrinkLabelStyles = css`
  top: 0px;
  font-size: 12px;
  color: var(--light-grey);
`;

export const FormInputLabel = styled.label`
  font-size: 14px;
  color: var(--black);
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 30px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: var(--light-grey);
  color: var(--black);
  font-size: 14px;
  padding: 10px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin: 20px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
