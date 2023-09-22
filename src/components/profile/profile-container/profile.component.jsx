import Spinner from '../../spinner/spinner.component';
import ProfileCard from '../profile-item/profile-item.component';
import { useState } from 'react';
import { ProfileContainer, Btn, BtnContainer } from './profile.styles';
import ProfileNew from '../profile-new-modal/profile-new.component';
import { BiImport, BiExport } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { selectProfiles } from '../../../redux/profiles/profile.selector'
import { importProfiles } from '../../../redux/profiles/profile.action';

const Profile = ({ category }) => {
    const dispatch = useDispatch()
    const profiles = useSelector(selectProfiles)
    const isLoading = false
    const [modalIsOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const downloadFile = ({ data, fileName, fileType }) => {
        const blob = new Blob([data], { type: fileType })
        const a = document.createElement('a')
        a.download = fileName
        a.href = window.URL.createObjectURL(blob)
        const clickEvt = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        })
        a.dispatchEvent(clickEvt)
        a.remove()
    }

    const handleImport = (e) => {
        console.log('import');
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            console.log("e.target.result", JSON.parse(e.target.result));
            dispatch(importProfiles(profiles, JSON.parse(e.target.result)));
        };
    }

    const exportProfiles = (e) => {
        e.preventDefault()
        downloadFile({
            data: JSON.stringify(profiles),
            fileName: 'profiles.json',
            fileType: 'text/json',
        })
    }

    return (
        <>
            <h1 className='title'>{category}</h1>
            <BtnContainer>
                <input type="file" accept=".json" style={{ display: "none" }} id='importFile' onChange={handleImport} />
                <label htmlFor="importFile">
                    <BiImport title="Import" />
                </label>
                <BiExport title="Export" onClick={exportProfiles} />
                <Btn onClick={openModal}>+ NEW</Btn>
            </BtnContainer>
            {isLoading ? (
                <Spinner />
            ) : (
                <ProfileContainer>
                    {profiles &&

                        Object.keys(profiles).map((key, index) =>
                            <ProfileCard key={index} title={key} profile={profiles[key]} />
                        )
                    }
                </ProfileContainer>
            )}

            <ProfileNew
                title={null}
                profile={null}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            />
        </>
    );
};

export default Profile;
