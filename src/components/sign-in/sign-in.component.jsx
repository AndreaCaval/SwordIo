
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { retrieveLicense } from '../../utils/hyper/hyper.utils'

import { selectCurrentUser } from '../../redux/user/user.selector'
import { setCurrentUser } from '../../redux/user/user.action'

import { SignInContainer } from './sign-in.styles'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { GridContainer } from '../settings/settings-container/settings.styles'

import { fetchCurrentUserAsync } from '../../redux/user/user.action'

const SignIn = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser)

    const [license, setLicense] = useState("")
    const navigate = useNavigate();

    if (currentUser !== null)
        setLicense(currentUser.key)

    const handleChange = (event) => {
        const { value } = event.target;
        setLicense(value);
    };

    const handleClick = async (e) => {
        e.preventDefault();

        if (license === "")
            return

        // dispatch(fetchCurrentUserAsync(license))
        // navigate('/')

        const user = await retrieveLicense(license)

        if (user) {
            console.log('success');
            dispatch(setCurrentUser(user))
            navigate('/')
        }
    }

    return (
        <SignInContainer>
            <GridContainer style={{ backgroundColor: "var(--background-color-lighter)" }}>
                <h1>Sign In</h1>
                <FormInput
                    label="License"
                    value={license}
                    name="license"
                    onChange={handleChange}
                />
                <Button onClick={handleClick}>Sign in</Button>
            </GridContainer>
        </SignInContainer>
    )
}

export default SignIn