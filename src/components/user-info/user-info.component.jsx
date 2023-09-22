import { UserInfoContainer, Img, TextContainer } from './user-info.styles'

const UserInfo = ({ user }) => {
    return (
        <UserInfoContainer>
            {
                user &&
                
                <>
                    <Img src={user.user.avatar} alt="" />
                    <TextContainer>
                        <p>{user.user.discord.username}#{user.user.discord.discriminator}</p>
                        <p>{user.plan.name}</p>
                    </TextContainer>
                </>
            }

        </UserInfoContainer>
    )
}

export default UserInfo