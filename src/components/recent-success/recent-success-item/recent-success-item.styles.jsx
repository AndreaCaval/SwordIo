import styled from "styled-components";

export const Img = styled.img`
    height:50px;
    width:auto;
    border-radius:5px;
    margin:5px;
    min-width: 50px;
`

export const RecentSuccessItemContianer = styled.div`
    width:99%;
    border-radius:10px;
    margin: 10px 0;
    background-color:var(--background-color-lighter);
    display: flex;
    flex-direction:row;
    // gap:10px;
    justify-content:space-between;

    span{
        align-self:center;
        text-align:center;
        padding: 8px 16px;
    }
`

export const RecentSuccessItemBase = styled.span`
    width:20%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const RecentSuccessItemName = styled(RecentSuccessItemBase)`
    width:40%;
`

export const RecentSuccessItemOrder = styled(RecentSuccessItemBase)`
    width:30%;
`