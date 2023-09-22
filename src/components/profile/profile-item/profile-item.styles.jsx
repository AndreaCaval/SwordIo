import styled from 'styled-components';

export const TitleSwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:0 5px;
    margin-bottom:20px;
    h3{
        user-select: text;
        margin:0;
    }
`
export const Text = styled.p`
    font-size:small;
    margin:5px;
`
export const TextSpan = styled.span`
    color:var(--main-color-darker);
`
export const Icon3 = styled.div`
    display:flex;
    gap: 10px;
    cursor: pointer;
    color:var(--main-color-darker);
`
export const CardIcon = styled.div`
    align-self:flex-end;
    margin-top: -27px;
    svg{
        width:35px;
        height:auto;
    }
`
export const ProfileItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-width: 275px;
    // width: 365px;
    margin: 20px;
    padding: 20px;
    // border: 1px solid #fff;
    border-radius: 15px;
    background-color:var(--background-color-lighter);
    color:var(--grey);
    user-select: none;
    &:hover{
        h3{color:var(--white);}        
    }
`