import { ProfileNewContainer, ProfileForm, InfoContainer, AddressInfoContainer, BillingInfoContainer, ButtonContainer } from './profile-new.styles'
import React, { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../../button/button.component';
import 'react-credit-cards/es/styles-compiled.css';

import AddressInfo from '../address-info-container/address-info.component';
import BillingInfo from '../billing-info-container/billing-info.component';

import { useDispatch, useSelector } from "react-redux";
import { selectProfiles } from "../../../redux/profiles/profile.selector";
import { addProfiles, editProfiles } from "../../../redux/profiles/profile.action";

const defaultFormFieldsSelect = {
    prefix: {},
    country: {},
    state: {},
    city: {}
}
const defaultFormFieldsInput = {
    ProfileName: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Telephone: "",
    AddressOne: "",
    AddressTwo: "",
    City: "",
    Zip: "",
    State: "",
    Country: "",
    CardOwnerName: "",
    CardNumber: "",
    MMYY: "",
    CVV: ""
};
const defaultFormFieldsCreditCard = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
};

const ProfileNew = ({ title, profile, isOpen, onRequestClose }) => {
    const dispatch = useDispatch()
    const profiles = useSelector(selectProfiles)

    let tempdefaultFormFieldsInput = defaultFormFieldsInput
    let tempdefaultFormFieldsSelect = defaultFormFieldsSelect
    let tempdefaultFormFieldsCreditCard = defaultFormFieldsCreditCard

    if (profile !== null) {
        profile.ProfileName = title
        tempdefaultFormFieldsInput = profile
        tempdefaultFormFieldsSelect.country = profile.Country
        tempdefaultFormFieldsSelect.state = profile.State
        tempdefaultFormFieldsSelect.city = profile.City
        tempdefaultFormFieldsSelect.prefix = profile.Prefix
        tempdefaultFormFieldsCreditCard.cvc = profile.CVV
        tempdefaultFormFieldsCreditCard.expiry = profile.MMYY
        tempdefaultFormFieldsCreditCard.name = profile.CardOwnerName
        tempdefaultFormFieldsCreditCard.number = profile.CardNumber
    }

    const [formFieldsSelectCreditCard, setFormFieldsSelectCreditCard] = useState(tempdefaultFormFieldsCreditCard)
    const [formFieldsSelect, setFormFieldsSelect] = useState(tempdefaultFormFieldsSelect)
    const [formFieldsInput, setFormFieldsInput] = useState(tempdefaultFormFieldsInput);

    const restoreFormFields = () => {
        setFormFieldsSelect(tempdefaultFormFieldsSelect)
        setFormFieldsSelectCreditCard(tempdefaultFormFieldsCreditCard)
        setFormFieldsInput(tempdefaultFormFieldsInput);
    }

    const resetFormFields = () => {
        setFormFieldsSelect(defaultFormFieldsSelect)
        setFormFieldsSelectCreditCard(defaultFormFieldsCreditCard)
        setFormFieldsInput(defaultFormFieldsInput);
    };

    const handleSubmit = async (event, btn) => {
        event.preventDefault();
        if (btn === "close") {
            if (profile === null)
                resetFormFields()
            else
                restoreFormFields()
            onRequestClose()
        }
        else {
            if (formFieldsInput.ProfileName === "")
                alert("Invalid Profile")
            else {
                if (profile !== null) {
                    dispatch(editProfiles(profiles, { ...formFieldsSelectCreditCard, ...formFieldsSelect, ...formFieldsInput }, profile.ProfileName))
                    console.log("edited")
                } else {
                    if (formFieldsInput.ProfileName in profiles) {
                        alert("ProfileName already exist")
                        return
                    }
                    dispatch(addProfiles(profiles, { ...formFieldsSelectCreditCard, ...formFieldsSelect, ...formFieldsInput }))
                    resetFormFields()
                    console.log("saved")
                }
                onRequestClose()
            }
        }
    };

    return (
        <>
            <ProfileNewContainer
                shouldCloseOnOverlayClick={false}
                ariaHideApp={false}
                isOpen={isOpen}
                onRequestClose={onRequestClose}
            >
                {profile === null ? (<h3>New Profile</h3>) : (<h3>Edit Profile</h3>)}

                <ProfileForm>
                    <InfoContainer>
                        <AddressInfoContainer>
                            <AddressInfo
                                formFieldsInput={formFieldsInput}
                                setFormFieldsInput={setFormFieldsInput}
                                formFieldsSelect={formFieldsSelect}
                                setFormFieldsSelect={setFormFieldsSelect}
                            />
                        </AddressInfoContainer>
                        <BillingInfoContainer>
                            <BillingInfo
                                formFieldsSelectCreditCard={formFieldsSelectCreditCard}
                                setFormFieldsSelectCreditCard={setFormFieldsSelectCreditCard}
                            />
                        </BillingInfoContainer>
                    </InfoContainer>
                    <ButtonContainer>
                        <Button type='button' onClick={(e) => { handleSubmit(e, "save") }}>Save</Button>
                        <Button type='button' onClick={(e) => { handleSubmit(e, "close") }} buttonType={BUTTON_TYPE_CLASSES.close}>Close</Button>
                    </ButtonContainer>
                </ProfileForm>

            </ProfileNewContainer>
        </>
    );
}

export default ProfileNew


