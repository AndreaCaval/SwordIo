import styled from 'styled-components';

export const SwitchLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 44px;
    height: 22px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
`

export const SwitchSpan = styled.span`
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`

export const SwitchInput = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked+${SwitchLabel} ${SwitchSpan}{
        left: calc(100% - 1px);
        transform: translateX(-100%);
    }
    
`