import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const TitleSwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:0 5px;
    margin-bottom: 30px;
    h3{
        margin:0;
    }

`
export const Text = styled.p`
    font-size:14px;
    margin:5px;
`
export const TextSpan = styled.span`
    color:var(--main-color-darker);
`
export const TextValue = styled(Text)`
    max-width: 225px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Switch = styled.input`
    margin:auto;
`

export const IconLink = styled(Link)`
    align-self:flex-end;
    margin-top: -23px;
    font-size: 18px;
    cursor: pointer;
    color:var(--main-color-darker);
`;

export const StoreItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 275px;
    margin: 20px;
    padding: 20px;
    border-radius: 15px;
    background-color: var(--background-color-lighter);
    border: 1px solid var(--background-color-lighter);
    color:var(--grey);
    &:hover{
        h3{
            color:var(--white);
        }
    }
`

export const StoreItemContainerActive = styled(StoreItemContainer)`
    border: 1px solid var(--main-color-darker);
    h3{
        color:var(--white);
    }
`