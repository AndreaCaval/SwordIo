import { P, Span, Img, LicenseContainer, License, Icon } from './user-info.styles'
import { MdVisibility, MdVisibilityOff, MdContentCopy } from 'react-icons/md'
import { useEffect, useState } from 'react'

const UserInfoSettings = ({ user }) => {

    let templicenseFake = ""
    let date = ""
    
    if (user) {
        const created = new Date(user.created)
        date = created.getDate() + '/' + created.getMonth() + '/' + created.getFullYear()

        for (let index = 0; index < user.key.length; index++) {
            templicenseFake += '*'
        }
    }

    const licenseFake = templicenseFake

    const [isKeyVisible, setIsKeyVisible] = useState(false)
    useEffect(() => { }, [isKeyVisible]);


    return (
        <>
            {
                user &&
                <>
                    <Img src={user.user.avatar} alt="" />

                    <div>
                        <P><Span>NAME:</Span> {user.user.discord.username}#{user.user.discord.discriminator}</P>
                        <P><Span>EMAIL:</Span> {user.email}</P>
                        <P><Span>PLAN:</Span> {user.plan.name} <Span>TYPE:</Span> {user.plan.type}</P>
                        <P><Span>SUBSCRIPTION:</Span> {`${date}`}</P>
                        <LicenseContainer>
                            <Span>LICENSE:</Span>
                            {
                                isKeyVisible ?
                                    (
                                        <>
                                            <License >{user.key}</License>
                                            <Icon>
                                                <MdVisibilityOff onClick={() => { setIsKeyVisible(false) }} />
                                            </Icon>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <License >{licenseFake}</License>
                                            <Icon>
                                                <MdVisibility onClick={() => { setIsKeyVisible(true) }} />
                                            </Icon>
                                        </>
                                    )
                            }
                            <Icon>
                                <MdContentCopy onClick={() => { navigator.clipboard.writeText(user.key) }} />
                            </Icon>
                        </LicenseContainer>
                    </div>
                </>
            }
        </>
    )
}

export default UserInfoSettings