import styled from 'styled-components';

export const HomeContainer = styled.div`
    display:flex;
    flex-direction:row;
    height:90%;

    .active{
        animation: rotating 1s ease infinite;
    }

    .title-commands{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin-bottom: -22px;
        svg{
            margin-right:20px;
            color:var(--main-color);
            cursor:pointer;
            font-size:18px;
        }
    }

    .rdbtns{
        display:flex;
        flex-direction:row;
    }

    .rdbtns div {
        display:flex;
        justify-content:center;
        width: 75px;
        text-align: center;
        /* height: 25px; */
        position: relative;
    }

    .rdbtns label,
    .rdbtns input {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .rdbtns input[type="radio"] {
        opacity: 0.01;
        z-index: 100;
    }

    .rdbtns input[type="radio"]:checked+label,
    .Checked+label {
        background-color: var(--main-color-darker);
    }

    .rdbtns label {
        padding: 2.5px;
        border: 1px solid #CCC;
        cursor: pointer;
        z-index: 90;
    }

    .rdbtns label:hover {
        /* background: var(--main-color-lighter); */
        /* color: var(--black); */
    }
`;

export const LeftContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:70%;
    min-width:500px;
    min-width:800px;
    padding:20px;
    gap:25px;
`;

export const RightContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:30%;
    min-width:400px;
    padding:20px;
    gap:25px;
`;

export const StatsContainer = styled.div`
    height:auto;
`

export const AnalyticsContainer = styled.div`
    height:45%;
`

export const RecentSuccessContainer = styled.div`
    height:30%;
`

export const UpdateInfoContainer = styled.div`
    height:33%;
`

export const ReleaseCalendarContainer = styled.div`
    height:67%;
    overflow-y:auto;
`

export const TitleContainer = styled.h3`
    margin:0;
    padding-left:20px;
    color:var(--light-grey);
`