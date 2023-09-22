import { NavigationContainer, LogoContainer, NavLinks, NavLink, NavIcon, Hr, LogoTitle, LogoImg, Version } from './navigation.styles'
import { BsLaptop } from "react-icons/bs";
import { AiFillSetting } from 'react-icons/ai'
import { IoLayers, IoHome } from 'react-icons/io5'
import { FaUserFriends, FaTools, FaArchive } from 'react-icons/fa'
import UserInfo from '../../components/user-info/user-info.component';
import EXTLogo from '../../assets/sword.ico';

import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)

    return (
        <>
            <NavigationContainer>

                <LogoContainer href='https://twitter.com/SwordIo' target='_blank'>
                    <LogoImg src={EXTLogo} alt="logo" />
                    <LogoTitle>SwordIo</LogoTitle>
                </LogoContainer>

                <Hr />

                <NavLinks>
                    <NavLink to={'/'}><NavIcon><IoHome /></NavIcon>Home</NavLink>
                    <NavLink to={'/nft'}>  <NavIcon><IoLayers /> </NavIcon>Nft</NavLink>
                    <NavLink to={'/retailer'}>  <NavIcon><BsLaptop /></NavIcon> Retailer</NavLink>
                    <NavLink to={'/sneakers'}>  <NavIcon><FaArchive /></NavIcon> Sneakers</NavLink>
                    {/* <NavLink to={'/tools'}>  <NavIcon><FaTools /></NavIcon> Tools</NavLink> */}
                    <NavLink to={'/profiles'}>  <NavIcon><FaUserFriends /></NavIcon> Profiles</NavLink>
                    <NavLink to={'/settings'}>  <NavIcon><AiFillSetting /></NavIcon>Settings</NavLink>
                </NavLinks>

                <UserInfo user={currentUser} />

                <Version>Version 2.0</Version>
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation