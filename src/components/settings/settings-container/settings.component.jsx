import { SettingsContainer, GridContainer, Container, BoxPositionContainer, ContainerTitle } from './settings.styles'
import UserInfoSettings from '../user-info/user-info.component'
import FormInput from '../../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../../button/button.component'

import { selectCurrentUser } from '../../../redux/user/user.selector'
import { setCurrentUser } from '../../../redux/user/user.action'
import { setBoxPosition, setWebhookUrl } from '../../../redux/settings/settings.action'
import { selectBoxPosition, selectWebhookUrl } from '../../../redux/settings/settings.selector'
import { useSelector, useDispatch } from 'react-redux'

const Setting = ({ category }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser)
    const box_position = useSelector(selectBoxPosition)
    const webhook_url = useSelector(selectWebhookUrl)

    const handleChangeRadio = (value) => {
        dispatch(setBoxPosition(value))
    };

    const handleChangeInput = (event) => {
        const { value } = event.target;
        dispatch(setWebhookUrl(value))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (webhook_url !== "" && webhook_url.startsWith("https://discord.com/api/webhooks/")) {
            testWebhook(webhook_url);
        }
    };

    const testWebhook = (url_private) => {
        var request = new XMLHttpRequest();
        request.open("POST", url_private);
        request.setRequestHeader('Content-type', 'application/json');
        var myEmbed = {
            title: "Test Webhook!",
            description: "Test",
            color: ("65280"),
            timestamp: new Date(),
            footer: {
                icon_url: ""
            }
        }

        var params = {
            username: "SwordIo",
            avatar_url: "http://localhost:3000/static/media/sword.0cf086a1f6704c89ddd4.ico",
            embeds: [myEmbed]
        }

        request.send(JSON.stringify(params));
    }

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(setCurrentUser(null))
    }

    return (
        <>
            <h1 className='title'>{category}</h1>

            <SettingsContainer>

                <GridContainer>
                    <Container>
                        <FormInput
                            label="Webhook"
                            type='text'
                            onChange={handleChangeInput}
                            name='webhook_url'
                            value={webhook_url}
                        />
                        <Button onClick={handleSubmit}>Test Webhook</Button>
                    </Container>
                </GridContainer>

                <GridContainer style={{ backgroundColor: "var(--background-color-lighter)" }}>
                    <Container>
                        <ContainerTitle>User Information</ContainerTitle>
                        <UserInfoSettings user={currentUser} />
                    </Container>
                </GridContainer>

                {/* <UserInfoSettings user={settings.user_info} /> */}

                <GridContainer style={{ backgroundColor: "var(--background-color-lighter)" }}>
                    <Container>
                        <ContainerTitle>Box Position</ContainerTitle>
                        <BoxPositionContainer>
                            <a id='container-top-left' onClick={() => handleChangeRadio("top-left")}>
                                <input type="radio"
                                    name="box-position"
                                    value="top-left"
                                    id="top-left"
                                    title='top-left'
                                    checked={box_position === "top-left"}
                                    onChange={() => handleChangeRadio("top-left")}
                                />
                            </a>
                            <a id='container-top-right' onClick={() => handleChangeRadio("top-right")}>
                                <input
                                    type="radio"
                                    name="box-position"
                                    value="top-right"
                                    id="top-right"
                                    title='top-right'
                                    checked={box_position === "top-right"}
                                    onChange={() => handleChangeRadio("top-right")} />
                            </a>
                            <a id='container-bot-left' onClick={() => handleChangeRadio("bot-left")}>
                                <input type="radio"
                                    name="box-position"
                                    value="bot-left"
                                    id="bot-left"
                                    title='bot-left'
                                    checked={box_position === "bot-left"}
                                    onChange={() => handleChangeRadio("bot-left")} />
                            </a>
                            <a id='container-bot-right' onClick={() => handleChangeRadio("bot-right")}>
                                <input type="radio"
                                    name="box-position"
                                    value="bot-right"
                                    id="bot-right"
                                    title='bot-right'
                                    checked={box_position === "bot-right"}
                                    onChange={() => handleChangeRadio("bot-right")} />
                            </a>
                        </BoxPositionContainer>
                    </Container>
                </GridContainer>

                <GridContainer>
                    <Container>
                        <Button buttonType={BUTTON_TYPE_CLASSES.close} onClick={handleClick}>sign out</Button>
                    </Container>
                </GridContainer>

            </SettingsContainer>
        </>
    )
}

export default Setting