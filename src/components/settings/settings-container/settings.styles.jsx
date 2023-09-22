import styled from "styled-components";

export const SettingsContainer = styled.div`
    display:grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    height:calc(100% - 75px);
`

export const BoxPositionContainer = styled.div`
    background-color:var(--grey);
    display:grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    height:100px;
    width:250px;
    border-radius:5px;
    margin:auto;

    a{
        width:100%;
        height:100%;
        position:relative;
    }

    input{
        position:absolute;
        margin:5px;
    }

    #container-top-right input{
        top:0;
        right:0;
    }

    #container-bot-left input{
        bottom:0;
    }

    #container-bot-right input{
        bottom:0;
        right:0;
    }
`

export const GridContainer = styled.div`
    margin:50px;
    padding:25px;
    border-radius:50px;
    display:flex;
    flex-direction:column;
    background-color:var(--background-color-2);
    color:var(--grey);
    user-select: none;
    
`

export const Container = styled.div`
    margin:auto;
    display:flex;
    flex-direction:column;
`

export const ContainerTitle = styled.h3`
    text-align:center;
    margin:auto;
`