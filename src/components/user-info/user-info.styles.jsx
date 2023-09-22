import styled from "styled-components";

export const UserInfoContainer = styled.div`
    height:60px;
    margin:10px;
    padding:10px;
    border-radius:50px;
    display:flex;
    flex-direction:row;
    background-color:var(--background-color-2);
`

export const Img = styled.img`
    width:auto;
    height:100%;
    border-radius:50%;
`

export const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    color:var(--grey);
    p{
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin:auto;
        margin-left:20px;
        text-align:left;
    }
`