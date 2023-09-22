import { ProfileItemContainer, TitleSwitchContainer, Text, Icon3, CardIcon, TextSpan } from "./profile-item.styles";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaClone } from "react-icons/fa";
import { useState } from "react";
import ProfileNew from "../profile-new-modal/profile-new.component";
import { ReactComponent as Visa } from '../../../assets/svg-credit-card-payment-icons/visa.svg';
import { ReactComponent as Mastercard } from '../../../assets/svg-credit-card-payment-icons/mastercard.svg';


import { useDispatch, useSelector } from "react-redux";
import { selectProfiles } from "../../../redux/profiles/profile.selector";

import { removeProfiles, cloneProfiles } from "../../../redux/profiles/profile.action";

const ProfileCard = ({ title, profile }) => {
    const dispatch = useDispatch()

    const profiles = useSelector(selectProfiles)

    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <ProfileItemContainer>
                <TitleSwitchContainer>
                    <h3>{title}</h3>
                    <Icon3>
                        <MdModeEdit title="Edit" onClick={openModal} />
                        <FaClone title="Clone" onClick={() => { dispatch(cloneProfiles(profiles, title)) }} />
                        <MdDelete title="Delete" onClick={() => { dispatch(removeProfiles(profiles, title)) }} style={{ color: "#f0506e" }} />
                    </Icon3>
                </TitleSwitchContainer>
                <Text id={`${title}-Country`}><TextSpan >Country: </TextSpan>{profile.Country.value}</Text>
                <Text id={`${title}-CardNumber`}><TextSpan >Num: </TextSpan>{profile.CardNumber.slice(-4)}</Text>
                {
                    profile.CardNumber[0] &&
                    <CardIcon>
                        {
                            profile.CardNumber[0] === "4" ? (<Visa />)
                                : (profile.CardNumber[0] === "5" ? (<Mastercard />)
                                    : (<></>))
                        }
                    </CardIcon>
                }
            </ProfileItemContainer>

            <ProfileNew
                title={title}
                profile={profile}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            />
        </>
    );
};

export default ProfileCard;
