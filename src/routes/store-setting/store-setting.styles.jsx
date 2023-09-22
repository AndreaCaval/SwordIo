import styled from "styled-components";

export const StoreSettingContainer = styled.div`
    margin:auto;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    color:var(--light-grey);
    h1{
        margin:auto;
        margin-bottom:0;
        color:var(--main-color-darker);
    }
`

export const SettingsContainer = styled.div`
    margin:auto;
    margin-top:20px;
    padding:50px;
    display:grid;
    grid-template-columns: repeat(3, 300px);
    grid-template-rows: auto;
    column-gap:25px;
    // display:flex;
    // flex-direction:row;
    // flex-wrap: wrap;
    // gap:30px;
    border-radius:50px;
    background-color:var(--background-color-2);
    .label{
        margin:auto;
        margin-bottom:15px;
        display:flex;
        flex-direction:row;
    }

    .css-4ljt47-MenuList{
        max-height: 150px;
    }
`