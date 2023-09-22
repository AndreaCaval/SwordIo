import styled from "styled-components";

export const P = styled.p`
    user-select: text;
`

export const Span = styled.span`
    color:var(--light-grey);
    user-select: none;
`

export const Img = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    margin-left: auto;
    margin-bottom: -50px;
`

export const DataContainer = styled.div`
    display:flex;
    flex-direction:row;
`

export const LicenseContainer = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;    
`
export const License = styled.div`
    font-weight:bold;
    user-select: text;
`

export const Icon = styled.span`
    color:var(--main-color-lighter);
    cursor:pointer;
    &:hover{
        color:var(--main-color-darker);
    }
`