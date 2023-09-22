import styled from "styled-components";
import Modal from 'react-modal';

export const ProfileNewContainer = styled(Modal)`
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

export const ProfileForm = styled.div`
    display:flex;
    flex-direction:column;
`

export const InfoContainer = styled.form`
    display:flex;
    flex-direction:row;
`

export const AddressInfoContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: auto;
    column-gap:25px;
    padding:10px;

    .css-4ljt47-MenuList{
        max-height: 200px;
    }
`

export const BillingInfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align: center;
    margin: auto;
    padding:20px;
`

export const ButtonContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:10px;
`