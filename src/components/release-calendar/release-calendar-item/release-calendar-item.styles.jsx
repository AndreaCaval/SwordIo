import styled from "styled-components";
import { FiMoreHorizontal } from 'react-icons/fi'

export const ReleaseCalendarItemContainer = styled.div`
    height:75px;
    width:98%;
    background-color:var(--background-color-lighter);
    color:var(--grey);
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    padding:10px;
    margin:2% 1%;
    border-radius:10px;
    gap:10px;
    font-weight:bold;
    user-select: none;
    cursor:pointer;
    &:hover{
        box-shadow: 0 0 5px var(--main-color-darker);
        color:var(--white);
    }
`

export const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const MoreInfo = styled(FiMoreHorizontal)`
    margin-left:auto;
    font-size:20px;
    align-self:flex-end;
    cursor:pointer;
`

export const Text = styled.p`
    margin-top:auto;
    margin-bottom:auto;
    align-self:flex-start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:250px;
`

export const Img = styled.img`
    border-radius:5px;
`