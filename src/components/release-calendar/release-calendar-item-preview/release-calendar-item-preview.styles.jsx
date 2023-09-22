import styled from "styled-components";
import Modal from 'react-modal';

export const ReleaseCalendarItemPreviewContainer = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    background-color: var(--background-color-lighter);
    color:var(--grey);
    padding:25px;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    h3{
        text-align:center;
        margin-top:auto;
        color:var(--main-color-darker);
    }
`
export const Span = styled.span`
    color:var(--main-color);
`

export const P = styled.p`
    margin-bottom:auto;
    margin-top:auto;
`

export const ProductLink = styled.a`
    color:var(--light-grey);
    &:hover{
        color:var(--main-color-lighter)
    }
`

export const ItemData = styled.div`
    display:flex;
    flex-direction:row;
`

export const ItemDescription = styled.div`
    display:flex;
    flex-direction:column;
    padding: 0 25px;
`

export const Img = styled.img`
    width: 150px;
    height: auto;
    border-radius: 10px;
    margin:auto;
`